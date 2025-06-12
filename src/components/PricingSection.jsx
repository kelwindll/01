import React from 'react';
    import { Check } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import { motion } from 'framer-motion';
    import AnimatedTitle from '@/components/AnimatedTitle';
    import { AnimatedTextElement } from '@/App';

    const PricingSection = () => {
      const hotmartLink = "https://pay.hotmart.com/Q98980035N?off=bm2ecn5u&bid=1747954127381";
      return (
        <section id="pricing" className="py-16 md:py-24 bg-gray-100 flex justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay:0.1 }}
              className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col" 
            >
              <div className="bg-gradient-to-br from-purple-700 via-purple-600 to-gray-800 p-8 text-center"> {/* Gradient background */}
                <AnimatedTitle 
                  text="ACESSO ANUAL"
                  el="h2"
                  className="text-3xl font-extrabold text-white sm:text-4xl"
                  stagger={0.02}
                  delay={0}
                />
                <AnimatedTextElement 
                  el="p"
                  delay={0.3}
                  className="mt-2 text-lg text-purple-100"
                >
                  Acesso completo por 12 meses.
                </AnimatedTextElement>
              </div>
              <div className="p-8 md:p-10 bg-white flex-grow flex flex-col justify-between">
                <div>
                  <div className="text-center mb-8">
                    <AnimatedTextElement 
                      el="p"
                      delay={0.2}
                      className="text-xl text-gray-500 line-through"
                    >
                      De R$497
                    </AnimatedTextElement>
                    <AnimatedTextElement
                      el="p"
                      delay={0.3}
                      className="text-5xl md:text-6xl font-extrabold text-gray-900"
                    >
                      R$297<span className="text-xl font-medium text-gray-700">/ano</span>
                    </AnimatedTextElement>
                     <AnimatedTextElement
                      el="p"
                      delay={0.4}
                      className="mt-2 text-2xl md:text-3xl font-bold text-black"
                    >
                      ou 12x de R$ 30,72
                    </AnimatedTextElement>
                  </div>

                  <ul role="list" className="space-y-4 mb-8">
                    {[
                      "Acesso imediato (se pago no cartão de crédito ou PIX)",
                      "Acesso a todas as atualizações do curso",
                      "Acompanhamento individual no WhatsApp",
                      "Acesso ao treinamento por 1 ano",
                      "Canal no Telegram"
                    ].map((feature, index) => (
                      <AnimatedTextElement
                        el="li"
                        key={index}
                        className="flex items-start"
                        delay={0.5 + index * 0.1}
                      >
                        <div className="flex-shrink-0">
                          <Check className="h-6 w-6 text-purple-600" aria-hidden="true" />
                        </div>
                        <p className="ml-3 text-base text-gray-700">{feature}</p>
                      </AnimatedTextElement>
                    ))}
                  </ul>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="mt-10"
                >
                  <Button
                    size="lg"
                    className="w-full bg-black text-white hover:bg-gray-800 text-xl font-bold py-5 px-6 rounded-lg shadow-md hover:shadow-lg relative overflow-hidden group transform hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <motion.a
                      href={hotmartLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(0,0,0,0.3)" }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center justify-center"
                    >
                      FAZER PARTE
                      <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-10 bg-white transition-opacity duration-300" style={{ mixBlendMode: 'overlay' }}></span>
                    </motion.a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      );
    };

    export default PricingSection;