import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hotmartLink = "https://pay.hotmart.com/Q98980035N?off=bm2ecn5u&bid=1747954127381";

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: 'Início', href: '#hero' },
    { name: 'Depoimentos', href: '#membros' },
    { name: 'O Que Você Vai Aprender', href: '#aprendizado' },
    { name: 'Comunidade', href: '#comunidade' },
    { name: 'Preço', href: '#pricing' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
      className="bg-transparent text-black absolute top-0 left-0 right-0 z-50 pt-10 md:pt-12" 
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex-shrink-0"
          >
            <a href="/" className="text-2xl font-bold tracking-tight text-black">
              COIN CLUB
            </a>
          </motion.div>
          <div className="hidden md:flex md:items-center md:space-x-1">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="px-3 py-2 rounded-md text-sm font-medium text-black hover:bg-gray-100 hover:text-purple-700 transition-colors duration-300"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="relative group" 
            >
              <Button 
                variant="outline" 
                className="text-black border-black bg-white hover:bg-gray-800 hover:text-white transition-all duration-300 ml-3 shadow-md overflow-hidden"
                asChild
              >
                 <motion.a
                  href={hotmartLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0px 0px 15px rgba(0,0,0,0.2)",
                    transition: { duration: 0.2 } 
                  }}
                  whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
                  className="relative z-10"
                >
                  FAZER PARTE
                </motion.a>
              </Button>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  animation: 'shimmer 2s infinite linear',
                  backgroundSize: '200% 100%',
                }}
              ></motion.div>
              <style jsx global>{`
                @keyframes shimmer {
                  0% { background-position: 200% 0; }
                  100% { background-position: -200% 0; }
                }
              `}</style>
            </motion.div>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} className="text-black bg-white/80 hover:bg-gray-100">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden bg-white shadow-lg mt-2 rounded-md mx-4 sm:mx-6" 
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => {
                toggleMenu();
                const element = document.querySelector(item.href);
                if (element) {
                  const offset = 0; 
                  const bodyRect = document.body.getBoundingClientRect().top;
                  const elementRect = element.getBoundingClientRect().top;
                  const elementPosition = elementRect - bodyRect;
                  const offsetPosition = elementPosition - offset;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className="block px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-100 hover:text-purple-700 transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          <Button 
            variant="outline" 
            className="w-full text-black border-black hover:bg-black hover:text-white transition-all duration-300 mt-2"
            asChild
          >
            <motion.a
              href={hotmartLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.98, transition: { duration: 0.2 } }}
            >
              FAZER PARTE
            </motion.a>
          </Button>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;