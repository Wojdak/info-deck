# Configuration settings (ENV, DB connection)
import os
from dotenv import load_dotenv

load_dotenv()  # Load environment variables from .env file

class Settings:
    PROJECT_NAME: str = "InfoDeck API"
    API_VERSION: str = "v1"
    DEBUG_MODE: bool = os.getenv("DEBUG_MODE", "True") == "True"

    # API Keys
    RAWG_API_KEY: str = os.getenv("RAWG_API_KEY")
    TMDB_API_KEY: str = os.getenv("TMDB_API_KEY")
    FOOTBALL_API_KEY: str = os.getenv("FOOTBALL_API_KEY")

settings = Settings()