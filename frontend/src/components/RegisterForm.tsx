// src/components/LoginForm.tsx
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthStore } from "@/context/authStore";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function RegisterForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { register } = useAuthStore();
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await register(email, password, displayName);
      navigate("/dashboard");
    } catch (err: any) {
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="bg-[#09090b] text-white border border-white/10 shadow-md">
        <CardHeader>
          <CardTitle className="text-2xl text-white">Register</CardTitle>
          <CardDescription className="text-gray-400">
            Enter your details below to create your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRegister}>
            <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                <Label htmlFor="username" className="text-white">
                  Username
                </Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="johndoe"
                  className="bg-[#1c1c1e] text-white border border-white/20 placeholder-gray-400"
                  value={displayName}
                  onChange={(e) => {
                    setDisplayName(e.target.value);
                    setError(null);
                  }}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="johndoe@example.com"
                  className="bg-[#1c1c1e] text-white border border-white/20 placeholder-gray-400"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError(null);
                  }}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password" className="text-white" >
                    Password
                  </Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  className="bg-[#1c1c1e] text-white border border-white/20 placeholder-gray-400"
                  placeholder="*************"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(null);
                  }}
                  required
                />
              </div>

              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

              <Button type="submit" className="w-full bg-purple-600 text-white hover:bg-purple-500 transition rounded-md">
                {loading ? "Creating account..." : "Register"}
              </Button>
            </div>

            <div className="mt-4 text-center text-sm text-gray-400">
              Already have an account?{" "}
              <span 
                className="underline underline-offset-4 text-white hover:text-purple-400 cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Login here
              </span>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
