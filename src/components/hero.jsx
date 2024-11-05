"use client";
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCaretDown } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export default function Hero() {
    const [showCopiedMessage, setShowCopiedMessage] = useState(false)

    const copyEmail = () => {
        navigator.clipboard.writeText("kalzamorazav@gmail.com")
        setShowCopiedMessage(true)
        setTimeout(() => setShowCopiedMessage(false), 2000)
    }
    return (
        <section id="inicio" className="text-center">
            <motion.div
            initial={{
            opacity: 0,
            y: 20,
            }}
            animate={{
            opacity: 1,
            y: [20, -5, 0],
            }}
            transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
            }}
            className="flex flex-col items-center px-4 max-w-4xl md:space-x-6 gap-6 h-screen justify-center"
        >
            <div className="flex flex-col-reverse md:flex-row items-center md:space-x-6 gap-6 justify-center">
            {/* Texto principal */}
            <div className="text-center md:text-left">
                <h1 className="text-2xl md:text-3xl font-bold text-neutral-700 dark:text-white leading-relaxed lg:leading-snug">
                ¡Hola! <br />
                <Highlight className="text-black dark:text-white">Soy Katherine Alzamora.</Highlight>
                <br />
                Soy una desarrolladora Front-End creativa independiente de Buenos Aires, Argentina.
                </h1>

                {/* Iconos de redes sociales */}
                <div className="flex justify-center md:justify-start space-x-4 mt-4">
                <FaLinkedin  className="w-8 h-8 hover:animate-shake cursor-pointer text-blue-500" />
                <FaSquareGithub className="w-8 h-8 hover:animate-shake cursor-pointer" />
                <motion.button
                    className="w-8 h-8 hover:animate-shake cursor-pointer"
                    onClick={copyEmail}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <BiLogoGmail className="h-full w-full text-red-500"/>
                </motion.button>

                <AnimatePresence>
                {showCopiedMessage && (
                    <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-green-500 text-sm mt-2 text-center md:text-left bg-white rounded-lg"
                    >
                    Email copiado al portapapeles
                    </motion.p>
                )}
                </AnimatePresence>
                </div>
            </div>

            {/* Imagen responsive */}
            <div className="w-48 h-48 md:w-[35%] md:h-auto flex-shrink-0">
                <img
                src="/images/foto.jpg"
                alt="Katherine Alzamora"
                className="rounded-lg object-cover w-full h-full transition-shadow duration-300 ease-in-out shadow-[8px_8px_11px_#949494] hover:shadow-[8px_8px_11px_rgba(165,71,247,0.7)]"
                />
            </div>
            </div>
            <div className="w-full flex items-end justify-center">
            <FaCaretDown className='h-8 w-8 mt-12' />
            </div>
            </motion.div>
        </section>
    )
}


