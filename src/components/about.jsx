"use client";
import { motion } from "framer-motion";
import React from "react";

export default function About() {
    return (
        <section id="sobre-mí" className="text-center">
            <motion.section 
            initial="block"
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } }
            }}
            className="w-full overflow-hidden gap-6 max-w-4xl px-4 space-y-4 "
            >
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <motion.div
                    className="w-48 h-auto md:w-[35%] md:h-auto flex-shrink-0"
                    variants={{
                        hidden: { opacity: 0, x: 100 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    >
                    <img
                        src="/images/foto.jpg"
                        alt="Katherine Alzamora"
                        className="rounded-lg object-cover w-full h-full "
                    />
                    </motion.div>
                    {}
                    <motion.div
                    className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left "
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 }
                    }}
                    >
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-700 dark:text-white bg-clip-text mb-4">
                        Sobre mí
                    </h2>
                    <p className="text-black mb-6 text-base font-medium dark:text-white">
                    Descubrí la programación en 2021, cuando realicé un curso de introducción a la programación, y desde ese momento me apasioné por el desarrollo Front-End. A pesar de haber completado varios cursos de Full Stack, me siento más inclinada hacia el Front-End, y en el futuro me gustaría profundizar en el área de UX/UI.
                    <br/>
                    Me esfuerzo por seguir capacitándome de manera constante, ya que soy una persona que disfruta aprender, tanto en el ámbito de la programación como en la vida cotidiana. Me considero una persona creativa, con gran capacidad para trabajar en equipo gracias a la experiencia adquirida en diversos proyectos. Siempre busco tomar la iniciativa y encaro cada desafío con entusiasmo.
                    </p>

                    </motion.div>
                </div>
            </motion.section>
        </section>
    )
}


