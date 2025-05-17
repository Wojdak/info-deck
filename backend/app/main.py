# Main application entry point
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.config import settings
from app.routers import auth

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

@app.get("/")
def read_root():
    return {"message": "Welcome to InfoDeck API!"}