from .games_client import GamesAPIClient

class APIClientFactory:
    @staticmethod
    def get_client(client_type: str):
        if client_type == "games":
            return GamesAPIClient()
        else:
            raise ValueError(f"Unknown client type: {client_type}")