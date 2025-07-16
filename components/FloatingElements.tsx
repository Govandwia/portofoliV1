'use client';

import { motion } from 'framer-motion';
import { Code, Coffee, Lightbulb, Rocket, Star, Zap } from 'lucide-react';

export function FloatingElements() {
  const elements = [
    { icon: Code, delay: 0, x: 100, y: 50 },
    { icon: Coffee, delay: 0.5, x: -80, y: 100 },
    { icon: Lightbulb, delay: 1, x: 150, y: -50 },
    { icon: Rocket, delay: 1.5, x: -120, y: -80 },
    { icon: Star, delay: 2, x: 80, y: 120 },
    { icon: Zap, delay: 2.5, x: -50, y: 80 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((Element, index) => (
        <motion.div
          key={index}
          className="absolute text-blue-200 dark:text-blue-800 opacity-20"
          initial={{ x: Element.x, y: Element.y, rotate: 0 }}
          animate={{
            x: Element.x + Math.sin(Date.now() * 0.001 + index) * 20,
            y: Element.y + Math.cos(Date.now() * 0.001 + index) * 20,
            rotate: 360,
          }}
          transition={{
            duration: 10 + index,
            repeat: Infinity,
            ease: "linear",
            delay: Element.delay,
          }}
        >
          <Element.icon size={24} />
        </motion.div>
      ))}
    </div>
  );
}