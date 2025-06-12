import React from 'react';
    import Header from '@/components/Header';
    import HeroSection from '@/components/HeroSection';
    import KeyFeaturesSection from '@/components/KeyFeaturesSection';
    import TestimonialsSection from '@/components/TestimonialsSection';
    import LearningAreasSection from '@/components/LearningAreasSection';
    import CommunitySection from '@/components/CommunitySection';
    import PricingSection from '@/components/PricingSection';
    import Footer from '@/components/Footer';
    import { Toaster } from '@/components/ui/toaster';
    import { motion } from 'framer-motion';
    import { useInView } from 'react-intersection-observer';
    // ImageDisplaySection não é mais importado pois seu conteúdo foi movido e o componente se tornou vazio.
    // import ImageDisplaySection from '@/components/ImageDisplaySection';

    // General purpose AnimatedSection for simple fade-in and slide-up for entire sections
    export const AnimatedSection = ({ children, className, threshold = 0.1, delay = 0 }) => {
      const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: threshold, 
      });
    
      return (
        <motion.section
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: delay }}
          className={className}
        >
          {children}
        </motion.section>
      );
    };
    
    // Specific component for animating individual text elements (p, span, li, etc.) with opacity
    export const AnimatedTextElement = ({ children, className, delay = 0.2, el = "p", threshold = 0.1, yOffset = 0 }) => {
      const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: threshold,
      });
      const MotionElement = motion[el];

      return (
        <MotionElement
          ref={ref}
          className={className}
          initial={{ opacity: 0, y: yOffset }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay }}
        >
          {children}
        </MotionElement>
      );
    };


    function App() {
      return (
        <div className="flex flex-col min-h-screen bg-white font-sans relative"> {/* Added relative for absolute header */}
          <Header /> 
          <main className="flex-grow">
            {/* 1ª Seção */}
            <HeroSection /> 
            
            {/* 2ª Seção - Agora contém o banner "VOCÊ PODE IMPORTAR QUALQUER PRODUTO LÍCITO." */}
            <AnimatedSection threshold={0.1} delay={0.05}><CommunitySection /></AnimatedSection>
            
            {/* 3ª Seção */}
            <AnimatedSection threshold={0.05} delay={0.05}><KeyFeaturesSection /></AnimatedSection>
            
            {/* 4ª Seção */}
            <AnimatedSection threshold={0.1} delay={0.05}><TestimonialsSection /></AnimatedSection>
            
            {/* 5ª Seção */}
            <AnimatedSection threshold={0.1} delay={0.05}><LearningAreasSection /></AnimatedSection>
            
            {/* ImageDisplaySection foi removida pois seu conteúdo foi movido e a seção ficou vazia */}
            {/* <AnimatedSection threshold={0.1} delay={0.05}><ImageDisplaySection /></AnimatedSection> */}
            
            {/* Última Seção */}
            <AnimatedSection threshold={0.1} delay={0.05}><PricingSection /></AnimatedSection>
          </main>
          <AnimatedSection threshold={0.1} delay={0.05}><Footer /></AnimatedSection>
          <Toaster />
        </div>
      );
    }

    export default App;