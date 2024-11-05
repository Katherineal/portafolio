import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function ExperienceEducation() {
  const data = [
    {
      title: "Experiencia Laboral",
      content: (
        <div>
          <h3 className="text-lg font-semibold mb-2">Desarrollador de Software Trainee | Sellfy</h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            Julio 2024 - Presente
          </p>
          <ul className="list-disc ml-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <li>Creación de nuevas funcionalidades y optimización del código existente para mejorar el rendimiento de las aplicaciones.</li>
            <li>Diseño y realización de pantallas.</li>
            <li>Diseño y desarrollo web personalizado, creando sitios web a medida adaptados a las necesidades específicas de cada cliente.</li>
            <li>Desarrollo de la identidad visual de la empresa, incluyendo logotipos, selección de tipografías y esquemas de color.</li>
            <li>Mejora del rendimiento y la velocidad de los sitios web existentes, asegurando una experiencia de usuario fluida y rápida.</li>
            <li>Actualización y mantenimiento de sitios web, corrección de errores y soporte técnico continuo para garantizar el funcionamiento óptimo.</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Desarrollador Web Freelancer | Freelance</h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            Enero 2024 - Presente
          </p>
          <ul className="list-disc ml-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <li>Realización de tareas bancarias y administrativas.</li>
            <li>Organización y trabajo en equipo para manejar documentación y coordinar con proveedores, correos y oficinas.</li>
            <li>Experiencia en la gestión eficiente de tareas administrativas diarias.</li>
          </ul>

          <h3 className="text-lg font-semibold mb-2">Cadete Administrativo | Juan Pablo Damonte y Asoc SA</h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            Enero 2023 – Mayo 2024
          </p>
          <ul className="list-disc ml-5 text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            <li>Realización de tareas administrativas y bancarias.</li>
            <li>Coordinación con proveedores y manejo de documentación.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Formación Académica",
      content: (
        <div>
          <h3 className="text-lg font-semibold mb-2">Grado en Licenciatura en Gestión de Tecnología de la Información | Universidad Argentina de la Empresa (UADE)</h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            Agosto 2023 – Actualidad
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            Habilidades en React, HTML, CSS, JavaScript, SQL, Python, Django.
          </p>

          <h3 className="text-lg font-semibold mb-2">Certificación Full Stack Developer | Instituto Tecnológico de Buenos Aires (ITBA)</h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            Agosto 2023 - Diciembre 2023
          </p>

          <h3 className="text-lg font-semibold mb-2">Grado en Ingeniería en Sistemas | Universidad Tecnológica Nacional (UTN)</h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            Febrero 2022 - Agosto 2023
          </p>

          <h3 className="text-lg font-semibold mb-2">Bachiller con Especialización en Economía y Administración de Empresas Públicas | Colegio Secundario</h3>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            Marzo 2016 - Diciembre 2021
          </p>
        </div>
      ),
    },
  ];

  return (
    <Timeline data={data} />
  );
}
