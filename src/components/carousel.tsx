"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface CarouselItem {
  image: string;
  name: string;
}

interface CarouselProps {
  items: CarouselItem[];
  className?: string;
  cardWidth?: number;
  cardHeight?: number;
  duration?: number;
  rotationAngle?: number;
  autoPlay?: boolean;
  interval?: number;
}

export function Carousel({
  items,
  className,
  cardWidth = 150,
  cardHeight = 100,
  duration = 0.5,
  rotationAngle = 35,
  autoPlay = true,
  interval = 3000,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const totalItems = items.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      handleNext();
    }, interval);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, interval]);

  // Get visible items (3 at a time)
  const visibleItems = [];
  for (let i = 0; i <= 2; i++) {
    const index = (currentIndex + i + totalItems) % totalItems;
    visibleItems.push({
      ...items[index],
      originalIndex: index,
      position: i,
      isCenter: i === 1,
    });
  }

  return (
    <div
      className={cn("flex items-center justify-center gap-2", className)}
      style={{
        perspective: "1200px",
        transformStyle: "preserve-3d",
      }}
    >
      <AnimatePresence mode="popLayout">
        {visibleItems.map((item) => (
          <motion.div
            key={`${item.image}-${item.originalIndex}`}
            layout
            initial={{
              scale: 0.8,
              opacity: 0,
              rotateY:
                item.position === 0
                  ? rotationAngle
                  : item.position === 2
                    ? -rotationAngle
                    : 0,
            }}
            animate={{
              scale: item.isCenter ? 1 : 0.85,
              opacity: item.isCenter ? 1 : 0.7,
              rotateY:
                item.position === 0
                  ? rotationAngle
                  : item.position === 2
                    ? -rotationAngle
                    : 0,
            }}
            exit={{
              scale: 0.8,
              opacity: 0,
            }}
            transition={{
              duration: duration,
              ease: "easeInOut",
            }}
            style={{
              width: cardWidth,
              height: cardHeight,
            }}
            className={cn(
              item.isCenter ? "z-10" : "z-0",
              "relative flex-shrink-0 flex items-center justify-center bg-white rounded-xl shadow-md p-4"
            )}
          >
            <img
              src={item.image}
              alt={item.name}
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default Carousel;
