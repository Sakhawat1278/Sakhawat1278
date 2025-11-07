import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { contactChannels, navItems } from '../../data/content';

export const Footer = () => (
  <footer className="relative mt-24 border-t border-white/10 py-12">
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col justify-between gap-6 text-sm text-slate-300/80 md:flex-row"
      >
        <div>
          <div className="text-xs uppercase tracking-[0.4em] text-slate-500">Portfolio</div>
          <div className="mt-2 font-display text-xl text-white">Sakhawat Hossain</div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-300/80">
            Interactive engineer crafting ambitious, motion-led digital products.
          </p>
        </div>
        <div className="flex gap-10">
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-[0.4em] text-slate-500">Navigate</div>
            <ul className="space-y-1 text-sm">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      const el = document.getElementById(item.id);
                      if (!el) return;
                      const y = el.getBoundingClientRect().top + window.scrollY - 80;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 text-slate-200/80 transition hover:text-white"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <div className="text-xs uppercase tracking-[0.4em] text-slate-500">Connect</div>
            <ul className="space-y-1 text-sm">
              {contactChannels.map((channel) => (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    className="inline-flex items-center gap-2 text-slate-200/80 transition hover:text-white"
                  >
                    {channel.label}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.4em] text-slate-500/80 md:flex-row"
      >
        <span>© {new Date().getFullYear()} Crafted with motion precision.</span>
        <span>Available for select collaborations</span>
      </motion.div>
    </div>
  </footer>
);
