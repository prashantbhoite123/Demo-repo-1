'use client';

import { motion } from 'framer-motion';
import * as React from 'react';
import { cn } from '@/lib/utils';

interface AceternityBgProps {
  className?: string;
}

// Subtle animated blobs/lines inspired by Aceternity UI aesthetics
export function AceternityBg({ className }: AceternityBgProps) {
  return (
    <div className={cn('absolute inset-0 -z-10 overflow-hidden', className)} aria-hidden>
      {/* radial vignette to keep text legible */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.10),transparent_60%)]" />

      {/* floating gradient blobs */}
      <motion.div
        className="absolute -top-24 -left-24 h-64 w-64 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(59,130,246,0.35), rgba(59,130,246,0))' }}
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(167,139,250,0.25), rgba(167,139,250,0))' }}
        animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* gentle animated lines */}
      <motion.div
        className="absolute left-1/4 top-1/3 h-40 w-40 rotate-12 opacity-30"
        style={{ background: 'conic-gradient(from_90deg, transparent, rgba(59,130,246,0.3), transparent)' }}
        animate={{ rotate: [12, 18, 12] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute right-1/4 top-1/2 h-40 w-40 -rotate-6 opacity-30"
        style={{ background: 'conic-gradient(from_180deg, transparent, rgba(167,139,250,0.25), transparent)' }}
        animate={{ rotate: [-6, -1, -6] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}




