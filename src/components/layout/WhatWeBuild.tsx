import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Layout, Database, Globe, Layers, ArrowUpRight, Cpu, Smartphone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { HoverEffect } from '../ui/card-hover-effect';


const services = [
  {
    title: 'Custom Desktop Applications',
    description: 'Powerful, performance-optimized desktop solutions for Windows and macOS, tailored to your specific workflow.',
    icon: Monitor,
    className: 'md:col-span-2 md:row-span-1',
    color: 'bg-gradient-to-br from-blue-200 to-indigo-100 text-blue-700',
  },
  {
    title: 'Business & Internal Systems',
    description: 'Streamline your operations with custom ERPs, CRMs, and management tools designed for efficiency.',
    icon: Database,
    className: 'md:col-span-1 md:row-span-2',
    color: 'bg-gradient-to-br from-sky-200 to-cyan-100 text-sky-700',
  },
  {
    title: 'Portfolio & Showcase Platforms',
    description: 'Stunning platforms to showcase your creative work or professional services with elegance.',
    icon: Layout,
    className: 'md:col-span-1 md:row-span-1',
    color: 'bg-gradient-to-br from-indigo-200 to-violet-100 text-indigo-700',
  },
  {
    title: 'Custom Websites & Web Platforms',
    description: 'Modern, responsive, and high-converting websites built with the latest web technologies.',
    icon: Globe,
    className: 'md:col-span-2 md:row-span-1',
    color: 'bg-gradient-to-br from-cyan-200 to-emerald-100 text-cyan-700',
  },
  {
    title: 'Tailor-Made Software Solutions',
    description: 'Unique challenges require unique code. We build whatever you can imagine, precisely to spec.',
    icon: Layers,
    className: 'md:col-span-3 md:row-span-1',
    color: 'bg-gradient-to-br from-pink-100 to-primary/40 text-primary',
  },
  {
    title: 'Mobile Apps',
    description: 'Beautiful, high-performance native and cross-platform mobile apps for iOS and Android.',
    icon: Smartphone,
    className: 'md:col-span-1 md:row-span-1',
    color: 'bg-gradient-to-br from-rose-100 to-pink-100 text-rose-700',
  },
 
];

export const WhatWeBuild = () => {
  return (
    <section
      id="services"
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background images with proper layering */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        {/* Light mode background */}
        <div 
          className="absolute inset-0 dark:opacity-0 transition-opacity duration-300"
          style={{
            backgroundImage: "url('https://coolbackgrounds.imgix.net/3ePclU2S6e80DYWpCUdmPV/194ca1fcd9f49a833e906d7adb743078/white-unsplash.jpg?w=3840&q=60&auto=format,compress')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Dark mode background */}
        <div 
          className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-300"
          style={{
            backgroundImage: "url('https://img.pikbest.com/wp/202344/sleek-and-contemporary-abstract-texture-of-dark-fabric_9933411.jpg!w700wp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/10 dark:bg-black/40 backdrop-blur-sm" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            Versatility in <span className="text-primary dark:text-slate-100">Every Pixel</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-muted-foreground"
          >
            From simple landing pages to complex enterprise systems, we bring the same 
            level of precision and care to every line of code.
          </motion.p>
        </div>

        <HoverEffect
          items={services.map(service => ({
            title: service.title,
            description: service.description,
            link: "#",
            icon: service.icon,
            color: service.color,
            className: service.className,
          }))}
        />

      </div>
    </section>
  );
};
