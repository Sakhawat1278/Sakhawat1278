import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { navItems } from '../../data/content';
import { useScrollSpy } from '../../hooks/useScrollSpy';

export const NavBar = () => {
  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);
  const activeId = useScrollSpy(sectionIds, 96);

  const handleNavigation = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -88;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="pointer-events-auto sticky top-8 z-40 mx-auto flex w-full max-w-5xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl"
    >
      <div className="flex items-center gap-2">
        <span className="text-xs uppercase tracking-[0.35em] text-slate-300">
          Sakhawat Hossain
        </span>
      </div>
      <div className="hidden items-center gap-1 md:flex">
        {navItems.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className="relative overflow-hidden rounded-full px-4 py-2 text-sm font-medium text-slate-200 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400/60"
            >
              {isActive && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-white/15 backdrop-blur-2xl"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10 mix-blend-screen">{item.label}</span>
            </button>
          );
        })}
      </div>
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => handleNavigation('contact')}
        className="rounded-full border border-white/20 bg-gradient-to-r from-accent-500/60 to-indigo-500/70 px-5 py-2 text-sm font-semibold text-white shadow-glow transition hover:shadow-lg"
      >
        Let’s Collaborate
      </motion.button>
    </motion.nav>
  );
};
