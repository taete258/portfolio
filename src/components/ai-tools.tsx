"use client";
import React from "react";
import { motion } from "framer-motion";
import WaveDivider from "./ui/wave-divider";
import { Badge } from "./ui/badge";
import {
    SiOpenai,
    SiClaude,
    SiHuggingface,
    SiGooglegemini,
    SiLangchain,
    SiChatbot,
    SiDatadotai,
    SiOpencv,
} from "react-icons/si";
import { useTranslations } from "next-intl";
import SkillCard from "./ui/skill-card";

const AiTools = () => {
    const t = useTranslations();

    const aiToolIcons = {
        "OpenAI": SiOpenai,
        "Claude": SiClaude,
        "Google Gemini": SiGooglegemini,
        "ChatGPT": SiChatbot,
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.8,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
        },
    };

    return (
        <section
            id="ai-tools"
            className="relative flex flex-col justify-center py-24 px-6 min-h-[100dvh]"
            style={{
                backgroundColor: "hsl(180 50% 22%)",
            }}
        >
            <div className="text-center mb-16 animate-fade-in max-w-6xl mx-auto">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    {t("aiTools.title")}{" "}
                    <span className="gradient-text">{t("aiTools.titleHighlight")}</span>
                </motion.h2>
                <motion.p
                    className="text-xl text-muted-foreground  max-w-md lg:max-w-2xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {t("aiTools.description")}
                </motion.p>
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {Object.keys(aiToolIcons).map((tool: string, index: number) => {
                        const IconComponent = aiToolIcons[tool as keyof typeof aiToolIcons];
                        return (
                            <SkillCard
                                key={tool}
                                skill={tool}
                                IconComponent={IconComponent}
                                variants={itemVariants}
                            />
                        );
                    })}
                </motion.div>
            </div>
            <WaveDivider nextSectionColor="hsl(180 50% 18%)" />
        </section>
    );
};

export default AiTools;
