import json
from mobfot import MobFot
import asyncio

client = MobFot()

async def get_current_minute(match_id, websocket, interval=60):
    print("getMinute is called")
    while True:
        data = client.get_match_details(match_id=match_id)

        if isinstance(data, str):
            data = json.loads(data) 

        if 'header' in data and 'status' in data['header']:
            status = data['header']['status']
            possible_keys = ['currentMinute', 'liveTime', 'elapsed', 'min']
            for key in possible_keys:
                if key in status:
                    print(f"Sending {key}: {status[key]}")  # Debug print
                    await websocket.send(json.dumps({"type": "playtime_update", "data": status[key]}))
        await asyncio.sleep(interval)


