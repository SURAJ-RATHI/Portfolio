import React from "react";
import { motion } from "framer-motion";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  animated?: boolean;
  className?: string;
}

export function Logo({
  size = "md",
  animated = true,
  className = "",
}: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden ${className}`}
      whileHover={animated ? { scale: 1.05, rotate: 5 } : {}}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
    >
      {/* Animated background gradient */}
      {animated && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-2xl"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}

      {/* Logo content */}
      <motion.div
        className={`${iconSizes[size]} bg-white rounded-lg relative z-10 flex items-center justify-center`}
        animate={
          animated
            ? {
                boxShadow: [
                  "0 0 0 0px rgba(59, 130, 246, 0.4)",
                  "0 0 0 4px rgba(59, 130, 246, 0.1)",
                  "0 0 0 0px rgba(59, 130, 246, 0.4)",
                ],
              }
            : {}
        }
        transition={{ duration: 2, repeat: Infinity }}
      ></motion.div>

      {/* Subtle shine effect */}
      {animated && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl"
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </motion.div>
  );
}