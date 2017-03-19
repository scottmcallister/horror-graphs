from flask import Flask, render_template, jsonify, request
from flask_restful import reqparse, Resource, Api
import json
import psycopg2
import psycopg2.extras

app = Flask(__name__)
api = Api(app)

parser = reqparse.RequestParser()
dbname = "horror_movies"
user = "postgres"
password = ""
host = "127.0.0.1"
port = 5432


def gen_movie_query(args):
    query = 'select * from movies'
    for arg in args:
        query += {
            arg == 'keywords': ' where title like "%"'
        }
    query += ';'
    return query


@app.route('/')
def index():
    return render_template('index.html', title="Horror Movie Search")


@app.route('/api/movie')
def movies():
    keywords = request.args.get('keywords') or ''
    director = request.args.get('director') or ''
    year_min = request.args.get('yearMin') or 0
    year_max = request.args.get('yearMax') or 3000
    critic_min = request.args.get('criticMin') or 0
    critic_max = request.args.get('criticMax') or 101
    user_min = request.args.get('userMin') or 0
    user_max = request.args.get('userMax') or 101
    country = request.args.get('country') or ''
    page = request.args.get('page') or 1
    offset = (int(page) - 1) * 30
    con = psycopg2.connect(database=dbname, user=user, password=password,
                           host=host, port=port)
    cur = con.cursor(cursor_factory=psycopg2.extras.RealDictCursor)
    cur.execute("""SELECT * FROM movie
                WHERE title ILIKE %s
                AND director ILIKE %s
                AND country ILIKE %s
                AND year >= %s
                AND year <= %s
                AND critic_score >= %s
                AND critic_score <= %s
                AND user_score >= %s
                AND user_score <= %s
                ORDER BY critic_score desc
                limit 30 offset %s""",
                ('%' + keywords + '%',
                 '%' + director + '%',
                 '%' + country + '%',
                 year_min,
                 year_max,
                 critic_min,
                 critic_max,
                 user_min,
                 user_max,
                 offset))
    print(cur.query)
    movies = cur.fetchall()
    cur.connection.close()
    return jsonify({'movies': movies})
    return jsonify({'args': request.args})


if __name__ == '__main__':
    app.run(debug=True)
