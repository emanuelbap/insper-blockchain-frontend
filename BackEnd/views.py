from utils import *
import sqlite3
from utils import *

def index():
    return load_template('index')

def DataBase ():
    con = sqlite3.connect("banco.db")
    cur = con.cursor()
    cur.execute("CREATE TABLE IF NOT EXISTS notes(id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT NOT NULL, email TEXT)")
    con.commit()
    con.close()