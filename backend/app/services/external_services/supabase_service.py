from app.config import supabase_client

class SupabaseService:
    @staticmethod 
    def register_user(display_name: str, email: str, password: str):
        response = supabase_client.auth.sign_up({"email": email, "password": password, "options": {"data": { "display_name": display_name }}})

        if "error" in response:
            return {"error": response["error"]["message"]}
        
        return response

    @staticmethod
    def login_user(email: str, password: str):
        response = supabase_client.auth.sign_in_with_password({"email": email, "password": password})
        if "error" in response:
            return {"error": response["error"]["message"]}
        
        return {
            "access_token": response.session.access_token,
            "expires_in": response.session.expires_in
        }
    
    @staticmethod
    def update_profile(email: str, display_name: str, password: str):
        update_data = {}

        if email:
            update_data["email"] = email
        if display_name:
            update_data["data"] = {"display_name": display_name}
        if password:
            update_data["password"] = password

        if not update_data:
            return {"error": "No data to update."}
    
        response = supabase_client.auth.update_user(update_data)
        if "error" in response:
            return {"error": response["error"]["message"]}
                    
        return response