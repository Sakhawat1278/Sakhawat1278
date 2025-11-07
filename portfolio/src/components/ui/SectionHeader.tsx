import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  align?: 'left' | 'center';
}

export const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeaderProps) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    className={`mx-auto max-w-3xl ${align === 'center' ? 'text-center' : 'text-left'}`}
  >
    <span className="text-sm uppercase tracking-[0.6em] text-accent-300/80">
      {eyebrow}
    </span>
    <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight text-white md:text-4xl">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-base leading-relaxed text-slate-300/90">{description}</p>
    )}
  </motion.div>
);
