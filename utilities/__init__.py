from pygments import highlight
from pygments.lexers import PythonLexer, JavaLexer
from pygments.formatters import HtmlFormatter


def highlight_python_code(code, linenos=True, prestyles=''):
    formatter = HtmlFormatter(linenos=linenos, noclasses=True,
                              lineanchors="code-lineno",
                              linespans="code-span",
                              prestyles=prestyles,
                              # style='colorful'
                              )
    return highlight(code, PythonLexer(), formatter)

def highlight_java_code(code, linenos=True, prestyles=''):
    formatter = HtmlFormatter(linenos=linenos, noclasses=True,
                              lineanchors="code-lineno",
                              linespans="code-span",
                              prestyles=prestyles,
                              # style='colorful'
                              )
    return highlight(code, JavaLexer(), formatter)
