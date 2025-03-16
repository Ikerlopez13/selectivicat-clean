"use client";

import React, { ReactNode, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
  duration?: number;
  once?: boolean;
}

export default function AnimateOnScroll({
  children,
  className = '',
  animation = 'fadeIn',
  delay = 0,
  duration = 0.5,
  once = true,
}: AnimateOnScrollProps) {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, {
    once,
    amount: 0.1,
  });

  // Definir las variantes de animación
  const variants = {
    hidden: {
      opacity: 0,
      y: animation === 'slideUp' ? 50 : 0,
      x: animation === 'slideLeft' ? 50 : animation === 'slideRight' ? -50 : 0,
      scale: animation === 'scale' ? 0.9 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: 'easeOut',
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, inView, once]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
} 