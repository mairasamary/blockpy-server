import * as ts from "typescript";

declare global {
    const RAW_D_TS_FILES: Record<string, string>;
}

//
// Result of compiling TypeScript code.
//
export interface CompilationResult {
    code?: string;
    diagnostics: ts.Diagnostic[]
};

//
// Check and compile in-memory TypeScript code for errors.
//
export function compile(code: string, libs: string[]): CompilationResult {
    // @ts-ignore
    ts.sys = {
        args: [],
        newLine: "\n",
        createDirectory(path: string): void {
        },
        directoryExists(path: string): boolean {
            return false;
        },
        exit(exitCode?: number): void {
        },
        fileExists(path: string): boolean {
            return false;
        },
        getCurrentDirectory(): string {
            return "";
        },
        getDirectories(path: string): string[] {
            return [];
        },
        getExecutingFilePath(): string {
            return "";
        },
        readDirectory(path: string, extensions?: readonly string[], exclude?: readonly string[], include?: readonly string[], depth?: number): string[] {
            return [];
        },
        readFile(path: string, encoding?: string): string | undefined {
            return undefined;
        },
        resolvePath(path: string): string {
            return "";
        },
        write(s: string): void {
        },
        writeFile(path: string, data: string, writeByteOrderMark?: boolean): void {
        },
        useCaseSensitiveFileNames: false
    }
    const options = ts.getDefaultCompilerOptions();
    options.noImplicitAny = true;
    options.inlineSources = true;
    options.inlineSourceMap = true;
    options.target = 99;
    options.removeComments = false;

    const realHost = ts.createCompilerHost(options, true);

    const dummyFilePath = "/in-memory-file.ts";
    const dummySourceFile = ts.createSourceFile(dummyFilePath, code, ts.ScriptTarget.Latest);
    let outputCode: string | undefined = undefined;
    const otherFakeFiles: Record<string, string> = RAW_D_TS_FILES;

    const host: ts.CompilerHost = {
        fileExists: filePath => filePath === dummyFilePath || realHost.fileExists(filePath),
        directoryExists: realHost.directoryExists && realHost.directoryExists.bind(realHost),
        getCurrentDirectory: realHost.getCurrentDirectory.bind(realHost),
        getDirectories: realHost.getDirectories.bind(realHost),
        getCanonicalFileName: fileName => realHost.getCanonicalFileName(fileName),
        getNewLine: realHost.getNewLine.bind(realHost),
        getDefaultLibFileName: realHost.getDefaultLibFileName.bind(realHost),
        getSourceFile: (fileName, languageVersion, onError, shouldCreateNewSourceFile) => {
            return fileName === dummyFilePath
                ? dummySourceFile
                : otherFakeFiles[fileName]
                    ? ts.createSourceFile(fileName, otherFakeFiles[fileName], languageVersion)
                : realHost.getSourceFile(fileName, languageVersion, onError, shouldCreateNewSourceFile)
        },
        readFile: filePath => {
            return filePath === dummyFilePath
                ? code
                : realHost.readFile(filePath)
        },
        useCaseSensitiveFileNames: () => false, //realHost.useCaseSensitiveFileNames(),
        writeFile: (fileName, data) => {
            //console.log("wf", fileName, data);
            outputCode = data;
        },
    };

    const rootNames = Object.keys(RAW_D_TS_FILES); //libs.map(lib => require.resolve(`typescript/lib/lib.${lib}.d.ts`));
    const program = ts.createProgram(rootNames.concat([dummyFilePath]), options, host);
    //console.log("P",program);
    const emitResult = program.emit();
    //console.log("ER", emitResult);
    const diagnostics = ts.getPreEmitDiagnostics(program);
    return {
        code: outputCode,
        diagnostics: emitResult.diagnostics.concat(diagnostics)
    };
}




export function delint(sourceFile: ts.SourceFile) {
  delintNode(sourceFile);

  function delintNode(node: ts.Node) {
    switch (node.kind) {
      case ts.SyntaxKind.ForStatement:
      case ts.SyntaxKind.ForInStatement:
      case ts.SyntaxKind.WhileStatement:
      case ts.SyntaxKind.DoStatement:
        if ((node as ts.IterationStatement).statement.kind !== ts.SyntaxKind.Block) {
          report(
            node,
            'A looping statement\'s contents should be wrapped in a block body.'
          );
        }
        break;

      case ts.SyntaxKind.IfStatement:
        const ifStatement = node as ts.IfStatement;
        if (ifStatement.thenStatement.kind !== ts.SyntaxKind.Block) {
          report(ifStatement.thenStatement, 'An if statement\'s contents should be wrapped in a block body.');
        }
        if (
          ifStatement.elseStatement &&
          ifStatement.elseStatement.kind !== ts.SyntaxKind.Block &&
          ifStatement.elseStatement.kind !== ts.SyntaxKind.IfStatement
        ) {
          report(
            ifStatement.elseStatement,
            'An else statement\'s contents should be wrapped in a block body.'
          );
        }
        break;

      case ts.SyntaxKind.BinaryExpression:
        const op = (node as ts.BinaryExpression).operatorToken.kind;
        if (op === ts.SyntaxKind.EqualsEqualsToken || op === ts.SyntaxKind.ExclamationEqualsToken) {
          report(node, 'Use \'===\' and \'!==\'.');
        }
        break;
    }

    ts.forEachChild(node, delintNode);
  }

  function report(node: ts.Node, message: string) {
    const { line, character } = sourceFile.getLineAndCharacterOfPosition(node.getStart());
    console.log(`${sourceFile.fileName} (${line + 1},${character + 1}): ${message}`);
  }
}

