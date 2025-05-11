from pydantic import BaseModel, EmailStr, Field

class UserRegister(BaseModel):
    display_name: str
    email: EmailStr
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserUpdate(BaseModel):
    email: EmailStr = None
    display_name: str = None
    password: str = Field(None, min_length=6, max_length=128)