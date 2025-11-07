import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import type { PointerEvent as ReactPointerEvent, ReactNode } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
}

export const MagneticButton = ({ children, href, variant = 'primary' }: MagneticButtonProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const border = useMotionTemplate`1px solid rgba(255,255,255,${variant === 'primary' ? 0.25 : 0.1})`;

  const handlePointerMove = (event: ReactPointerEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - bounds.left - bounds.width / 2;
    const offsetY = event.clientY - bounds.top - bounds.height / 2;

    x.set(offsetX * 0.35);
    y.set(offsetY * 0.35);
  };

  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseStyles =
    'relative flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-night';

  const variants = {
    primary:
      'bg-gradient-to-r from-accent-500 via-fuchsia-500 to-sky-500 text-white shadow-glow',
    secondary:
      'bg-white/10 text-slate-100 hover:bg-white/15 hover:text-white backdrop-blur-lg',
  };

  const sharedProps = {
    className: `${baseStyles} ${variants[variant]}`,
    style: { x, y, border },
    onPointerMove: handlePointerMove,
    onPointerLeave: handlePointerLeave,
    whileTap: { scale: 0.97 },
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  } as const;

  const buttonContent = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-white/10 opacity-0"
        whileHover={{ opacity: 1 }}
      />
    </>
  );

  if (href) {
    return (
      <motion.a {...sharedProps} href={href}>
        {buttonContent}
      </motion.a>
    );
  }

  return <motion.button {...sharedProps}>{buttonContent}</motion.button>;
};
