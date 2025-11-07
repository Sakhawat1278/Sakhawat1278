import { motion } from 'framer-motion';
import { focusAreas, workflow } from '../../data/content';
import { SectionHeader } from '../ui/SectionHeader';

export const ExpertiseSection = () => (
  <section id="expertise" className="space-y-16 py-24">
    <SectionHeader
      eyebrow="Expertise"
      title="Building interaction systems that scale from hero moments to production realities."
      description="Every engagement balances generative creativity with measurable performance. I collaborate across design, product, and engineering to deliver experiences that move fast and feel intentional."
    />
    <div className="grid gap-10 lg:grid-cols-3">
      {focusAreas.map((area, index) => (
        <motion.div
          key={area.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/5 p-8 shadow-inner-glow backdrop-blur-xl"
        >
          <motion.div
            className="pointer-events-none absolute -top-32 right-[-6rem] h-56 w-56 rounded-full bg-accent-500/25 blur-3xl"
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.9, 1.05, 0.9] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: index }}
          />
          <div className="relative z-10 space-y-5">
            <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.4em] text-accent-100">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="font-display text-2xl text-white">{area.title}</h3>
            <p className="text-sm leading-relaxed text-slate-200/85">{area.copy}</p>
            <ul className="mt-6 space-y-4 text-sm text-slate-200/90">
              {area.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-300" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
    <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-r from-white/10 via-white/5 to-transparent p-[1px] shadow-card">
      <div className="relative rounded-[2.4rem] bg-night/75 px-8 py-14 md:px-16">
        <motion.div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.25),transparent_55%)]"
          animate={{ opacity: [0.4, 0.65, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="relative z-10 grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-accent-100">
              Workflow
            </span>
            <h3 className="font-display text-3xl leading-tight text-white">
              Proven motion-first delivery process
            </h3>
            <p className="text-sm leading-relaxed text-slate-300/90">
              From pitch decks to production, I align stakeholders around interactive prototypes, validate with data, and ship systems that adapt to evolving requirements.
            </p>
          </div>
          <div className="space-y-5">
            {workflow.map((stage, index) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: index * 0.08, duration: 0.6, ease: 'easeOut' }}
                className="group flex items-start gap-5 rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-500/20 font-display text-sm text-accent-100">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="space-y-1.5">
                  <h4 className="font-semibold text-white">{stage.title}</h4>
                  <p className="text-sm text-slate-300/90">{stage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
