# Main application entry point
from fastapi import FastAPI
from app.config import settings

app = FastAPI(title=settings.PROJECT_NAME, version=settings.API_VERSION)

@app.get("/")
def read_root():
    return {"message": "Welcome to InfoDeck API!"}