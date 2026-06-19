import json
import os
import psycopg2

def handler(event: dict, context) -> dict:
    """Управление профилями детей: получение списка, создание и обновление."""
    cors = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors, 'body': ''}

    method = event.get('httpMethod', 'GET')
    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()

    try:
        if method == 'GET':
            cur.execute(
                "SELECT id, name, age, avatar_url, level, stars FROM child_profiles ORDER BY created_at DESC"
            )
            rows = cur.fetchall()
            profiles = [
                {'id': r[0], 'name': r[1], 'age': r[2], 'avatar_url': r[3], 'level': r[4], 'stars': r[5]}
                for r in rows
            ]
            return {'statusCode': 200, 'headers': cors, 'body': json.dumps({'profiles': profiles})}

        elif method == 'POST':
            body = json.loads(event.get('body') or '{}')
            name = body.get('name', '').strip()
            if not name:
                return {'statusCode': 400, 'headers': cors, 'body': json.dumps({'error': 'Имя обязательно'})}
            age = body.get('age')
            avatar_url = body.get('avatar_url')
            cur.execute(
                "INSERT INTO child_profiles (name, age, avatar_url) VALUES (%s, %s, %s) RETURNING id, name, age, avatar_url, level, stars",
                (name, age, avatar_url)
            )
            row = cur.fetchone()
            conn.commit()
            profile = {'id': row[0], 'name': row[1], 'age': row[2], 'avatar_url': row[3], 'level': row[4], 'stars': row[5]}
            return {'statusCode': 201, 'headers': cors, 'body': json.dumps({'profile': profile})}

        elif method == 'PUT':
            body = json.loads(event.get('body') or '{}')
            profile_id = body.get('id')
            if not profile_id:
                return {'statusCode': 400, 'headers': cors, 'body': json.dumps({'error': 'ID обязателен'})}
            stars = body.get('stars')
            level = body.get('level')
            cur.execute(
                "UPDATE child_profiles SET stars = COALESCE(%s, stars), level = COALESCE(%s, level), updated_at = CURRENT_TIMESTAMP WHERE id = %s RETURNING id, name, age, avatar_url, level, stars",
                (stars, level, profile_id)
            )
            row = cur.fetchone()
            conn.commit()
            if not row:
                return {'statusCode': 404, 'headers': cors, 'body': json.dumps({'error': 'Профиль не найден'})}
            profile = {'id': row[0], 'name': row[1], 'age': row[2], 'avatar_url': row[3], 'level': row[4], 'stars': row[5]}
            return {'statusCode': 200, 'headers': cors, 'body': json.dumps({'profile': profile})}

        elif method == 'DELETE':
            params = event.get('queryStringParameters') or {}
            profile_id = params.get('id')
            if not profile_id:
                return {'statusCode': 400, 'headers': cors, 'body': json.dumps({'error': 'ID обязателен'})}
            cur.execute("DELETE FROM child_profiles WHERE id = %s", (profile_id,))
            conn.commit()
            return {'statusCode': 200, 'headers': cors, 'body': json.dumps({'ok': True})}

    finally:
        cur.close()
        conn.close()

    return {'statusCode': 405, 'headers': cors, 'body': json.dumps({'error': 'Метод не поддерживается'})}
