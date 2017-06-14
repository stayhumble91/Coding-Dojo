from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/ninja/')
def ninja():
    foo = 'tmnt.png'
    return render_template("ninja.html", foo=foo)

@app.route('/ninja/<color>')
def ninja2(color):
    if color == "blue":
        foo = 'leonardo.jpg'
        return render_template("ninja.html", foo=foo)
    elif color == "red":
        foo = 'raphael.jpg'
        return render_template("ninja.html", foo=foo)
    elif color == "orange":
        foo = 'michelangelo.jpg'
        return render_template("ninja.html", foo=foo)
    elif color == "purple":
        foo = 'donatello.jpg'
        return render_template("ninja.html", foo=foo)
    else: 
        foo = 'notapril.jpg'
        return render_template("ninja.html", foo=foo)

app.run(debug=True)