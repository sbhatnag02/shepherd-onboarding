from flask import Flask
from flask.templating import render_template
app = Flask(__name__)


# Refer to https://flask.palletsprojects.com/en/2.0.x/quickstart/

@app.route('/<page_name>')
def index(page_name):
    return render_template(page[page_name])

@app.route('/page1')
@app.route('/page1alt')
def page1():
    return "this is page 1"

page = {
    "intro": "your_code.html"
}

if __name__ == "__main__":
    app.run(debug=True)