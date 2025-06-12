import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, CreditCard, DollarSign, Truck, Target, Percent, BookOpen, Smartphone, Globe, CalendarClock, Plane, Package, Zap, BarChart3, ShoppingCart } from 'lucide-react';
import AnimatedTitle from '@/components/AnimatedTitle';
import { AnimatedTextElement } from '@/App';


const learningTopics = [
  { text: "SUPORTE EXCLUSIVO", icon: <MessageCircle />, color: "bg-black text-white", row: 1 },
  { text: "MELHOR CARTÃO", icon: <CreditCard />, color: "bg-white text-black", row: 1 },
  { text: "COMO VENDER", icon: <DollarSign />, color: "bg-black text-white", row: 1 },
  { text: "ENDEREÇO NOS EUA", icon: <Truck />, color: "bg-white text-black", row: 1 },
  { text: "LEILÃO NA PRÁTICA", icon: <Target />, color: "bg-black text-white", row: 1 },
  { text: "CASHBACK IMPORTAÇÃO", icon: <Percent />, color: "bg-black text-white", row: 2 },
  { text: "DECLARAÇÃO ADUANEIRA", icon: <BookOpen />, color: "bg-black text-white", row: 2 },
  { text: "IPHONE NA PRÁTICA", icon: <Smartphone />, color: "bg-white text-black", row: 2 },
  { text: "CHINA NA TEORIA", icon: <Globe />, color: "bg-white text-black", row: 2 },
  { text: "PARCELADO EM 12X", icon: <CalendarClock />, color: "bg-black text-white", row: 2 },
  { text: "IMPORTAÇÃO CHINA NA PRÁTICA", icon: <Plane />, color: "bg-white text-black", row: 3 },
  { text: "IMPORTAÇÃO EUA NA PRÁTICA", icon: <Package />, color: "bg-black text-white", row: 3 },
  { text: "CANAL NO TELEGRAM", icon: <Zap />, color: "bg-black text-white", row: 3 },
  { text: "PLANILHA DE CÁLCULO", icon: <BarChart3 />, color: "bg-white text-black", row: 3 },
  { text: "SNEAKERS IMPORTAÇÃO", icon: <ShoppingCart />, color: "bg-black text-white", row: 3 },
];


const LearningAreasSection = () => {
  const sectionRef = useRef(null);
  
  const titleText = "NA COIN CLUB, VOCÊ DESENVOLVE NOVAS HABILIDADES DENTRO DO MERCADO DE IMPORTAÇÃO.";
  const subtitleText = "SOBRE O QUE VOCÊ QUER APRENDER HOJE?";
  
  const renderRow = (rowNumber, direction = 'left') => {
    const items = learningTopics.filter(topic => topic.row === rowNumber);
    const duplicatedItems = [...items, ...items, ...items]; 
    const duration = items.length * 7; 

    return (
      <div className="overflow-hidden relative w-full py-3 group" style={{ WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)", maskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)" }}>
        <motion.div
          className="flex"
          animate={{
            x: direction === 'left' ? ['0%', `-${100 * (items.length / duplicatedItems.length)}%`] : [`-${100 * (items.length / duplicatedItems.length)}%`, '0%'],
          }}
          transition={{
            ease: 'linear',
            duration: duration,
            repeat: Infinity,
          }}
        >
          {duplicatedItems.map((topic, index) => (
            <motion.div
              key={`${topic.text}-${index}-${rowNumber}`} 
              className={`flex items-center justify-center p-4 px-6 rounded-lg shadow-md mx-2 flex-shrink-0 ${topic.color} whitespace-nowrap hover:scale-105 transition-transform duration-300`}
              style={{ minWidth: '200px', userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}
              draggable="false"
              whileHover={{ boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
            >
              {React.cloneElement(topic.icon, { className: "w-5 h-5 mr-3" })}
              <span className="font-semibold text-sm uppercase tracking-wider">{topic.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <section ref={sectionRef} id="aprendizado" className="py-16 md:py-24 bg-[#f5f5f5]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16 text-left max-w-3xl">
           <AnimatedTitle 
            text={titleText}
            el="h2"
            className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-4 text-black"
            highlightWords={["NOVAS HABILIDADES", "MERCADO DE IMPORTAÇÃO"]}
            highlightClassName="text-purple-600"
            delay={0}
            stagger={0.02}
          />
          <AnimatedTitle 
            text={subtitleText}
            el="h2" 
            className="text-3xl md:text-4xl lg:text-4xl font-semibold leading-tight text-gray-700 mb-2 sm:mb-0"
            delay={0.5} 
            stagger={0.02}
          />
        </div>
        <div className="space-y-4">
          {renderRow(1, 'left')}
          {renderRow(2, 'right')}
          {renderRow(3, 'left')}
        </div>
      </div>
    </section>
  );
};

export default LearningAreasSection;