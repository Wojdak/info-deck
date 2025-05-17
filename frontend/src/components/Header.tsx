// src/components/Header.tsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useAuthStore } from "@/context/authStore";

const Header: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="sticky top-0 bg-[#09090b] px-10 py-4 flex items-center justify-between text-white z-50 shadow-md border-b border-white/20">
      {/* Left Section (Logo + Navigation Links) */}
      <div className="flex items-center gap-6">
        <Link to="/" className="text-2xl font-extrabold text-white hover:text-purple-400 transition">InfoDeck</Link>
        <div className="hidden md:flex items-center gap-4">
          {isAuthenticated && (
            <Link to="/dashboard" className="text-white hover:text-purple-400 transition">Dashboard</Link>
          )}
          <Link to="/faq" className="text-white hover:text-purple-400 transition">FAQ</Link>
        </div>
      </div>

      {/* Right Section (User Info + Logout) */}
      <div className="hidden md:flex items-center gap-4">
        {isAuthenticated ? (
          <>
            <p className="text-white text-sm font-bold">{user?.display_name || "User"}</p>
            <Button 
              size="sm" 
              className="bg-red-600 text-white hover:bg-red-500 transition rounded-md px-4 py-2"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </>
        ) : (
          <Link to="/login">
            <Button size="sm" className="bg-purple-600 text-white hover:bg-purple-500 transition rounded-md px-6 py-2">
              Login
            </Button>
          </Link>
        )}
      </div>

      {/* Mobile Navigation (Dropdown) */}
      <div className="flex md:hidden items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="text-white bg-purple-600 hover:bg-purple-500">Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[#1c1c1e] text-white border border-gray-700">
            {isAuthenticated ? (
              <>
                <DropdownMenuItem asChild>
                  <Link to="/dashboard">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <p className="text-white text-sm font-bold">{user?.display_name || "User"}</p>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <span onClick={handleLogout}>Logout</span>
                </DropdownMenuItem>
              </>
            ) : (
              <>
                <DropdownMenuItem asChild>
                  <Link to="/login">Login</Link>
                </DropdownMenuItem>
              </>
            )}
            <DropdownMenuItem asChild>
              <Link to="/faq">FAQ</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
