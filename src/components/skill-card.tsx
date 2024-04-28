"use client";
import useThemeStore, { THEME_TYPES } from "@/stores/useThemeStore";
import clsx from "clsx";
import React from "react";

export type SkillCardProps = {
  icon: React.ReactNode;
  name: string;
};
const SkillCard: React.FC<SkillCardProps> = ({ icon, name }) => {
  return (
    <div
      className={clsx(
        "btn btn-outline border-2 w-full p-4 h-28 cursor-default"
      )}
    >
      <div className="m-auto text-[40px] text-primary">{icon}</div>
      <p className="min-w-20">{name}</p>
    </div>
  );
};

export default React.memo(SkillCard);
