from fastapi import APIRouter, HTTPException, Depends
from app.services.external_services.supabase_service import SupabaseService
from app.models.user import UserRegister, UserLogin, UserUpdate
from app.dependencies import get_current_user

router = APIRouter()

@router.post("/register")
async def register_user(user: UserRegister):
    response = SupabaseService.register_user(user.display_name, user.email, user.password)

    if "error" in response:
        raise HTTPException(status_code=400, detail=response["error"])
    
    return {"message": "User registered successfully"}

@router.post("/login")
async def login_user(user: UserLogin):
    response = SupabaseService.login_user(user.email, user.password)

    if "error" in response:
        raise HTTPException(status_code=400, detail=response["error"])
    
    return {
        "access_token": response["access_token"],
        "expires_in": response["expires_in"]
    }

@router.get("/profile")
async def get_profile(current_user: dict = Depends(get_current_user)):
    return {
        "id": current_user.get("sub"),
        "email": current_user.get("email"),
        "display_name": current_user.get("user_metadata", {}).get("display_name", "No Display Name Set")
    }

@router.put("/profile")
async def update_profile(user_update: UserUpdate, current_user: dict = Depends(get_current_user)):
    response = SupabaseService.update_profile(email=user_update.email, display_name=user_update.display_name, password=user_update.password)

    if "error" in response:
        raise HTTPException(status_code=400, detail=response["error"])
    
    return {"message": "Profile updated successfully"}

@router.post("/logout")
async def logout(current_user: dict = Depends(get_current_user)):
    return {"message": "Successfully logged out."}