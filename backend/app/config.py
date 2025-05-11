# Configuration settings (ENV, DB connection)
import os
from dotenv import load_dotenv
from supabase import create_client

load_dotenv()

class Settings:
    PROJECT_NAME: str = "InfoDeck API"
    API_VERSION: str = "v1"
    DEBUG_MODE: bool = os.getenv("DEBUG_MODE", "True") == "True"

    # API Keys
    RAWG_API_KEY: str = os.getenv("RAWG_API_KEY")
    TMDB_API_KEY: str = os.getenv("TMDB_API_KEY")
    FOOTBALL_API_KEY: str = os.getenv("FOOTBALL_API_KEY")

    # Supabase Configuration (For authentication)
    SUPABASE_URL: str = os.getenv("SUPABASE_URL")
    SUPABASE_API_KEY: str = os.getenv("SUPABASE_API_KEY")
    SUPABASE_JWT_PUBLIC_KEY: str = os.getenv("SUPABASE_JWT_PUBLIC_KEY")
    SUPABASE_JWT_AUDIENCE: str = os.getenv("SUPABASE_JWT_AUDIENCE")

    def create_supabase_client(self):
        if not self.SUPABASE_URL or not self.SUPABASE_API_KEY:
            raise ValueError("Supabase URL or API Key is missing.")
        return create_client(self.SUPABASE_URL, self.SUPABASE_API_KEY)
    
    # PostgreSQL Configuration (Direct DB connection with asyncpg)
    DB_HOST: str = os.getenv("DB_HOST")
    DB_PORT: int = int(os.getenv("DB_PORT"))
    DB_NAME: str = os.getenv("DB_NAME")
    DB_USER: str = os.getenv("DB_USER")
    DB_PASSWORD: str = os.getenv("DB_PASSWORD")

settings = Settings()
supabase_client = settings.create_supabase_client()