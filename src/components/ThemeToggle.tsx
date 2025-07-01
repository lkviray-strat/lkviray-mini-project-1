"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const iconAttributes = {
    strokeWidth: 2.5,
    className: "size-12 p-3 rounded-full",
  };

  const toggleThemeHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;
  return (
    <Button
      onClick={toggleThemeHandler}
      className="flex size-10"
    >
      {theme === "light" ? (
        <>
          <Sun {...iconAttributes} />
        </>
      ) : (
        <>
          <Moon {...iconAttributes} />
        </>
      )}
    </Button>
  );
};

export default ThemeToggle;
