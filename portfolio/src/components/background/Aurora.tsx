import { motion } from 'framer-motion';

const blobs = [
  {
    id: 'a',
    className: 'top-[-10%] left-[-5%] h-[40rem] w-[40rem] bg-purple-500/40',
    delay: 0,
  },
  {
    id: 'b',
    className: 'top-[10%] right-[-15%] h-[32rem] w-[32rem] bg-indigo-500/30',
    delay: 2,
  },
  {
    id: 'c',
    className: 'bottom-[-15%] left-[20%] h-[34rem] w-[34rem] bg-pink-500/20',
    delay: 4,
  },
];

export const Aurora = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-grid opacity-30" />
    {blobs.map((blob) => (
      <motion.div
        key={blob.id}
        className={`absolute blur-3xl mix-blend-screen ${blob.className}`}
        initial={{ scale: 0.8, opacity: 0.3 }}
        animate={{ scale: [0.8, 1.05, 0.85], opacity: [0.28, 0.45, 0.32] }}
        transition={{
          duration: 16,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
          delay: blob.delay,
        }}
      />
    ))}
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-accent-500/10 via-transparent to-sky-400/10"
      animate={{ opacity: [0.35, 0.55, 0.35] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
    />
  </div>
);
