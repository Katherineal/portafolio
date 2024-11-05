"use client"
import Image from "next/image";
import { CardPin3d } from "./cardPin3d";
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from "lucide-react";
import { PinContainer } from "@/components/ui/3d-pin";

export function Proyects() {
    const projects = [
        { 
            name: 'E-commerce App', 
            description: 'Una aplicación web de comercio electrónico con carrito de compras y pasarela de pago.',
            link: 'https://ecommerce-app.example.com',
            image: '/placeholder.svg?height=200&width=300',
            roles: ['Frontend', 'Backend']
        },
        { 
            name: 'Dashboard Analytics', 
            description: 'Un dashboard interactivo para visualización de datos y análisis de métricas clave.',
            link: 'https://dashboard.example.com',
            image: '/placeholder.svg?height=200&width=300',
            roles: ['Frontend', 'Data']
        },
        { 
            name: 'Social Network', 
            description: 'Una red social para desarrolladores con funciones de perfil, posts y mensajería.',
            link: 'https://devnetwork.example.com',
            image: '/placeholder.svg?height=200&width=300',
            roles: ['Frontend', 'Backend']
        },
    ]
    const [activeFilter, setActiveFilter] = useState('All')
    const filters = ['All', 'Frontend', 'Backend', 'Data']

    const filteredProjects = activeFilter === 'All' 
        ? projects 
        : projects.filter(project => project.roles.includes(activeFilter))
    return (
        <section id="proyectos" className="py-20">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-8 text-center"
            >
                Mis Proyectos
            </motion.h2>
            <div className="flex justify-center mb-8">
                {filters.map(filter => (
                <motion.button
                    key={filter}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveFilter(filter)}
                    className={`mx-2 px-4 py-2 rounded-full ${
                    activeFilter === filter
                        ? 'bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500 text-white'
                        : 'bg-gray-200 dark:bg-[#212121] text-gray-800 dark:text-white'
                    }`}
                >
                    {filter}
                </motion.button>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl px-4 rounded-lg">
                {filteredProjects.map((project, index) => (
                <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-[#212121] rounded-lg shadow-lg"
                >
                    <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded-lg" />
                    <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-row justify-between md:flex-col md:justify-start md:items-start items-center gap-2">
                        <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-indigo-500 dark:text-purple-300 hover:underline"
                        >
                        Ver proyecto <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                        <div className="flex space-x-2">
                        {project.roles.map(role => (
                            <span key={role} className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">
                            {role}
                            </span>
                        ))}
                        </div>
                    </div>
                    </div>
                </motion.div>
                ))}
            </div>
            </section>
    );
}
