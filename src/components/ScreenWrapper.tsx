import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { TransitionType } from '../types';

interface ScreenWrapperProps {
  children: ReactNode;
  transition: TransitionType;
}

export default function ScreenWrapper({ children, transition }: ScreenWrapperProps) {
  let initial = {};
  let animate = {};
  let exit = {};
  let transitionConfig: { duration: number; ease: string | number[] } = { duration: 0.35, ease: [0.25, 0.1, 0.25, 1.0] };

  if (transition === 'push') {
    initial = { x: '100%', opacity: 0.95 };
    animate = { x: 0, opacity: 1 };
    exit = { x: '-30%', opacity: 0.5 };
  } else if (transition === 'push_back') {
    initial = { x: '-100%', opacity: 0.95 };
    animate = { x: 0, opacity: 1 };
    exit = { x: '30%', opacity: 0.5 };
  } else if (transition === 'slide_up') {
    initial = { y: '100%', opacity: 1 };
    animate = { y: 0, opacity: 1 };
    exit = { y: '100%', opacity: 1 };
    transitionConfig = { duration: 0.45, ease: [0.16, 1, 0.3, 1] }; // Clean cubic-bezier for slide-up
  } else {
    initial = { opacity: 0 };
    animate = { opacity: 1 };
    exit = { opacity: 0 };
    transitionConfig = { duration: 0.2, ease: 'easeInOut' };
  }

  return (
    <motion.div
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transitionConfig}
      className="w-full h-full min-h-0 flex flex-col bg-[#f8f9ff] text-[#0b1c30] select-none"
    >
      {children}
    </motion.div>
  );
}
