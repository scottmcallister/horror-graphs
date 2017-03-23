from flask import Flask, render_template, jsonify, request
from flask_restful import reqparse, Resource, Api
from flask_sqlalchemy import SQLAlchemy
from config import SQLALCHEMY_DATABASE_URI
import json

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
api = Api(app)


class Movie(db.Model):
    __tablename__ = 'movie'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String())
    director = db.Column(db.String())
    country = db.Column(db.String())
    poster = db.Column(db.String())
    year = db.Column(db.Integer)
    critic_score = db.Column(db.Integer)
    user_score = db.Column(db.Integer)
    rt_url = db.Column(db.String())

    @property
    def serialize(self):
        print(self.__table__.columns)
        return {c.name: getattr(self, c.name) for c in self.__table__.columns}

    def __init__(self, title, director, country, poster,
                 year, critic_score, user_score, rt_url):
        self.title = title
        self.director = director
        self.country = country
        self.poster = poster
        self.year = year
        self.critic_score = critic_score
        self.user_score = user_score
        self.rt_url = rt_url

    def __repr__(self):
        return "<Movie (title='%s', director='%s', country='%s', poster='%s', \
            year='%d', critic_score='%d', user_score='%d', rt_url='%s')>" %  \
            (self.title, self.director, self.country, self.poster,
             self.year, self.critic_score, self.user_score, self.rt_url)


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
    movies = Movie.query.all()
    # cur.execute("""SELECT * FROM movie
    #             WHERE title ILIKE %s
    #             AND director ILIKE %s
    #             AND country ILIKE %s
    #             AND year >= %s
    #             AND year <= %s
    #             AND critic_score >= %s
    #             AND critic_score <= %s
    #             AND user_score >= %s
    #             AND user_score <= %s
    #             ORDER BY critic_score desc
    #             limit 30 offset %s""",
    #             ('%' + keywords + '%',
    #              '%' + director + '%',
    #              '%' + country + '%',
    #              year_min,
    #              year_max,
    #              critic_min,
    #              critic_max,
    #              user_min,
    #              user_max,
    #              offset))
    return jsonify(movies=[movie.serialize for movie in movies])


if __name__ == '__main__':
    app.run(debug=True)
