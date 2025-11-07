import { motion, useMotionTemplate, useMotionValue, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { featuredProjects } from '../../data/content';
import { SectionHeader } from '../ui/SectionHeader';

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof featuredProjects)[number];
  index: number;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-120, 120], [12, -12]);
  const rotateY = useTransform(x, [-120, 120], [-12, 12]);
  const translateX = useTransform(x, [-120, 120], [-6, 6]);
  const translateY = useTransform(y, [-120, 120], [-6, 6]);
  const glareOpacity = useTransform(y, [-120, 120], [0.25, 0.65]);
  const gradient = useMotionTemplate`radial-gradient(circle at ${x}px ${y}px, rgba(139,92,246,0.35), transparent 55%)`;

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - bounds.left - bounds.width / 2);
    y.set(event.clientY - bounds.top - bounds.height / 2);
  };

  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-[1px] shadow-card backdrop-blur-2xl"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ delay: index * 0.08, duration: 0.7, ease: 'easeOut' }}
    >
      <motion.div
        className="relative h-full rounded-[2.4rem] bg-night/60 p-10"
        style={{
          rotateX,
          rotateY,
          translateX,
          translateY,
        }}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: gradient,
          }}
        />
        <div className="relative z-10 flex h-full flex-col gap-8">
          <div className="flex items-center justify-between text-sm uppercase tracking-[0.5em] text-slate-400">
            <span>{project.year}</span>
            <span>{project.id}</span>
          </div>
          <div>
            <h3 className="font-display text-3xl text-white md:text-4xl">{project.name}</h3>
            <p className="mt-4 text-base leading-relaxed text-slate-200/90">
              {project.description}
            </p>
          </div>
          <div className="space-y-3">
            <div className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-accent-100">
              {project.impact}
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-slate-200/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <motion.a
            href={project.link}
            className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-accent-200"
            whileHover={{ x: 4 }}
          >
            View project <ArrowUpRight className="h-4 w-4" />
          </motion.a>
        </div>
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[2.4rem] border border-white/10"
          style={{ opacity: glareOpacity }}
        />
      </motion.div>
    </motion.article>
  );
};

export const ProjectSection = () => (
  <section id="projects" className="relative space-y-12 py-24">
    <SectionHeader
      eyebrow="Signature Work"
      title="Interactive case studies that marry design intention with engineering precision."
      description="A selection of launches where kinetic storytelling, accessibility, and technical constraints were balanced to move business metrics."
    />
    <div className="grid gap-10 lg:grid-cols-2">
      {featuredProjects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  </section>
);
