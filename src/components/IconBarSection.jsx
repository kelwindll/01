import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, TrendingUp, DollarSign, Package, ShieldQuestion } from 'lucide-react';

const iconBarItems = [
  {
    icon: <DollarSign className="h-8 w-8 text-red-500" strokeWidth={2} />,
    title: "IMPORTE LEGALMENTE",
    description: "Aprenda a importar produtos originais pagando os impostos corretamente e evite dores de cabeça.",
  },
  {
    icon: <BookOpen className="h-8 w-8 text-red-500" strokeWidth={2} />,
    title: "APRENDA COM OS MELHORES",
    description: "Tenha acesso a um conteúdo exclusivo e validado por quem realmente entende de importação.",
  },
  {
    icon: <Users className="h-8 w-8 text-red-500" strokeWidth={2} />,
    title: "COMUNIDADE EXCLUSIVA",
    description: "Faça parte de um grupo seleto de importadores, troque experiências e faça networking.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const IconBarSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {iconBarItems.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="h-full"
            >
              <div className="h-full flex flex-col items-center text-center p-4 md:p-6 bg-slate-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-200">
                <div className="p-3 bg-red-100 rounded-full mb-3">
                  {item.icon}
                </div>
                <h3 className="text-md font-semibold text-gray-800 mb-1 uppercase tracking-wide">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IconBarSection;