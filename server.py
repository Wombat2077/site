import sqlite3

from sanic import Sanic
from sanic import html
from sanic.request import Request
from sanic.response import json

import os
server = Sanic('server')



server.static('/', './site', index='index.html')

if not os.path.isfile('server.db'):

    con: sqlite3.Connection = sqlite3.connect('server.db', timeout=10)
    con.execute('''CREATE TABLE requests (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT,
                    phone TEXT,
                    CITY TEXT,
                    age INTEGER,
                    telegram TEXT
                )''')
    con.close()

@server.route('/create-request', methods=['POST'])
def create_request(request: Request) -> None:
    print(type(request.json['name']))
    con: sqlite3.Connection = sqlite3.connect('server.db', timeout=10)
    last_id = con.execute('select id from requests order by id desc limit 1').fetchone()
    last_id: int = last_id[0] + 1 if last_id else 1
    con.execute(f'INSERT INTO requests VALUES (?, ?, ?, ?, ?, ?)', ( 
                                               last_id,
                                               request.json['name'],
                                               request.json['phone'],
                                               request.json['city'],
                                               request.json['age'],
                                               request.json['telegram']
                                                                    ))
    con.commit()
    return json('ok')

