"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import Image from "next/image";
import ResponsiveMenu from "@/components/menu";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <ResponsiveMenu />
      <HeroHighlight>
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
        className="flex flex-col-reverse md:flex-row items-center px-4 pt-16 max-w-4xl space-y-4 md:space-y-0 md:space-x-6 gap-6"
      >
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold text-neutral-700 dark:text-white leading-relaxed lg:leading-snug">
            ¡Hola! <br />
            <Highlight className="text-black dark:text-white">
              Soy Katherine Alzamora.
            </Highlight>
            <br />
            Soy una desarrolladora Front-End creativa independiente de Buenos Aires, Argentina.
          </h1>
        </div>

        {/* Imagen responsive */}
        <div className="w-48 h-48 md:w-[35%] md:h-auto flex-shrink-0">
          <img
            src="/images/foto.jpg"
            alt="Katherine Alzamora"
            className="rounded-lg object-cover w-full h-full transition-shadow duration-300 ease-in-out shadow-[8px_8px_11px_#949494] hover:shadow-[8px_8px_11px_rgba(165,71,247,0.7)]"
          />
        </div>
      </motion.div>
      <section className="px-4 py-16">
        <h2>hola</h2>
      </section>
      </HeroHighlight>
    </div>
  );
}

