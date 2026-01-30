"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { X, ZoomIn } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  step?: string;
  title: string;
  content: string;
  icon: LucideIcon;
}

interface FeatureStepsProps {
  features: Feature[];
  className?: string;
  autoPlayInterval?: number;
  title?: string;
  subtitle?: string;
}

export default function FeatureSteps({
  features,
  className,
  autoPlayInterval = 4000,
  title,
  subtitle,
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
      setProgressKey((prev) => prev + 1);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [autoPlayInterval, features.length]);

  // Close lightbox on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
      }
    };

    if (isLightboxOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isLightboxOpen]);

  return (
    <section id="features" className={cn("py-20 lg:py-32", className)}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title && (
              <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        <div className="flex flex-col lg:flex-row w-full lg:items-stretch max-w-5xl mx-auto rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-lg">
          {/* Left Column: Feature List */}
          <div className="flex flex-col w-full lg:w-1/2 divide-y divide-gray-100">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = index === currentFeature;

              return (
                <motion.div
                  key={index}
                  onClick={() => {
                    setCurrentFeature(index);
                    setProgressKey((prev) => prev + 1);
                  }}
                  className={cn(
                    "p-6 lg:p-8 relative cursor-pointer transition-colors",
                    isActive ? "bg-blue-50" : "hover:bg-gray-50"
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors",
                        isActive
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-600"
                      )}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3
                        className={cn(
                          "text-lg font-semibold transition-colors",
                          isActive ? "text-blue-900" : "text-gray-900"
                        )}
                      >
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">
                        {feature.content}
                      </p>
                    </div>
                  </div>

                  {isActive && (
                    <motion.div
                      key={progressKey}
                      className="absolute h-1 bottom-0 left-0 bg-blue-600 rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{
                        duration: autoPlayInterval / 1000,
                        ease: "linear",
                      }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Feature Highlight */}
          <div className="w-full lg:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 p-8 lg:p-12 flex items-center justify-center min-h-[300px] lg:min-h-[500px]">
            <motion.div
              key={currentFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-center text-white"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                {(() => {
                  const Icon = features[currentFeature].icon;
                  return <Icon className="h-10 w-10 text-white" />;
                })()}
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                {features[currentFeature].title}
              </h3>
              <p className="text-blue-100 text-lg max-w-sm mx-auto mb-6">
                {features[currentFeature].content}
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                <span className="px-3 py-1 rounded-full bg-white/10 text-blue-100">
                  ✓ Automatycznie
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-blue-100">
                  ✓ Bez błędów
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-blue-100">
                  ✓ Oszczędność czasu
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Screenshot Section */}
        <motion.div
          className="mt-16 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">
              Zobacz jak to wygląda w praktyce
            </h3>
            <p className="mt-2 text-gray-600">
              Przejrzysty panel z pełną kontrolą nad dopasowaniami
            </p>
          </div>
          <div
            className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 cursor-pointer group relative"
            onClick={() => setIsLightboxOpen(true)}
          >
            <img
              src="/screenshot-dopasowania.png"
              alt="Spinka - Panel dopasowywania faktur do płatności"
              className="w-full h-auto transition-transform group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-3 shadow-lg">
                <ZoomIn className="h-6 w-6 text-gray-700" />
              </div>
            </div>
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-gray-500 bg-white/80 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              Kliknij, aby powiększyć
            </p>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-[95vw] max-h-[95vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src="/screenshot-dopasowania.png"
                alt="Spinka - Panel dopasowywania faktur do płatności"
                className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              />
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              >
                <X className="h-6 w-6 text-gray-700" />
              </button>
              <p className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/70 text-sm">
                Naciśnij ESC lub kliknij poza obrazkiem, aby zamknąć
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
