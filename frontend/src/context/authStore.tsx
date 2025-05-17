import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AuthService} from "@/services/AuthService";
import { jwtDecode } from "jwt-decode";

interface AuthState {
  user: any | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, displayName: string) => Promise<void>;
  authenticateUser:  (accessToken: string) => Promise<void>;
  logout: () => void;
}

interface DecodedJWT {
  sub: string;
  email: string;
  user_metadata?: {
    display_name?: string;
  };
  exp: number;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,

      login: async (email, password) => {
        const data = await AuthService.login(email, password);
        await get().authenticateUser(data.access_token);
      },

      register: async (email, password, displayName) => {
        await AuthService.register(email, password, displayName);
        const data = await AuthService.login(email, password);
        await get().authenticateUser(data.access_token);
      },

      authenticateUser: async (accessToken: string) => {
        set({ token: accessToken });

        const decoded: DecodedJWT = jwtDecode(accessToken);

        const userProfile = {
          id: decoded.sub,
          email: decoded.email,
          display_name: decoded.user_metadata?.display_name || "User",
        };

        set({ user: userProfile, isAuthenticated: true });
      },

      logout: () => {
        set({ user: null, token: null, isAuthenticated: false });
      },
    }),
    {
      name: "auth-store", // Automatically saves state to localStorage under the name "auth-store"
    }
  )
);