from abc import ABC, abstractmethod

class BaseAPIClient(ABC):
    def __init__(self, base_url: str, api_key: str):
        self.base_url = base_url
        self.api_key = api_key
        self.clean_fields = ["next", "previous"]
        
    @abstractmethod
    def get(self, endpoint: str, params: dict = None) -> dict:
        pass

    def clean_response(self, data: dict) -> dict:
        for field in self.clean_fields:
            if field in data:
                data.pop(field)
        return data