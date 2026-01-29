"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { useEffect, useState } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{}}
                  key={`char-${index}`}
                  className={cn(
                    `dark:text-white text-black opacity-0 hidden`,
                    word.className
                  )}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </motion.div>
    );
  };
  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center",
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });
  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span
                  key={`char-${index}`}
                  className={cn(`dark:text-white text-black `, word.className)}
                >
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div
          className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {renderWords()}{" "}
        </div>{" "}
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,

          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px]  h-4 sm:h-6 xl:h-12 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};


export const TypewriterLoop = ({
  pairs,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseAfter = 1500,
  className,
  topClassName,
  bottomClassName,
}: {
  pairs: { top: string; bottom: string; topClass?: string; bottomClass?: string }[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseAfter?: number;
  className?: string;
  topClassName?: string;
  bottomClassName?: string;
}) => {
  const [pairIndex, setPairIndex] = useState(0);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [phase, setPhase] = useState<
    "typingTop" | "typingBottom" | "pause" | "deletingBottom" | "deletingTop"
  >("typingTop");

  useEffect(() => {
    let timeout: number | undefined;
    const currentPair = pairs[pairIndex];

    if (phase === "typingTop") {
      if (topText.length < currentPair.top.length) {
        timeout = window.setTimeout(() => {
          setTopText(currentPair.top.slice(0, topText.length + 1));
        }, typingSpeed);
      } else {
        // start typing bottom after short delay
        timeout = window.setTimeout(() => setPhase("typingBottom"), 200);
      }
    } else if (phase === "typingBottom") {
      if (bottomText.length < currentPair.bottom.length) {
        timeout = window.setTimeout(() => {
          setBottomText(currentPair.bottom.slice(0, bottomText.length + 1));
        }, typingSpeed);
      } else {
        timeout = window.setTimeout(() => setPhase("pause"), pauseAfter);
      }
    } else if (phase === "pause") {
      timeout = window.setTimeout(() => setPhase("deletingBottom"), 400);
    } else if (phase === "deletingBottom") {
      if (bottomText.length > 0) {
        timeout = window.setTimeout(() => {
          setBottomText(bottomText.slice(0, -1));
        }, deletingSpeed);
      } else {
        timeout = window.setTimeout(() => setPhase("deletingTop"), 100);
      }
    } else if (phase === "deletingTop") {
      if (topText.length > 0) {
        timeout = window.setTimeout(() => {
          setTopText(topText.slice(0, -1));
        }, deletingSpeed);
      } else {
        // next pair
        timeout = window.setTimeout(() => {
          setPairIndex((p) => (p + 1) % pairs.length);
          setPhase("typingTop");
        }, 200);
      }
    }

    return () => {
      if (timeout !== undefined) window.clearTimeout(timeout);
    };
  }, [phase, topText, bottomText, pairIndex, pairs, typingSpeed, deletingSpeed, pauseAfter]);

  const currentPair = pairs[pairIndex] || pairs[0];

  return (
    <div className={cn("inline-block text-center", className)}>
      <div className={cn("block text-4xl md:text-5xl lg:text-6xl font-black font-serif leading-tight", topClassName, currentPair.topClass)}>
        {topText}
      </div>
      <div className={cn("block text-2xl md:text-3xl lg:text-4xl font-semibold mt-2", bottomClassName, currentPair.bottomClass)}>
        {bottomText}
        <span className="inline-block rounded-sm w-[4px] h-6 bg-primary ml-2 animate-pulse align-middle" />
      </div>
    </div>
  );
};
