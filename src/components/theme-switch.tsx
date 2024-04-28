// "use client";
import useThemeStore, { THEME_TYPES } from "@/stores/useThemeStore";
import React, { useEffect, useState } from "react";
import { PiMoonBold, PiSunBold } from "react-icons/pi";

const ThemeSwitch: React.FC = () => {
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    console.log("current theme:", theme);
  }, [theme]);
  return (
    <label className="swap swap-rotate">
      {theme}
      {/* this hidden checkbox controls the state */}
      <input
        type="checkbox"
        className="theme-controller"
        defaultChecked={true}
        value="synthwave"
        onChange={toggleTheme}
      />
      {/* moon icon */}
      <PiMoonBold className="swap-on fill-current w-5 h-5" />
      {/* sun icon */}
      <PiSunBold className="swap-off fill-current w-5 h-5" />
    </label>
  );
};

export default React.memo(ThemeSwitch);
