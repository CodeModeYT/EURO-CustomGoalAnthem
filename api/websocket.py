import asyncio
import websockets
from public.monitorScore import monitorScore

async def notify(websocket, path):
    match_id = 4480794
    home_team = "VfL Bochum"
    away_team = "Fortuna Düsseldorf"
    
    await monitorScore(match_id, home_team, away_team, websocket) 

async def main():
    server = await websockets.serve(notify, "localhost", 8765)
    print("WebSocket server started.")
    await server.wait_closed()

asyncio.run(main())
