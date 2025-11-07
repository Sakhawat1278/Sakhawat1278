import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight, Download } from 'lucide-react';
import {
  heroContent,
  marqueeSkills,
  signatureStats,
} from '../../data/content';
import { MagneticButton } from '../ui/MagneticButton';

const marqueeVariants: Variants = {
  animate: {
    x: ['0%', '-100%'],
    transition: {
      repeat: Infinity,
      repeatType: 'loop',
      duration: 18,
      ease: 'linear',
    },
  },
};

export const HeroSection = () => (
  <section
    id="about"
    className="relative isolate flex min-h-[80vh] flex-col justify-end gap-16 pb-24 pt-32 sm:pt-36"
  >
    <div className="grid gap-12 md:grid-cols-[1.2fr,0.8fr] md:items-end">
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.4em] text-slate-300/90 backdrop-blur-xl"
        >
          <span className="h-2 w-2 rounded-full bg-accent-400 shadow-glow" />
          {heroContent.availability}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
          className="font-display text-4xl leading-tight tracking-tight text-white md:text-6xl"
        >
          <span className="text-slate-300">{heroContent.greeting}</span>
          <br />
          {heroContent.name}
          <span className="block bg-gradient-to-r from-accent-300 via-white to-sky-300 bg-clip-text text-transparent">
            {heroContent.title}
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl text-lg leading-relaxed text-slate-200/90"
        >
          {heroContent.summary}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="flex flex-wrap items-center gap-3"
        >
          <MagneticButton href={heroContent.primaryAction.href}>
            {heroContent.primaryAction.label}
            <ArrowUpRight className="h-4 w-4" />
          </MagneticButton>
          <MagneticButton href={heroContent.secondaryAction.href} variant="secondary">
            {heroContent.secondaryAction.label}
            <Download className="h-4 w-4" />
          </MagneticButton>
        </motion.div>
        <div className="grid gap-6 pt-10 sm:grid-cols-3">
          {signatureStats.map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-inner-glow backdrop-blur-xl"
            >
              <span className="text-3xl font-semibold text-white group-hover:text-accent-200 transition">
                {item.value}
              </span>
              <p className="mt-3 text-sm leading-relaxed text-slate-300/90">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.9, ease: 'easeOut' }}
        className="relative hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-8 shadow-card backdrop-blur-3xl md:flex md:flex-col md:justify-between"
      >
        <div className="space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-500/15 px-3 py-1 text-xs font-medium text-accent-200">
            Signal
          </span>
          <h3 className="font-display text-2xl leading-snug text-white">
            Embedding motion into systems without sacrificing performance.
          </h3>
          <p className="text-sm leading-relaxed text-slate-300/90">
            I translate Figma prototypes into resilient, accessible components that scale.
            Each interaction is choreographed to guide attention and communicate state changes fluently.
          </p>
        </div>
        <div className="mt-8 grid gap-3 text-sm text-slate-300">
          <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
            <span>Design to code velocity</span>
            <span className="font-semibold text-white">↑ 3.2×</span>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
            <span>Motion QA issues</span>
            <span className="font-semibold text-emerald-300">↓ 45%</span>
          </div>
          <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
            <span>Prototype fidelity</span>
            <span className="font-semibold text-accent-200">100%</span>
          </div>
        </div>
        <motion.div
          className="absolute -inset-[2px] rounded-[2.6rem] border border-white/10"
          animate={{ opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </div>
    <div className="relative mt-16 overflow-hidden rounded-full border border-white/10 bg-white/5 py-4">
      <motion.div
        className="flex gap-10 whitespace-nowrap text-sm font-medium uppercase tracking-[0.6em] text-slate-200/80"
        variants={marqueeVariants}
        animate="animate"
      >
        {[...marqueeSkills, ...marqueeSkills].map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-3">
            <span className="h-1 w-1 rounded-full bg-accent-300/80" />
            {item}
          </span>
        ))}
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-night via-transparent to-night" />
    </div>
  </section>
);
