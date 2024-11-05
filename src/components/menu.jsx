"use client";
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function MenuResponsivo() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const menuItems = ['Sobre mí', 'Habilidades', 'Experiencia', 'Proyectos', 'Contacto'];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 opacity-[1] ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
      <div className="px-4 sm:px-6 lg:px-8 backdrop-blur-sm">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-cursive font-extrabold text-purple-400">KA</span>
          </div>

          {/* Menú de Escritorio */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="group relative overflow-hidden px-3 py-2 rounded-md text-sm font-medium transition-transform transform hover:scale-105 hover:shadow-lg"
                >
                  <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-white">
                    {item}
                  </span>
                  <span className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Botón de Currículum y Cambio de Modo Oscuro */}
          <div className="hidden md:flex items-center">
            <a
              href="/45927030-KatherineAlzamora.pdf"
              download="Katherine_Alzamora_CV.pdf"
              className={`transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500 text-purple-400 hover:text-white border border-gray-300 dark:border-gray-500 font-bold py-2 px-4 rounded-lg ${isDarkMode ? 'bg-[#212121]' : 'bg-white'}`}
            >
              Currículum
            </a>
            <button onClick={toggleDarkMode} className="ml-4 p-2">
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          {/* Botón de menú móvil */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300 dark:focus:ring-gray-500"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil */}
      {isOpen && (
        <div className={`md:hidden mx-4 rounded-lg border ${isDarkMode ? 'bg-[#212121] border-gray-700 text-white' : 'bg-white text-gray-900 border-gray-200'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="group relative overflow-hidden block px-3 py-2 rounded-md text-base font-medium"
                onClick={toggleMenu}
              >
                <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-white">
                  {item}
                </span>
                <span className="absolute inset-0 z-0 bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></span>
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center justify-center px-5">
              <a
                href="/45927030-KatherineAlzamora.pdf"
                download="Katherine_Alzamora_CV.pdf"
                className={`transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500 text-purple-400 hover:text-white border border-gray-300 dark:border-gray-500 font-bold py-2 px-4 rounded-lg w-full ${isDarkMode ? 'bg-[#212121]' : 'bg-white'}`}
              >
                Currículum
              </a>
            </div>
            <div className="mt-3 px-2">
              <button
                onClick={toggleDarkMode}
                className="flex items-center px-3 py-2 rounded-lg text-base font-medium hover:text-purple-400 w-full"
              >
                {isDarkMode ? (
                  <>
                    <Sun className="h-5 w-5 mr-2" /> Modo Claro
                  </>
                ) : (
                  <>
                    <Moon className="h-5 w-5 mr-2" /> Modo Oscuro
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
