import { LoginForm } from "@/components/LoginForm";
import React from "react";

export default function LoginPage(): React.ReactElement {
  return (
    <div className="flex flex-col items-center justify-center mt-25 bg-[#09090b] text-white">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}