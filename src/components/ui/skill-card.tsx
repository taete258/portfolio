"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { IconType } from "react-icons";

interface SkillCardProps {
    skill: string;
    IconComponent: IconType;
    variants: Variants;
}

const SkillCard = ({ skill, IconComponent, variants }: SkillCardProps) => {
    return (
        <motion.div
            variants={variants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="group"
        >
            <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10">
                <motion.div
                    className="mb-3"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    {IconComponent && (
                        <IconComponent className="w-12 h-12 text-white group-hover:text-blue-400 transition-colors duration-300" />
                    )}
                </motion.div>
                <h3 className="text-sm font-medium text-white/90 group-hover:text-white transition-colors duration-300 text-center">
                    {skill}
                </h3>
            </div>
        </motion.div>
    );
};

export default React.memo(SkillCard);
