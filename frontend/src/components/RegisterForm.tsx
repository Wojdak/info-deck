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

export function RegisterForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
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
          <form>
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
                  required
                  placeholder="*************"
                />
              </div>

              <Button type="submit" className="w-full bg-purple-600 text-white hover:bg-purple-500 transition rounded-md">
                Register
              </Button>
            </div>

            <div className="mt-4 text-center text-sm text-gray-400">
             Already have an account?{" "}
              <a href="/login" className="underline underline-offset-4 text-white hover:text-purple-400">
                Login here
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
