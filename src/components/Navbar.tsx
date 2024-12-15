import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="bg-transparent shadow-none">
      <nav className="flex justify-between items-center p-4">
        {/* Logo and Title */}
        <div className="flex items-center gap-4">
          <img src="/logo1.png" alt="Logo" className="h-10" />
          <h1 className="text-3xl font-bold">Oasis</h1>
        </div>

        {/* Links */}
        <div className="flex gap-8">
          <h4 className="text-lg font-medium cursor-pointer">Features</h4>
          <h4 className="text-lg font-medium cursor-pointer">About</h4>
          <h4 className="text-lg font-medium cursor-pointer">Docs</h4>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-500"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-500"
          >
            Register
          </button>
        </div>
      </nav>
    </header>
  );
}
