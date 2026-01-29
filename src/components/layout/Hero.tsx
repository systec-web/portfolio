import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';
import { BackgroundBeamsWithCollision } from '../ui/background-beams-with-collision';
import { TypewriterEffectSmooth, TypewriterLoop } from '@/components/ui/typewriter-effect';

export const Hero = () => {
  return (
    <BackgroundBeamsWithCollision className="min-h-screen">
    <section className="flex min-h-screen items-center justify-center pt-20 overflow-hidden">
      {/* Background Depth Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute min-h-screen inset-0 bg-[url('https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center opacity-[0.03]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex text-white items-center gap-2 px-4 py-2 rounded-full bg-secondary border text-primary text-sm font-medium mb-8"
        >
          Crafting Digital Excellence
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-8"
        >
          <TypewriterLoop
            pairs={[
              { top: "Custom Software & Websites", bottom: "Built for Your Ambition", bottomClass: "text-primary" },
              { top: "Custom Software & Websites", bottom: "Scaled for Growth", bottomClass: "text-amber-500" },
              { top: "Custom Software & Websites", bottom: "Designed for You", bottomClass: "text-emerald-500" },
            ]}
            typingSpeed={60}
            deletingSpeed={30}
            pauseAfter={1800}
            topClassName="text-5xl md:text-7xl font-serif font-black tracking-tight leading-[1.1] text-balance"
            bottomClassName="text-2xl md:text-3xl font-serif font-bold"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-12 text-balance leading-relaxed"
        >
          Transform your business with tailor-made digital solutions. 
          Professional, transparent, and surprisingly affordable software 
          designed to grow with you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="rounded-full h-14 px-8 text-lg font-semibold shadow-lg shadow-primary/20 group">
            Start Your Project
            <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg font-semibold bg-background/50 backdrop-blur-sm">
            View Our Work
          </Button>
        </motion.div>

        {/* Stats / Trust badges could go here */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 pt-12 border-t flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all"
        >
          {['Custom Apps', 'Business Systems', 'Internal Tools', 'E-commerce'].map((item) => (
            <span key={item} className="font-mono text-xs uppercase tracking-widest font-bold">
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Hero Bottom Decor */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
    </BackgroundBeamsWithCollision>
  );
};
