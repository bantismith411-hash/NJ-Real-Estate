import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function Particles() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (windowSize.width === 0) return null;

  // Generate an array of random particles
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * windowSize.width,
    y: Math.random() * windowSize.height,
    duration: Math.random() * 20 + 20,
    delay: Math.random() * -20,
  }));

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gold-main/20"
          style={{
            width: p.size,
            height: p.size,
            left: p.x,
            top: p.y,
            boxShadow: '0 0 10px rgba(212, 175, 55, 0.5)',
          }}
          animate={{
            y: [p.y, p.y - 100, p.y],
            x: [p.x, p.x + 50, p.x - 50, p.x],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
