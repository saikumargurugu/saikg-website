
"use client";
import React, { useState, useEffect } from "react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="flex items-center justify-center py-6">
      <button
        onClick={toggleTheme}
  className="relative px-8 py-3 rounded-xl font-bold text-lg transition-all duration-500 bg-green-900 dark:bg-black text-white shadow-lg hover:scale-105 hover:shadow-2xl focus:outline-none overflow-hidden group border-2 border-green-700 hover:border-white"
      >
        {theme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode"}
        <span className="absolute inset-0 rounded-xl border-4 border-transparent group-hover:border-green-400 transition-all duration-500 pointer-events-none"></span>
      </button>
    </div>
  );
}
