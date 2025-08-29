from flask import Flask, render_template_string, request, redirect, render_template
import sqlite3
from utils import *
from views import *

app = Flask(__name__)

# @app.route('/')
# def home():

@app.route('/')
def index():
    con = sqlite3.connect('banco.db')
    con.row_factory = sqlite3.Row
    notes = con.execute("SELECT * FROM notes").fetchall()
    con.close()
    return render_template("index.html", notes=notes)

@app.route('/new', methods=['GET', 'POST'])
def nova_pagina():
    return render_template("pagina1.html")

if __name__ == "__main__":
    DataBase() #sempre acima do app.run para o codigo nn ser interrompido
    app.run(debug=True)