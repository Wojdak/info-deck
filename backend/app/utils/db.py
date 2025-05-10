import asyncpg
from app.config import settings

async def get_async_connection():
    try:
        connection = await asyncpg.connect(
            user=settings.DB_USER,
            password=settings.DB_PASSWORD,
            host=settings.DB_HOST,
            port=settings.DB_PORT,
            database=settings.DB_NAME,
        )
        print("Async PostgreSQL connection successful")
        return connection
    except Exception as e:
        print(f"Failed to connect to the database: {e}")
        return None