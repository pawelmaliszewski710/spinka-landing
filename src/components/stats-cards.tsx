"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface StatCardProps {
  value: string;
  label: string;
  description: string;
  color?: "blue" | "orange" | "green" | "gray";
  rotate?: number;
}

interface StatsCardsProps {
  className?: string;
  cards: StatCardProps[];
}

const colorVariants = {
  blue: {
    bg: "bg-blue-600",
    text: "text-white",
    line: "bg-white",
  },
  orange: {
    bg: "bg-orange-500",
    text: "text-white",
    line: "bg-white",
  },
  green: {
    bg: "bg-green-600",
    text: "text-white",
    line: "bg-white",
  },
  gray: {
    bg: "bg-white",
    text: "text-gray-900",
    line: "bg-gray-300",
  },
};

export function StatsCards({ className, cards }: StatsCardsProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-4 px-4 py-8",
        className
      )}
    >
      {cards.map((card, index) => {
        const colors = colorVariants[card.color || "blue"];
        return (
          <motion.div
            key={index}
            className={cn(
              `relative z-${10 + index * 10} w-64 h-72 ${colors.bg} rounded-2xl p-6 flex flex-col justify-between hover:z-50 shadow-lg`
            )}
            initial={{
              rotate: card.rotate || (index % 2 === 0 ? -3 : 3),
            }}
            whileHover={{
              rotate: 0,
              scale: 1.05,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
          >
            <div>
              <h2
                className={cn(
                  "text-5xl font-bold tracking-tight",
                  colors.text
                )}
              >
                {card.value}
              </h2>
            </div>
            <div>
              <h4
                className={cn(
                  "font-semibold text-lg leading-tight tracking-tight",
                  colors.text
                )}
              >
                {card.label}
              </h4>
              <div className={cn("w-full h-px my-3", colors.line)}></div>
              <p
                className={cn(
                  "text-sm leading-tight opacity-90",
                  colors.text
                )}
              >
                {card.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
