import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from 'lucide-react';

import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    icon?: React.ComponentType<any>;
    color?: string;
    className?: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link ?? idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full rounded-3xl bg-gradient-to-r from-blue-200/40 via-blue-100/30 to-transparent backdrop-blur-sm"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.18 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          <Card className={item.className}>
            <div className={cn('w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 border border-transparent', item.color)}>
              {item.icon && <item.icon className="w-6 h-6 text-current" />}
            </div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-slate-100">
              {item.title}
              <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-primary" />
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              {item.description}
            </p>

            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              {item.icon && <item.icon className="w-24 h-24 text-current" />}
            </div>

            {/* Subtle accent shape */}
            <div className="absolute -left-16 -top-16 w-44 h-44 rounded-full bg-gradient-to-tr from-blue-200/30 via-cyan-50/20 to-transparent blur-3xl opacity-60 pointer-events-none" />
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 210, damping: 22 }}
      className={cn(
        "rounded-2xl h-full w-full p-6 overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl transition-transform duration-300 backdrop-blur-sm relative z-20",
        className
      )}
    >
      <div className="relative z-10">
        <div className="p-2">{children}</div>
      </div>
    </motion.div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-slate-900 dark:text-slate-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-slate-600 dark:text-slate-300 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
