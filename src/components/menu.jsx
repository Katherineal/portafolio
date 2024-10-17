"use client"
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ResponsiveMenu() {
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

    const menuItems = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

    return (
      <nav className={`fixed top-0 left-0 w-full z-50 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-2xl font-cursive font-extrabold text-purple-400">KA</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {menuItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="hover:bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Resume Button and Dark Mode Toggle */}
            <div className="hidden md:flex items-center">
              <button className={`hover:bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500 text-purple-400 hover:text-white border border-gray-300 dark:border-gray-500 font-bold py-2 px-4 rounded-lg ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
                Resume
              </button>
              <button onClick={toggleDarkMode} className="ml-4 p-2">
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300 dark:focus:ring-gray-500"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={`md:hidden mx-6 rounded-lg ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                <button className={`hover:bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500 text-purple-400 hover:text-white border border-gray-300 dark:border-gray-500 font-bold py-2 px-4 rounded-lg w-full ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
                  Resume
                </button>
              </div>
              <div className="mt-3 px-2">
                <button
                  onClick={toggleDarkMode}
                  className="flex items-center px-3 py-2 rounded-lg text-base font-medium hover:text-purple-400 w-full"
                >
                  {isDarkMode ? (
                    <>
                      <Sun className="h-5 w-5 mr-2" /> Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="h-5 w-5 mr-2" /> Dark Mode
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
