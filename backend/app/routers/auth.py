from fastapi import APIRouter, HTTPException
from app.services.supabase_service import SupabaseService
from app.models.user import UserRegister, UserLogin

router = APIRouter()

@router.post("/register")
async def register_user(user: UserRegister):
    response = SupabaseService.register_user(user.display_name, user.email, user.password)

    if "error" in response:
        raise HTTPException(status_code=400, detail="Registration failed.")
    
    return {"message": "User registered successfully"}

@router.post("/login")
async def login_user(user: UserLogin):
    response = SupabaseService.login_user(user.email, user.password)

    if "error" in response:
        raise HTTPException(status_code=400, detail="Login failed.")
    
    return {
        "access_token": response["access_token"],
        "expires_in": response["expires_in"]
    }