from app.config import supabase_client

class SupabaseService:
    @staticmethod 
    def register_user(display_name: str, email: str, password: str):
        response = supabase_client.auth.sign_up({"email": email, "password": password, "options": {"data": { "display_name": display_name }}})

        if "error" in response:
            return {"error": "Registration failed."}
        
        return response

    @staticmethod
    def login_user(email: str, password: str):
        response = supabase_client.auth.sign_in_with_password({"email": email, "password": password})
        if "error" in response:
            return {"error": "Login failed."}
        
        return {
            "access_token": response.session.access_token,
            "expires_in": response.session.expires_in
        }