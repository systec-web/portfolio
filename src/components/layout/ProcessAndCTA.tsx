import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, FileSearch, Code2, Rocket, ArrowRight, Check, Sparkles, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StickyScroll } from '../ui/sticky-scroll-reveal';

const steps = [
  {
    title: 'Free Consultation',
    description: 'We discuss your vision, goals, and budget to find the perfect solution.',
    icon: MessageSquare,
    covered: ['Scope & goals', 'Budget & timeline', 'Success metrics & KPIs'],
  },
  {
    title: 'Detailed Strategy',
    description: 'We map out every feature and user flow to ensure total clarity.',
    icon: Search,
    covered: ['MVP definition', 'User journeys', 'Tech stack recommendations'],
  },
  {
    title: 'Precise Development',
    description: 'Our team builds your solution with regular updates and feedback loops.',
    icon: Code2,
    covered: ['Iterative sprints', 'Automated testing', 'Regular demos & reviews'],
  },
  {
    title: 'Launch & Support',
    description: 'We handle deployment and stay by your side to ensure long-term success.',
    icon: Rocket,
    covered: ['Deployment & monitoring', 'Post-launch support', 'Performance tuning'],
  },
];

export const ProcessAndCTA = () => {
  return (
    <section id="process" className="w-full py-24 relative overflow-hidden bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      {/* Decorative full-bleed background */}
      <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -left-40 -top-40 w-[640px] h-[640px] bg-primary/6 rounded-full blur-3xl animate-blob" />
        <div className="absolute -right-40 -bottom-40 w-[520px] h-[520px] bg-accent/6 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=60&w=1920')] bg-cover bg-center opacity-6" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            A Journey of <span className="text-primary">Total Clarity</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-muted-foreground"
          >
            No stress, no jargon. Just a clear path from your idea to a high-impact reality.
          </motion.p>
        </div>

        {/* Sticky scroll reveal version of the process steps (full-bleed) */}
        <div className="-mx-6 px-6 w-full">
          <StickyScroll
            content={steps.map((step) => ({
              title: step.title,
              description: step.description,
              content: (
                <div className="flex h-full w-screen items-center justify-center">
                  <div className="flex flex-col items-start justify-center gap-4 p-6 h-full w-full">
                  <div className="w-36 h-36 rounded-2xl flex items-center justify-center  mt-4">
                      <step.icon className="w-16 h-16 text-green-900 dark:text-slate-100" />
                    </div>
                 
                    <div className="mt-3 w-full">
                      <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3">What we cover</h4>
                      <ul className="space-y-2">
                        {step.covered?.map((item, idx) => (
                          <li key={item + idx} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                            <Check className="w-4 h-4 text-primary dark:text-slate-100" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ),
            }))}
            contentClassName="rounded-xl"
          />
        </div>

        {/* Final CTA Card */}
    
      </div>
    </section>
  );
};
