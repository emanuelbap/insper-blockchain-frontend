from flask import Flask, jsonify, request
from flask_cors import CORS
import sqlite3
from utils import *
from views import *

app = Flask(__name__)
CORS(app)

@app.route('/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        nome = data.get('nome')
        email = data.get('email')
        
        con = sqlite3.connect('banco.db')
        cur = con.cursor()
        cur.execute("INSERT INTO notes (nome, email) VALUES (?, ?)", (nome, email))
        con.commit()
        con.close()
        
        return jsonify({"message": "Registration successful"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# ...existing code...

if __name__ == "__main__":
    DataBase()
    app.run(debug=True, host='0.0.0.0', port=5000)