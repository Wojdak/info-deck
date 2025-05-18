import requests
from .base_client import BaseAPIClient
from app.config import settings

class GamesAPIClient(BaseAPIClient):
    def __init__(self):
        super().__init__(settings.RAWG_API_URL, settings.RAWG_API_KEY)

    def get(self, endpoint: str, params: dict = None) -> dict:
        if params is None:
            params = {}

        params["key"] = self.api_key
        url = f"{self.base_url}/{endpoint}"

        response = requests.get(url, params=params)
        response.raise_for_status()
        data =  response.json()

        return self.clean_response(data)