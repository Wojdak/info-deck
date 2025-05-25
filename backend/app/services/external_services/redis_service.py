import redis
import json
import hashlib
from typing import Optional
import logging
from app.config import settings

logger = logging.getLogger(__name__)

class RedisService:
    def __init__(self, redis_url: str, default_ttl: int = 1800):
        self.redis_instance = redis.StrictRedis.from_url(redis_url, decode_responses=True)
        self.default_ttl = default_ttl

    def generate_key(self, namespace: str, identifier: str) -> str:
        hash_id = hashlib.sha256(identifier.encode()).hexdigest()
        return f"{namespace}:{hash_id}"
    
    def get(self, namespace: str, identifier: str) -> Optional[dict]:
        key = self.generate_key(namespace, identifier)
        cached = self.redis_instance.get(key)
        if (cached):
            logger.info(f"Redis cache hit: {key}")
            return json.loads(cached)
        logger.info(f"Redis cache miss: {key}")
        return None
    
    def set(self, namespace: str, identifier: str, value: dict, ttl: Optional[int]=None):
        key = self.generate_key(namespace, identifier)
        self.redis_instance.setex(key, ttl or self.default_ttl, json.dumps(value))
        logger.info(f"Redis cache set: {key} (TTL: {ttl or self.default_ttl}s)")