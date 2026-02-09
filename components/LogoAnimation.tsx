
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MaiaTextLogo = ({ className = "text-4xl" }: { className?: string }) => (
  <div className={`flex flex-col items-center ${className}`}>
    <div className="maia-logo-neon font-black italic tracking-[0.1em] leading-none select-none flex gap-1">
      <span className="text-white">M</span>
      <span className="text-white">A</span>
      <span className="text-[#22c55e]">I</span>
      <span className="text-white">A</span>
    </div>
    <div className="font-black italic tracking-[0.4em] text-white/60 text-[0.3em] uppercase mt-2 whitespace-nowrap select-none">
      MASTER CONTROL
    </div>
  </div>
);

export const LogoAnimation: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'intro' | 'break' | 'complete'>('intro');

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase('break'), 2800),
      setTimeout(() => setPhase('complete'), 4200),
      setTimeout(() => onComplete(), 5500)
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent z-[100] overflow-hidden">
      <AnimatePresence mode="wait">
        {phase === 'intro' && (
          <motion.div
            key="intro"
            initial={{ scale: 0.3, opacity: 0, filter: 'blur(30px)' }}
            animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.5, filter: 'blur(60px)' }}
            transition={{ duration: 2.4, ease: [0.19, 1, 0.22, 1] }}
            className="flex flex-col items-center"
          >
            <MaiaTextLogo className="text-7xl mb-12" />
            <motion.p
              initial={{ opacity: 0, letterSpacing: '4em' }}
              animate={{ opacity: 1, letterSpacing: '1.5em' }}
              className="mt-12 text-white text-[12px] font-black uppercase text-center tracking-[1.5em]"
            >
              INITIALIZING CORE
            </motion.p>
          </motion.div>
        )}

        {phase === 'break' && (
          <motion.div key="break" className="relative w-full h-full flex items-center justify-center">
             {[...Array(150)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                  animate={{ 
                    x: (Math.random() - 0.5) * 6000, 
                    y: (Math.random() - 0.5) * 6000, 
                    rotate: Math.random() * 5000,
                    scale: 0,
                    opacity: 0
                  }}
                  transition={{ duration: 2.8, ease: [0.19, 1, 0.22, 1] }}
                  className="absolute w-20 h-0.5 bg-[#22c55e]/60 shadow-[0_0_25px_#22c55e]"
                />
             ))}
             <motion.div
               initial={{ scale: 0, opacity: 0 }}
               animate={{ scale: 2, opacity: 0.2 }}
               className="text-white text-[12rem] font-black italic tracking-tighter select-none"
             >
               MAIA
             </motion.div>
          </motion.div>
        )}

        {phase === 'complete' && (
           <motion.div 
             key="complete"
             initial={{ opacity: 0, y: 40 }}
             animate={{ opacity: 1, y: 0 }}
             className="flex flex-col items-center gap-12"
           >
             <MaiaTextLogo className="text-6xl" />
             <div className="flex flex-col items-center gap-4">
               <span className="text-[#22c55e] font-black text-[16px] uppercase tracking-[1.2em] animate-pulse">
                ERP GESTION EMPRESARIAL
               </span>
               <div className="w-[300px] h-1 bg-white/10 rounded-full overflow-hidden mt-6 border border-[#22c55e]/20">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.2 }}
                    className="h-full bg-[#22c55e] shadow-[0_0_25px_#22c55e]"
                  />
               </div>
             </div>
           </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
