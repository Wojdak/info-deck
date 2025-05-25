import logging
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.config import settings
from app.routers import auth
from app.routers import games

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
)

app = FastAPI(title=settings.PROJECT_NAME, version=settings.API_VERSION)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.FRONTEND_URL],
    allow_methods=["*"],
    allow_headers=["*"], 
    allow_credentials=True, 
)

# Registering Routers
app.include_router(auth.router, prefix="/auth")
app.include_router(games.router, prefix="/api")

@app.get("/")
def read_root():
    return {"message": "Welcome to InfoDeck API!"}