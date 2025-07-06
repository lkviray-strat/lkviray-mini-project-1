// components/FadeInSection.tsx
"use client";
import { motion } from "framer-motion";
import { Ref } from "react";

type FadeInSectionProps = {
  children?: React.ReactNode;
  delay?: number;
  viewportAmount?: number;
  animate?: boolean;
  className?: string;
  ref?: Ref<HTMLSpanElement>;
};

export default function FadeInSection({
  children,
  delay = 0,
  viewportAmount = 0.35,
  animate,
  className = "",
  ref,
}: FadeInSectionProps) {
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: delay }}
      viewport={{ once: true, amount: viewportAmount }}
      animate={animate ? { opacity: 1, y: 0 } : undefined}
      className={className}
    >
      {children}
    </motion.span>
  );
}
