import asyncio
import websockets
import json
from public.monitorScore import monitorScore
from public.getMinute import get_current_minute

with open('config\match.json') as config_file:
    try:
        config = json.load(config_file)
        print("Config loaded successfully:")
        print(config)
    except json.JSONDecodeError as e:
        print("Error loading config.json:", e)

async def notify(websocket, path):
    print("Client connected.")
    match_id = config['id']
    home_team = config['home']
    away_team = config['away']

    try:
        monitor_task = asyncio.create_task(monitorScore(match_id, home_team, away_team, websocket))
        minute_task = asyncio.create_task(get_current_minute(match_id, websocket))
        await asyncio.gather(monitor_task, minute_task)
    except Exception as e:
        print(f"Error in notify: {e}")

async def main():
    server = await websockets.serve(notify, "localhost", 8765)
    print("WebSocket server started.")
    await server.wait_closed()

asyncio.run(main())
