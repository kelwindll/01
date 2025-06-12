import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const productsData = [
  { name: "Drone Profissional", imgSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/21e4b3c6-ff71-40bd-b3dd-8ee4bebc95d8/374f0276395761b89b642ac510d44ca8.webp" },
  { name: "Processador i9 14th Gen", imgSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/21e4b3c6-ff71-40bd-b3dd-8ee4bebc95d8/b5e01bd87adc752c1eeb7f1892b27960.webp" },
  { name: "Parafusadeira DeWalt", imgSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/21e4b3c6-ff71-40bd-b3dd-8ee4bebc95d8/65924108b28d3bd241ce0da73329b608.webp" },
  { name: "Bolsa Louis Vuitton", imgSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/21e4b3c6-ff71-40bd-b3dd-8ee4bebc95d8/d8721b797fe51f5e5f798c528fcea69a.webp" },
  { name: "Boneco Lego", imgSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/21e4b3c6-ff71-40bd-b3dd-8ee4bebc95d8/82fd6b1713812b078fff37585e838ddc.webp" },
  { name: "Mala de Viagem Rimowa", imgSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/21e4b3c6-ff71-40bd-b3dd-8ee4bebc95d8/92f394dc41501db8db6a415529269d5a.webp" },
  { name: "Base Dior Forever", imgSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/21e4b3c6-ff71-40bd-b3dd-8ee4bebc95d8/994884ee5ff90be1b8c127992784e213.webp" },
  { name: "Molinete de Pesca", imgSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/21e4b3c6-ff71-40bd-b3dd-8ee4bebc95d8/b12ddcb3c629e2c64e9198bbc282d9d3.webp" },
  { name: "Tênis Nike Air Jordan", imgSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/21e4b3c6-ff71-40bd-b3dd-8ee4bebc95d8/71f8bf2c5cdc1c6c3dbc6f8018153557.webp" },
  { name: "Jaqueta Ferrari", imgSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/21e4b3c6-ff71-40bd-b3dd-8ee4bebc95d8/fb6ad706bbbff65a70d56b84cdbd0511.webp" },
  { name: "Perfume Dior Sauvage", imgSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/21e4b3c6-ff71-40bd-b3dd-8ee4bebc95d8/9144744c47b7181fdb83f45bd252e250.webp" },
  { name: "Câmera GoPro Hero", imgSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/21e4b3c6-ff71-40bd-b3dd-8ee4bebc95d8/fe7c78fc9a4bdb3aa0ed4d670fb6d6ad.webp" },
  { name: "iPhone Branco", imgSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/21e4b3c6-ff71-40bd-b3dd-8ee4bebc95d8/de16a259307cca9581cfe33a11893fd1.webp" },
  { name: "Teclado Gamer HyperX", imgSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/21e4b3c6-ff71-40bd-b3dd-8ee4bebc95d8/7145ce5b1010d379811c3f78a4432a4b.webp" },
  { name: "Carrinho Hot Wheels Bugatti", imgSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/21e4b3c6-ff71-40bd-b3dd-8ee4bebc95d8/3f128873b3f51c1627bf1d6d5c3a412e.webp" },
  { name: "Boneco Kaws Preto", imgSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/21e4b3c6-ff71-40bd-b3dd-8ee4bebc95d8/c213f54bf826d4f2abe1f11b07f990c9.webp" },
  { name: "AirPods Pro Apple", imgSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/21e4b3c6-ff71-40bd-b3dd-8ee4bebc95d8/a2465a6e32d6569afe9c0e06303c4d91.webp" },
  { name: "Carteira Louis Vuitton", imgSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/21e4b3c6-ff71-40bd-b3dd-8ee4bebc95d8/bc3dc4d72a0b2e1da077e6194e2e174e.webp" },
  { name: "Relógio Svincreia", imgSrc: "https://storage.googleapis.com/hostinger-horizons-assets-prod/21e4b3c6-ff71-40bd-b3dd-8ee4bebc95d8/97ac0f78b0aa6c53e958b864d201f237.webp" },
];

const CommunitySection = () => {
  const duplicatedProducts = productsData.length > 0 ? [...productsData, ...productsData, ...productsData] : [];
  
  const itemsPerView = 6; 
  const itemWidthPercentage = productsData.length > 0 ? 100 / itemsPerView : 0; 
  const gapRem = 0.5; 
  
  let totalWidthOfOriginalSetPercentage = 0;
  if (productsData.length > 0 && itemWidthPercentage > 0) {
    const approximateItemWidthPx = 150; 
    const gapPx = gapRem * 16; 
    const gapPercentageBasedOnItem = (gapPx / approximateItemWidthPx) * 100;
    totalWidthOfOriginalSetPercentage = productsData.length * (itemWidthPercentage + gapPercentageBasedOnItem);
  }
  
  const marqueeVariants = {
    animate: {
      x: (totalWidthOfOriginalSetPercentage > 0 && duplicatedProducts.length > productsData.length) ? [`0%`, `-${totalWidthOfOriginalSetPercentage}%`] : [`0%`, `0%`],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: productsData.length > 0 ? productsData.length * 5 : 60, 
          ease: "linear",
        },
      },
    },
  };

  const { ref: carouselRef, inView: carouselInView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="community-products" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-0 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16 px-4 sm:px-0"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-3">
            Você está a um passo de encontrar produtos até <span className="text-gray-500">10x mais BARATOS</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore as categorias mais populares entre nossos membros e veja o potencial de economia e lucro que te espera.
          </p>
        </motion.div>

        {duplicatedProducts.length > 0 && (
          <motion.div
            ref={carouselRef}
            className="relative w-full group"
            style={{ 
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 2%, black 98%, transparent 100%)", 
              maskImage: "linear-gradient(to right, transparent 0%, black 2%, black 98%, transparent 100%)"
            }}
            initial={{ opacity: 0 }}
            animate={carouselInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="flex"
              variants={carouselInView && totalWidthOfOriginalSetPercentage > 0 ? marqueeVariants : { animate: { x: "0%" } }}
              animate="animate"
              style={{ cursor: 'default' }}
            >
              {duplicatedProducts.map((product, index) => (
                <div
                  key={`${product.name}-${index}`}
                  className="flex-shrink-0 mx-2" 
                  style={{ 
                    width: `calc(${itemWidthPercentage}% - ${gapRem * 2}rem)`, 
                    minWidth: '150px', 
                    userSelect: 'none', 
                    WebkitUserSelect: 'none', 
                    MozUserSelect: 'none',
                    msUserSelect: 'none'
                  }}
                  draggable="false"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.1 }} 
                    transition={{ duration: 0.4, delay: index * 0.03 }}
                    className="p-1 h-full"
                  >
                    <Card className="h-full overflow-hidden transition-all duration-300 rounded-xl bg-transparent border-none shadow-none">
                      <CardContent className="flex flex-col items-center justify-start p-2 sm:p-4 text-center aspect-[3/4]">
                        <img 
                          src={product.imgSrc} 
                          alt={product.name} 
                          className="w-full h-3/5 object-contain mb-2 sm:mb-3 rounded-md pointer-events-none"
                          draggable="false"
                          onDragStart={(e) => e.preventDefault()}
                        />
                        <h3 className="mt-1 sm:mt-2 text-xs sm:text-sm font-semibold text-gray-700 leading-tight">{product.name}</h3>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 md:mt-16 flex items-center justify-center bg-black p-3 sm:p-4 rounded-xl shadow-2xl max-w-2xl mx-auto border border-yellow-500/30"
        >
          <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 mr-3 flex-shrink-0" strokeWidth={2} />
          <p className="text-xs sm:text-sm md:text-base font-semibold text-white uppercase tracking-wider whitespace-nowrap">
            VOCÊ PODE IMPORTAR QUALQUER PRODUTO LÍCITO.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default CommunitySection;