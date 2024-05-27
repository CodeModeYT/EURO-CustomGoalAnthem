import asyncio
import websockets

async def notify(websocket, path):
    while True:
        message = "New notification!"
        await websocket.send(message)
        await asyncio.sleep(5)  # Send a notification every 5 seconds

async def main():
    server = await websockets.serve(notify, "localhost", 8765)
    print("WebSocket server started.")
    await server.wait_closed()

asyncio.run(main())
