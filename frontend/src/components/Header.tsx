// src/components/Header.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useMediaQuery } from "react-responsive";

const Header: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div className="sticky top-0 bg-[#09090b] px-10 py-4 flex flex-col text-white z-50 shadow-md border-b border-white/20">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold text-white-500 hover:text-purple-400 transition">InfoDeck</Link>

        {/* Desktop Navigation */}
        {!isMobile ? (
          <div className="flex items-center gap-6">
            <Link to="/faq" className="text-white hover:text-green-400 transition">FAQ</Link>
            <Link to="/login">
              <Button size="sm" className="bg-purple-600 text-white hover:bg-purple-500 transition rounded-md px-6 py-2">
                Login
              </Button>
            </Link>
            {/* <Link to="/register">
              <Button size="sm" className="bg-purple-600 text-white hover:bg-purple-500 transition rounded-md px-6 py-2">
                Guest Mode
              </Button>
            </Link> */}
          </div>
        ) : (
          // Mobile Navigation (Dropdown Menu)
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="text-white bg-purple-600 hover:bg-purple-500">Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#1c1c1e] text-white border border-gray-700">
              <DropdownMenuItem asChild>
                <Link to="/features">Features</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/pricing">FAQ</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/login">Login</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/register">Guest Mode</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
};

export default Header;
