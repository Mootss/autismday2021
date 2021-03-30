from flask import Flask, render_template
from random import randint
import json

app = Flask(__name__)

def getQuote(arg):
    randnum = randint(0, 16)
    with open("./static/js/quotes.json", encoding="utf8") as quotes:
        quotes = json.load(quotes)
        if arg == "text": 
            return quotes["quotes"][randnum]["text"]
        elif arg == "author":
            if quotes["quotes"][randnum]["author"] != "":
                return "- " + quotes["quotes"][randnum]["author"]
        

@app.route('/')
def index():
    return render_template("index.html",
    quote_text=getQuote("text"),
    quote_author=getQuote("author")
    )

if __name__ == "__main__":
    app.debug = True
    app.run()