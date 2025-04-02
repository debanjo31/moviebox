import React from "react";
import logo from "./assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-black text-white text-center py-12">
      <div className="flex gap-4 items-center justify-center mb-2">
        <img src={logo} alt="movie box logo" className="h-10 w-10" />
        <h1 className="text-2xl font-bold">Movie Box Office</h1>
      </div>
      <p className="text-sm">© 2025 Movie Box Office</p>
    </footer>
  );
}
