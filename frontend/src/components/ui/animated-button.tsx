'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Button, type ButtonProps } from './button';
import { cn } from '@/lib/utils';

export interface AnimatedButtonProps extends ButtonProps {
  glow?: boolean;
  gradient?: 'rainbow' | 'neon' | 'bluePurple' | 'custom';
  gradientClassName?: string; // used when gradient='custom'
}

/**
 * AnimatedButton wraps shadcn/ui Button with:
 * - animated gradient border
 * - subtle scale on hover
 * - optional glow
 */
export const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  (
    { className, children, glow = true, gradient = 'bluePurple', gradientClassName, size, variant = 'default', ...props },
    ref
  ) => {
    const gradientPreset =
      gradient === 'rainbow'
        ? 'from-pink-500 via-yellow-400 to-emerald-400'
        : gradient === 'neon'
        ? 'from-[#3B82F6] via-[#22d3ee] to-[#a78bfa]'
        : gradient === 'bluePurple'
        ? 'from-[#3B82F6] via-[#60a5fa] to-[#a78bfa]'
        : '';

    return (
      <motion.div
        initial={{ opacity: 0.95 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.98 }}
        className={cn('relative inline-block', className)}
      >
        {/* Animated gradient border wrapper */}
        <motion.div
          aria-hidden
          className={cn(
            'pointer-events-none absolute inset-0 rounded-md p-[2px]',
            gradient === 'custom' ? gradientClassName : `bg-gradient-to-r ${gradientPreset}`
          )}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ backgroundSize: '200% 200%' }}
        />

        {/* Inner container to mask border and allow glow */}
        <div className="relative rounded-[6px]">
          {glow && (
            <motion.div
              aria-hidden
              className={cn(
                'pointer-events-none absolute -inset-1 rounded-lg blur-md',
                gradient === 'custom' ? gradientClassName : `bg-gradient-to-r ${gradientPreset}`
              )}
              initial={{ opacity: 0.25 }}
              whileHover={{ opacity: 0.45 }}
              transition={{ duration: 0.3 }}
            />
          )}

          {/* The actual button */}
          <div className="relative rounded-[6px] bg-background">
            <Button
              ref={ref}
              variant={variant}
              size={size}
              className={cn(
                'relative z-[1] rounded-[6px] border border-transparent',
                // Make default variant transparent to show border nicely
                variant === 'default' ? 'bg-primary text-primary-foreground hover:bg-primary/90' : '',
              )}
              {...props}
            >
              {children}
            </Button>
          </div>
        </div>
      </motion.div>
    );
  }
);

AnimatedButton.displayName = 'AnimatedButton';






