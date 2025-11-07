import { motion } from 'framer-motion';
import { timeline, testimonials } from '../../data/content';
import { SectionHeader } from '../ui/SectionHeader';

export const ExperienceSection = () => (
  <section id="experience" className="space-y-20 py-24">
    <SectionHeader
      eyebrow="Experience"
      title="Leading cross-disciplinary teams to deliver motion-led product ecosystems."
      description="A track record of marrying storytelling with scalable systems—designing, engineering, and shipping interactive work that respects timelines, accessibility, and performance."
    />
    <div className="relative">
      <div className="absolute left-5 top-0 bottom-0 hidden w-px bg-gradient-to-b from-accent-400/60 via-white/15 to-transparent md:block" />
      <div className="space-y-12">
        {timeline.map((entry, index) => (
          <motion.article
            key={entry.company}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
            className="relative rounded-[2.25rem] border border-white/10 bg-white/5 p-8 shadow-inner-glow backdrop-blur-xl md:ml-12"
          >
            <span className="absolute left-[-2.7rem] top-8 hidden h-5 w-5 rounded-full border border-accent-400/60 bg-night md:flex">
              <span className="m-auto h-2.5 w-2.5 rounded-full bg-accent-400 shadow-glow" />
            </span>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl text-white">
                  {entry.role}
                  <span className="text-accent-200"> · {entry.company}</span>
                </h3>
                <p className="mt-1 text-sm uppercase tracking-[0.4em] text-slate-400">
                  {entry.period}
                </p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.4em] text-slate-200/80">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-slate-200/90">{entry.description}</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-200/90">
              {entry.achievements.map((achievement) => (
                <li key={achievement} className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-300" />
                  {achievement}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </div>
    <div className="grid gap-8 md:grid-cols-2">
      {testimonials.map((testimonial, index) => (
        <motion.blockquote
          key={testimonial.person}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: index * 0.08, duration: 0.6, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-inner-glow backdrop-blur-xl"
        >
          <motion.div
            className="pointer-events-none absolute -top-24 right-[-5rem] h-52 w-52 rounded-full bg-accent-500/20 blur-3xl"
            animate={{ opacity: [0.3, 0.65, 0.3], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="relative z-10 space-y-5">
            <p className="text-lg leading-relaxed text-slate-100">
              “{testimonial.quote}”
            </p>
            <footer className="text-sm text-slate-300/90">
              <div className="font-semibold text-white">{testimonial.person}</div>
              <div>{testimonial.role}</div>
            </footer>
          </div>
        </motion.blockquote>
      ))}
    </div>
  </section>
);
