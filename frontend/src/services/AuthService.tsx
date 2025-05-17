import axiosInstance from "@/utils/axiosInstance";
import type { LoginResponse } from "@/types/LoginResponse";

export class AuthService {
  static async login(email: string, password: string): Promise<LoginResponse> {
    const response = await axiosInstance.post("/auth/login", { email, password });
    return response.data;
  }

  static async register(email: string, password: string, displayName: string) {
    const response = await axiosInstance.post("/auth/register", {
      email,
      password,
      display_name: displayName,
    });
    return response.data;
  }

    static async getUserProfile(): Promise<any> {
    const response = await axiosInstance.get("/auth/profile");
    return response.data;
  }
}