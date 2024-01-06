from pygments import highlight
from pygments.lexers import PythonLexer, JavaLexer
from pygments.formatters import HtmlFormatter
from html.parser import HTMLParser


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


class MLStripper(HTMLParser):
    def __init__(self):
        self.reset()
        self.fed = []

    def handle_data(self, d):
        self.fed.append(d)

    def get_data(self):
        return ''.join(self.fed)


def strip_tags(html):
    s = MLStripper()
    s.feed(html)
    return s.get_data()
