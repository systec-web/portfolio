"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Contact from './Contact';

export const QuoteCTA = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="quote" className="py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="relative rounded-[1.5rem] bg-gradient-to-r from-white to-slate-50 border border-slate-100 p-8 md:p-12 overflow-hidden text-center shadow-lg">
          <div className="relative z-10 max-w-3xl mx-auto">
         <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6 tracking-tight">
              Ready to <span className="text-primary">Illuminate</span> Your Business?
            </h3>
            
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Let's build something exceptional together. Our team is ready to provide 
              a free consultation and a transparent quote customized to your vision.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button onClick={() => setOpen(true)} size="lg" className="rounded-full h-14 px-8 text-lg font-semibold bg-primary text-white">
                Book Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

           
            </div>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.28 }}
                className="mt-6 w-full"
              >
                <div className="mx-auto max-w-3xl">
                 
                  <Contact onClose={() => setOpen(false)} />
                  <div className="flex justify-end mt-2">
                   
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default QuoteCTA;
