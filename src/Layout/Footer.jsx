import React from "react";
import logo from "../assets/logo.png";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-black text-white text-center py-12">
      <div className="flex gap-4 items-center justify-center mb-2">
        <img src={logo} alt="movie box logo" className="h-10 w-10" />
        <h1 className="text-2xl font-bold">Movie Box Office</h1>
      </div>
      <div className="flex items-center justify-center gap-4 mb-4">
        <a
          href="www.facebook.com"
          target="_blank"
          className="text-xl hover:scale-110 transition-transform duration-300"
        >
          <FaSquareFacebook />
        </a>
        <a
          href="https://x.com/debanjo_israel"
          target="_blank"
          className="text-2xl hover:scale-110 transition-transform duration-300"
        >
          <FaSquareXTwitter />
        </a>
        <a
          href="www.facebook.com"
          target="_blank"
          className="text-2xl hover:scale-110 transition-transform duration-300"
        >
          <FaYoutube />
        </a>
        <a
          href="www.facebook.com"
          target="_blank"
          className="text-2xl hover:scale-110 transition-transform duration-300"
        >
          <FaGithubSquare />
        </a>
      </div>
      <p className="text-sm">© 2025 Movie Box Office</p>
    </footer>
  );
}
