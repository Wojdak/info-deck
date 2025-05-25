from fastapi import APIRouter, HTTPException, Depends
from app.dependencies import get_current_user
from app.services.apis.api_client_factory import APIClientFactory
from datetime import datetime, timedelta
from app.config import settings
from app.services.external_services.redis_service import RedisService
import json

router = APIRouter()
games_client = APIClientFactory.get_client("games")
cache = RedisService(settings.REDIS_URL, default_ttl=1800) # 30 min cache

@router.get("/top-games")
def get_top_games(start_date: str = None, end_date: str = None, page_size: int = 10, current_user: dict = Depends(get_current_user)):
    try:
        if not start_date:
            start_date = datetime.now().strftime("%Y-%m-%d")
        if not end_date:
            end_date = (datetime.now() + timedelta(days=30)).strftime("%Y-%m-%d")

        cache_key = json.dumps({
            "endpoint": "games",
            "dates": f"{start_date},{end_date}",
            "page_size": page_size,
            "ordering": "-added"
        })

        cached = cache.get("games", cache_key)
        if cached:
            return {"games": cached}

        query_params = {
            "dates": f"{start_date},{end_date}",
            "page_size": page_size,
            "ordering": "-added"
        }

        data = games_client.get("games", query_params)
        
        cache.set("games", cache_key, data)
        return {"games": data}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))