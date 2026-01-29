import React from 'react';
import { motion } from 'framer-motion';
import { Check, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Starter',
    tagline: 'Perfect for small projects',
    price: 'Rs 5,999',
    description: 'Quick delivery for simple websites or prototypes.',
    features: [
      'Responsive Website (up to 5 pages)',
      'Modern Design System',
      'Basic SEO Optimization',
      'CMS Integration',
      '2 Rounds of Revisions',
      '30 Days Support',
    ],
    highlight: false,
  },
  {
    name: 'Business',
    tagline: 'Best for growing companies',
    price: 'Rs 9,999',
    description: 'Custom internal systems and robust web platforms.',
    features: [
      'Custom Business Logic',
      'Advanced Database Design',
      'User Authentication & Roles',
      'API Integrations',
      'Unlimited Pages',
      '90 Days Priority Support',
    ],
    highlight: true,
  },
  {
    name: 'Premium',
    tagline: 'For advanced enterprise needs',
    price: 'Custom',
    description: 'Fully tailor-made software solutions for complex needs.',
    features: [
      'Full Desktop Applications',
      'Microservices Architecture',
      'White-label Solutions',
      'Performance Optimization',
      'Dedicated Project Manager',
      '1 Year Technical Support',
    ],
    highlight: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-4 px-4 py-1 rounded-full border-primary/20 text-primary dark:text-slate-100 dark:border-slate-600">
            Transparent Pricing
          </Badge>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            Invest in Your <span className="text-primary dark:text-slate-100">Digital Future</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-muted-foreground"
          >
            Clear packages, no hidden costs, and total flexibility. Choose the 
            right foundation for your next big launch.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={cn(
                'relative p-10 rounded-[2.5rem] border transition-all duration-500',
                plan.highlight 
                  ? 'bg-primary text-primary-foreground shadow-2xl shadow-primary/20 scale-105 z-10' 
                  : 'bg-background/50 dark:bg-slate-800/50 backdrop-blur-sm hover:border-primary/30'
              )}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-10 -translate-y-1/2">
                  <Badge className="bg-white text-primary hover:bg-white px-4 py-1.5 shadow-lg">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <div className="mb-10">
                <p className={cn('text-sm font-bold uppercase tracking-widest mb-2', plan.highlight ? 'text-primary-foreground/70' : 'text-primary dark:text-slate-100')}>
                  {plan.name}
                </p>
                <h3 className="text-4xl font-serif font-bold mb-4">
                  {plan.price}
                  {plan.price !== 'Custom' && <span className="text-lg font-sans font-normal opacity-70">/start</span>}
                </h3>
                <p className={cn('text-sm italic leading-relaxed', plan.highlight ? 'text-primary-foreground/80' : 'text-muted-foreground')}>
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className={cn('mt-1 p-0.5 rounded-full', plan.highlight ? 'bg-white/20' : 'bg-primary/10')}>
                      <Check className={cn('w-3.5 h-3.5', plan.highlight ? 'text-white' : 'text-primary')} />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.highlight ? 'secondary' : 'default'} 
                className={cn('w-full h-12 rounded-2xl font-bold text-base', plan.highlight ? 'bg-white text-primary hover:bg-white/90' : '')}
              >
                Choose {plan.name}
              </Button>
              
              <p className={cn('mt-6 text-center text-xs flex items-center justify-center gap-2', plan.highlight ? 'text-primary-foreground/60' : 'text-muted-foreground')}>
                <Info className="w-3.5 h-3.5" />
                No hidden setup fees
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
