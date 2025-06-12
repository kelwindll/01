import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AnimatedTitle from '@/components/AnimatedTitle';
import { AnimatedTextElement } from '@/App';

const PulsingDot = () => (
  <motion.div
    className="h-3 w-3 bg-green-400 rounded-full mr-2" 
    animate={{
      scale: [1, 1.15, 1, 1.15, 1],
      opacity: [1, 0.6, 1, 0.6, 1],
    }}
    transition={{
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const HeroSection = () => {
  const hotmartLink = "https://pay.hotmart.com/Q98980035N?off=bm2ecn5u&bid=1747954127381";
  const heroBackgroundImageUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/21e4b3c6-ff71-40bd-b3dd-8ee4bebc95d8/8ed28920abe0ee9f916d8c8572d6b077.webp";
  
  return (
    <section id="hero" className="relative pt-48 pb-12 md:pt-56 md:pb-16 flex items-center justify-center min-h-[90vh] sm:min-h-[85vh] bg-gray-100"> 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <motion.div 
          className="w-full max-w-4xl bg-cover bg-center p-10 py-16 sm:p-12 sm:py-20 md:p-16 md:py-24 rounded-xl shadow-2xl relative overflow-hidden" 
          style={{ backgroundImage: `url(${heroBackgroundImageUrl})` }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} 
        >
          <div className="absolute inset-0 bg-black opacity-70 z-0"></div> {/* Opacidade aumentada para 70% */}
          <div className="relative z-10 text-left">
            <AnimatedTextElement
              el="div"
              delay={0.5} 
              className="flex items-center text-sm font-bold uppercase text-white mb-5" 
              yOffset={0}
            >
              <PulsingDot />
              +400 MEMBROS ATIVOS AGORA
            </AnimatedTextElement>

            <AnimatedTitle 
              text="APRENDA A IMPORTAR DO EUA E CHINA!" 
              el="h1"
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase mb-6 tracking-tight text-white" 
              delay={0.7} 
              stagger={0.02}
            />
            
            <AnimatedTextElement
              el="p"
              delay={0.9} 
              className="text-base sm:text-lg font-bold uppercase text-gray-200 max-w-2xl mb-10 leading-relaxed" 
              yOffset={0}
            >
              A COIN CLUB REÚNE PLAYERS DE MÚLTIPLOS CINCO DÍGITOS DE IMPORTAÇÃO DO BRASIL INTEIRO COM UM OBJETIVO EM COMUM: FAZER DINHEIRO EMPREENDENDO COM SOLIDEZ E CONSISTÊNCIA.
            </AnimatedTextElement>

            <AnimatedTextElement
              el="div"
              delay={1.1} 
              yOffset={0}
            >
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 border border-transparent text-lg font-bold py-4 px-10 rounded-full shadow-md hover:shadow-lg relative overflow-hidden group"
                asChild
              >
                <motion.a
                  href={hotmartLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px 8px rgba(255, 255, 255, 0.3)", 
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    scale: [1, 1.03, 1],
                    boxShadow: [
                      "0 0 10px 3px rgba(255, 255, 255, 0.2)",
                      "0 0 20px 8px rgba(255, 255, 255, 0.3)",
                      "0 0 10px 3px rgba(255, 255, 255, 0.2)",
                    ],
                  }}
                  transition={{
                    scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                    boxShadow: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="inline-flex items-center justify-center" 
                >
                  FAZER PARTE
                  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300" style={{ mixBlendMode: 'overlay' }}></span>
                </motion.a>
              </Button>
            </AnimatedTextElement>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;