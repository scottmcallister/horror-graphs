from flask import Flask, render_template
from flask_restful import reqparse, Resource, Api
import json
import psycopg2
import psycopg2.extras
from flask import jsonify

app = Flask(__name__)
api = Api(app)

parser = reqparse.RequestParser()
dbname = "horror_movies"
user = "postgres"
password = ""
host = "127.0.0.1"
port = 5432


@app.route('/')
def index():
    return render_template('index.html', title="Horror Movie Search")


@app.route('/api/movie')
def movies():
    con = psycopg2.connect(database=dbname, user=user, password=password,
                           host=host, port=port)
    cur = con.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
    cur.execute('select * from movie limit 20;')
    movies = cur.fetchall()
    print(movies)
    cur.connection.close()
    return jsonify({'movies': movies})


if __name__ == '__main__':
    app.run(debug=True)
