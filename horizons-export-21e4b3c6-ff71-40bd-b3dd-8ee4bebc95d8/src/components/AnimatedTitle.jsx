import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedTitle = ({ text, el = "h1", className, delay = 0, stagger = 0.03, highlightWords = [], highlightClassName = "" }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Lower threshold for earlier animation start
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const words = text.split(/(\s+)/); 

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };

  // Simplified charVariants for opacity and slight upward motion
  const charVariants = {
    hidden: {
      opacity: 0,
      y: 10, 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4, // Faster individual character animation
        ease: "easeOut"
      },
    },
  };
  
  const MotionElement = motion[el];

  return (
    <MotionElement ref={ref} className={className} variants={containerVariants} initial="hidden" animate={controls}>
      {words.map((word, wordIndex) => {
        if (word.match(/\s+/)) { 
          return <span key={`space-${wordIndex}`} dangerouslySetInnerHTML={{ __html: '&nbsp;' }} />;
        }
        const isHighlighted = highlightWords.some(hw => word.includes(hw));
        return (
          <span key={`word-${wordIndex}`} className={`inline-block ${isHighlighted ? highlightClassName : ''}`}>
            {word.split("").map((char, charIndex) => (
              <motion.span
                key={`char-${wordIndex}-${charIndex}`}
                variants={charVariants}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
        );
      })}
    </MotionElement>
  );
};

export default AnimatedTitle;