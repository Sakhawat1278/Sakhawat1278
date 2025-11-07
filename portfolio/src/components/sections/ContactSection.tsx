import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { contactChannels } from '../../data/content';
import { MagneticButton } from '../ui/MagneticButton';
import { SectionHeader } from '../ui/SectionHeader';

export const ContactSection = () => (
  <section id="contact" className="space-y-12 py-24">
    <SectionHeader
      eyebrow="Collaborate"
      title="Let’s choreograph your next interactive story."
      description="Whether you need a design system that sings or a kinetic product launch, I partner with design and product teams to ship ambitious work."
      align="center"
    />
    <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/15 via-night/80 to-night/95 p-[1px] shadow-card">
      <div className="relative rounded-[2.9rem] bg-night/80 p-8 sm:p-12 lg:p-16">
        <motion.div
          className="pointer-events-none absolute -top-40 right-[-10rem] h-[28rem] w-[28rem] rounded-full bg-accent-500/30 blur-3xl"
          animate={{ opacity: [0.2, 0.55, 0.2], scale: [0.9, 1.06, 0.92] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-slate-100">
              <Sparkles className="h-4 w-4" />
              Experiment with motion
            </div>
            <h3 className="font-display text-3xl leading-tight text-white md:text-4xl">
              Ready for a prototype, audit, or a full-scale interactive build?
            </h3>
            <p className="text-sm leading-relaxed text-slate-200/90">
              I collaborate remotely with teams across the globe. Share your vision, and I’ll bring motion systems, component architecture, and design intent together.
            </p>
            <MagneticButton href="mailto:hshohan1278@gmail.com">
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
          </div>
          <div className="space-y-4 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
            {contactChannels.map((channel, index) => (
              <motion.a
                key={channel.label}
                href={channel.href}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: index * 0.05, duration: 0.5, ease: 'easeOut' }}
                className="flex items-start justify-between gap-4 rounded-2xl border border-transparent px-4 py-3 text-left transition hover:border-white/20 hover:bg-white/5"
              >
                <div>
                  <div className="text-xs uppercase tracking-[0.4em] text-slate-300/80">
                    {channel.label}
                  </div>
                  <div className="mt-2 font-semibold text-white">{channel.value}</div>
                </div>
                <ArrowUpRight className="mt-1 h-4 w-4 text-accent-200" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
