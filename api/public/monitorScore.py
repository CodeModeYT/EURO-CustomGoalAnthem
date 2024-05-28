import asyncio
import json
from mobfot import MobFot

client = MobFot()

def getScore(ID, Home, Away):
    data = client.get_match_details(ID)
    if isinstance(data, str):
        try:
            data = json.loads(data)
        except json.JSONDecodeError:
            raise ValueError("Received data is not in valid JSON format")
    if isinstance(data, dict) and 'header' in data and 'teams' in data['header']:
        teams = data['header']['teams']
    else:
        raise ValueError("Expected data to have 'header' and 'teams' keys")
    if not isinstance(teams, list):
        raise ValueError("Expected 'teams' to be a list of dictionaries")

    filtered_scores = {item['name']: item['score'] for item in teams if item.get('name') in [Home, Away]}
    
    return filtered_scores

async def monitorScore(ID, Home, Away, websocket, interval=3):
    previous_score = None
    while True:
        current_score = getScore(ID, Home, Away)
        if current_score != previous_score:
            print("Score updated:", current_score)
            await websocket.send(json.dumps({"type": "score_update", "data": current_score}))
            previous_score = current_score
        else:
            print("No change in score.")
        await asyncio.sleep(interval)
