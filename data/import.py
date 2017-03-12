import psycopg2

dbname = "horror_movies"
user = "postgres"
password = ""
host = "127.0.0.1"
port = 5432
SQL_STATEMENT = """
    COPY movie(title, director, year, country,
    critic_score, user_score, poster, rt_url) FROM STDIN WITH
        CSV
        HEADER
        DELIMITER AS ','
    """
con = psycopg2.connect(database=dbname, user=user, password=password,
                       host=host, port=port)
cur = con.cursor()
f = open('./movies.csv')
cur.copy_expert(sql=SQL_STATEMENT, file=f)
con.commit()
con.close()
