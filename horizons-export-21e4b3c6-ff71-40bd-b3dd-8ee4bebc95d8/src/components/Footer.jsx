import React from 'react';
    import { motion } from 'framer-motion';

    const Footer = () => {
      const currentYear = new Date().getFullYear();

      return (
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-black text-gray-400 py-8"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-sm">
              <p>&copy; {currentYear} CoinClub. Todos os direitos reservados.</p>
            </div>
          </div>
        </motion.footer>
      );
    };

    export default Footer;