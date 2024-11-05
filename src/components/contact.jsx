"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Send, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactSection() {
  const [copied, setCopied] = useState(false)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const email = "kalzamorazav@gmail.com"

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 1000))
    setSending(false)
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <div id="contacto" className="flex items-center justify-center max-w-4xl w-full p-4">
      <Card className="w-full bg-white dark:bg-[#212121] border-gray-200 dark:border-gray-700 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-800 dark:text-white">
            <Mail className="h-6 w-6" />
            <span>Contacto</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Formulario de contacto */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Tu nombre"
                className="bg-gray-100 dark:bg-gray-700/30 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                required
              />
            </div>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Tu email"
                className="bg-gray-100 dark:bg-gray-700/30 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                required
              />
            </div>
            <div className="space-y-2">
              <Textarea
                placeholder="Tu mensaje"
                className="bg-gray-100 dark:bg-gray-700/30 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 min-h-[100px]"
                required
              />
            </div>
            <Button
              type="submit"
              disabled={sending}
              className="w-full bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500 hover:opacity-90 transition-opacity text-white"
            >
              <AnimatePresence mode="wait">
                {sending ? (
                  <motion.span
                    key="sending"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Enviando...
                  </motion.span>
                ) : sent ? (
                  <motion.span
                    key="sent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Check className="h-4 w-4" />
                    ¡Enviado!
                  </motion.span>
                ) : (
                  <motion.span
                    key="send"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    Enviar mensaje
                  </motion.span>
                )}
              </AnimatePresence>
            </Button>
          </form>

          {/* Separador */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white dark:bg-gray-800 px-2 text-gray-500 dark:text-gray-400">O</span>
            </div>
          </div>

          {/* Copiar email */}
          <div className="bg-gray-100 dark:bg-gray-700/30 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-gray-800 dark:text-gray-300">{email}</span>
              <Button
                onClick={copyEmail}
                variant="ghost"
                size="icon"
                className="hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="text-green-500"
                    >
                      <Check className="h-4 w-4" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="text-gray-400"
                    >
                      <Copy className="h-4 w-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </div>
            <AnimatePresence>
              {copied && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-green-500 text-sm mt-2"
                >
                  ¡Email copiado al portapapeles!
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
