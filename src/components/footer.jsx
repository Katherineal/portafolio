import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaLinkedin, FaSquareGithub } from 'react-icons/fa6'
import { BiLogoGmail } from 'react-icons/bi'

export default function Footer() {
  const [showCopiedMessage, setShowCopiedMessage] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("kalzamorazav@gmail.com")
    setShowCopiedMessage(true)
    setTimeout(() => setShowCopiedMessage(false), 2000)
  }

  return (
    <footer className="w-full bg-white dark:bg-black text-gray-800 dark:text-white py-20">
      <div className="w-full max-w-4xl mx-auto px-4">
        <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Katherine Alzamora</h3>
        
        {/* Iconos de redes sociales */}
        <div className="flex justify-center md:justify-start space-x-4 mt-4">
          <motion.a
            href="https://www.linkedin.com/in/katherine-alzamora"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin className="w-8 h-8 hover:animate-shake cursor-pointer text-blue-500" />
          </motion.a>
          <motion.a
            href="https://github.com/Katherineal"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaSquareGithub className="w-8 h-8 hover:animate-shake cursor-pointer" />
          </motion.a>
          <motion.button
            className="w-8 h-8 hover:animate-shake cursor-pointer"
            onClick={copyEmail}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <BiLogoGmail className="h-full w-full text-red-500"/>
          </motion.button>
        </div>

        <AnimatePresence>
          {showCopiedMessage && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-green-500 text-sm mt-2 text-center md:text-left"
            >
              Email copiado al portapapeles
            </motion.p>
          )}
        </AnimatePresence>

        <div className="border-t border-gray-300 dark:border-gray-600 mt-4 pt-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
            © 2024 Katherine Alzamora. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}