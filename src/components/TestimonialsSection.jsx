import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { useInView } from 'react-intersection-observer';
    import AnimatedTitle from '@/components/AnimatedTitle';
    import { AnimatedTextElement } from '@/App'; // Assuming App.jsx exports this

    const testimonialsData = [
      { id: 1, alt: 'Depoimento de membro 1', src: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/21e4b3c6-ff71-40bd-b3dd-8ee4bebc95d8/c4ab692e4fad541eb83c63931e8ae410.webp' },
      { id: 2, alt: 'Depoimento de membro 2', src: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/21e4b3c6-ff71-40bd-b3dd-8ee4bebc95d8/40c04bb59f0512515fcf2ff92e18a80b.webp' },
      { id: 3, alt: 'Depoimento de membro 3', src: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/21e4b3c6-ff71-40bd-b3dd-8ee4bebc95d8/9bdd234c3703d7247afabfaa997a7f5c.webp' },
      { id: 4, alt: 'Depoimento de membro 4', src: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/21e4b3c6-ff71-40bd-b3dd-8ee4bebc95d8/feff78061e4a39f90903e6df1e3b7718.webp' },
      { id:5, alt: 'Depoimento de membro 5', src: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/21e4b3c6-ff71-40bd-b3dd-8ee4bebc95d8/423d20e3fb2924b1e4db27187107baf5.webp' },
      { id: 6, alt: 'Depoimento de membro 6', src: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/21e4b3c6-ff71-40bd-b3dd-8ee4bebc95d8/185276c13cbcb424255840a72d440557.webp' },
    ];

    const TestimonialsSection = () => {
      const duplicatedTestimonials = [...testimonialsData, ...testimonialsData]; 
      const hotmartLink = "https://pay.hotmart.com/Q98980035N?off=bm2ecn5u&bid=1747954127381";
      
      const imageWidthPx = 320; 
      const gapPx = 24; 
      const totalWidthOfOriginalSet = testimonialsData.length * (imageWidthPx + gapPx);

      const marqueeVariants = {
        animate: {
          x: [0, -totalWidthOfOriginalSet],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: testimonialsData.length * 7, 
              ease: "linear",
            },
          },
        },
      };
      
      const { ref: buttonRef, inView: buttonInView } = useInView({ triggerOnce: true, threshold: 0.3 });
      const { ref: carouselRef, inView: carouselInView } = useInView({ triggerOnce: true, threshold: 0.1 });


      return (
        <section id="membros" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-10 md:mb-12">
              <AnimatedTitle 
                text="O que os membros dizem" 
                el="h2"
                className="text-3xl md:text-4xl font-bold text-black text-center sm:text-left mb-4 sm:mb-0"
                delay={0}
                stagger={0.02}
              />
              <motion.div
                ref={buttonRef}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={buttonInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                 <Button
                    size="lg"
                    className="bg-black text-white hover:bg-gray-800 border border-transparent text-base font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg relative overflow-hidden group transform transition-all duration-300"
                    asChild
                  >
                    <motion.a
                      href={hotmartLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 0 15px 5px rgba(0, 0, 0, 0.2)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      animate={{
                        scale: [1, 1.03, 1],
                        boxShadow: [
                          "0 0 8px 2px rgba(0, 0, 0, 0.1)",
                          "0 0 15px 5px rgba(0, 0, 0, 0.2)",
                          "0 0 8px 2px rgba(0, 0, 0, 0.1)",
                        ],
                      }}
                      transition={{
                        scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                        boxShadow: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                      }}
                      className="inline-flex items-center justify-center"
                    >
                      FAZER PARTE
                      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-10 bg-white transition-opacity duration-300" style={{ mixBlendMode: 'overlay' }}></span>
                    </motion.a>
                  </Button>
              </motion.div>
            </div>

            <motion.div 
              ref={carouselRef}
              initial={{ opacity: 0, y: 20 }}
              animate={carouselInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }} 
              className="overflow-hidden relative group w-full" style={{ WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)", maskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)" }}>
              <motion.div
                className="flex"
                variants={carouselInView ? marqueeVariants : {}}
                animate="animate"
                style={{ cursor: 'default' }} 
              >
                {duplicatedTestimonials.map((testimonial, index) => (
                  <div
                    key={`${testimonial.id}-${index}`}
                    className="flex-shrink-0 bg-white rounded-lg shadow-lg overflow-hidden mx-3" 
                    style={{ 
                      width: `${imageWidthPx}px`, 
                      height: '480px', 
                      userSelect: 'none', 
                      WebkitUserSelect: 'none', 
                      MozUserSelect: 'none',
                      msUserSelect: 'none'
                    }}
                    draggable="false"
                  >
                    <img 
                      src={testimonial.src} 
                      alt={testimonial.alt} 
                      className="w-full h-full object-cover pointer-events-none"
                      draggable="false"
                      onDragStart={(e) => e.preventDefault()}
                    />
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
      );
    };

    export default TestimonialsSection;