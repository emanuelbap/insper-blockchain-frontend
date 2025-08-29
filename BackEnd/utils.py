import sqlite3
from flask import Flask, request, redirect, url_for, render_template
from servidor import index


def load_template(arq, **context):
    """
    Carrega um template da pasta 'templates/' e renderiza com variáveis passadas.
    Exemplo: load_template('index', notes=notes)
    """
    return render_template(f"{arq}.html", **context)