# Main application entry point
from fastapi import FastAPI
from app.config import settings
from app.routers import auth

app = FastAPI(title=settings.PROJECT_NAME, version=settings.API_VERSION)

# Registering Routers
app.include_router(auth.router, prefix="/auth")

@app.get("/")
def read_root():
    return {"message": "Welcome to InfoDeck API!"}