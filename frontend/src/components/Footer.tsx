// src/components/Footer.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="w-full h-16 sticky top-[100vh] flex items-center justify-between px-4 md:px-8 bg-[#09090b] border-t border-white/20">
      <p className="text-gray-400 text-sm">
        Developed and maintained by <strong>Jakub Wojdak</strong>.
      </p>
      <Button 
        size="sm" 
        className="flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white text-sm rounded-md shadow-md hover:bg-purple-500 transition"
        onClick={() => window.open("https://github.com/wojdak", "_blank")}
      >
        <FaGithub size={17} />
        Follow on GitHub
      </Button>
    </footer>
  );
};

export default Footer;
