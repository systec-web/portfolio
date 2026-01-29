import React from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Shield, Zap, Award, FileText, Check } from 'lucide-react';
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials  = [
  {
    name: 'Luqman Booso',
    designation: 'Founder, Senior Developer',
    src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    quote: 'Bridging the gap between complex business needs and elegant technical solutions.',
  },
  {
    name: 'Lahiru Jayawardhana',
    designation: 'Co-Founder, Lead Designer',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    quote: 'Dedicated to writing clean, scalable code that delivers real-world business value.',
  },
];

const reasons = [
  {
    title: 'Affordable Quality',
    description: 'High-end engineering without the enterprise price tag.',
    icon: Award,
  },
  {
    title: 'Total Flexibility',
    description: 'We adapt our process to fit your unique business requirements.',
    icon: Zap,
  },
  {
    title: 'Transparent Support',
    description: 'No jargon, just honest advice and friendly assistance.',
    icon: Heart,
  },
  {
    title: 'Security First',
    description: 'Your data is protected by industry-standard security protocols.',
    icon: Shield,
  },
];

export const AboutAndWhy = () => {
  return (
    <>
      {/* Why Choose Us */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold mb-8"
          >
            Why Businesses <br />
            <span className="text-primary dark:text-slate-100">Trust Brighter</span>
          </motion.h2>

          {/* What we'll cover + Infinite scrolling cards */}
          <div className="mt-6 flex flex-col md:flex-row items-start gap-8">
            <div className="flex-shrink-0 flex items-start gap-4 max-w-md">
              <div className="w-10 h-10 rounded-xl bg-primary/5 dark:bg-primary/20 text-primary dark:text-slate-100 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">What we'll cover</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {["Custom, scalable web apps","Fast, iterative delivery","Transparent, predictable pricing","Security-first architecture","Ongoing support & maintenance"].map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <Check className="w-4 h-4 mt-0.5 text-primary dark:text-slate-100" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex-1 w-full">
              <InfiniteMovingCards
                items={reasons.map((r, i) => ({
                  quote: r.description,
                  name: r.title,
                  title: "",
                  icon: r.icon,
                  color: [
                    "bg-rose-50 text-rose-600 dark:bg-slate-800 dark:text-slate-100",
                    "bg-amber-50 text-amber-600 dark:bg-slate-800 dark:text-slate-100",
                    "bg-emerald-50 text-emerald-600 dark:bg-slate-800 dark:text-slate-100",
                    "bg-sky-50 text-sky-600 dark:bg-slate-800 dark:text-slate-100",
                  ][i % 4],
                }))}
                direction="right"
                speed="slow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24 px-6 bg-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 border-t border-slate-300 dark:border-slate-600" />
            <span className="text-sm font-bold uppercase tracking-widest text-primary dark:text-slate-100 flex items-center gap-2 mx-4">
              <Users className="w-4 h-4" />
              Meet the Team
            </span>

            <div className="flex-1 border-t border-slate-300 dark:border-slate-600" />
          </div>

      <AnimatedTestimonials testimonials={testimonials} />
        </div>
      </section>
    </>
  );
};
