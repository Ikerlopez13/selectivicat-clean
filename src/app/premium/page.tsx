'use client';

import NavbarMain from '@/components/NavbarMain';
import FooterMain from '@/components/FooterMain';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function PremiumPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarMain />
      
      {/* Hero Section */}
      <main className="flex-grow pt-16">
        <div className="bg-gradient-to-b from-selectivi-yellow/20 to-white">
          <div className="container mx-auto px-4 py-16 max-w-6xl">
            <div className="text-center mb-12">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                Desbloqueja tot el potencial de SelectiviCAT
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                Accedeix a totes les preguntes i recursos per triomfar a la Selectivitat
              </motion.p>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Free Plan */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <h3 className="text-2xl font-bold mb-4">Pla Standard</h3>
                <p className="text-gray-600 mb-6">Perfecte per començar a practicar</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold">€0</span>
                  <span className="text-gray-500">/per sempre</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    10 preguntes aleatòries per dia
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Accés a la calculadora de notes
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Consulta de notes de tall
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Accés il·limitat a preguntes
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Estadístiques detallades
                  </li>
                  <li className="flex items-center text-gray-400">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Mode pràctica per temes
                  </li>
                </ul>
                <button className="w-full px-6 py-3 text-gray-600 border border-gray-300 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                  Pla actual
                </button>
              </motion.div>

              {/* Premium Plan */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-xl border-2 border-selectivi-yellow relative"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-selectivi-yellow text-black px-4 py-1 rounded-full text-sm font-medium">Recomanat</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Pla Premium</h3>
                <p className="text-gray-600 mb-6">Tot el que necessites per a la Selectivitat</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold">€14.99</span>
                  <span className="text-gray-500">/pago único</span>
                  <div className="mt-2 inline-flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Accés permanent, sense subscripció
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">Accés il·limitat a totes les preguntes</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Mode pràctica per temes específics
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Estadístiques detallades del teu progrés
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Accés prioritari a nous continguts
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Suport premium
                  </li>
                </ul>
                <button 
                  className="w-full group bg-selectivi-yellow/50 text-black/70 px-6 py-4 rounded-xl font-bold text-lg cursor-not-allowed relative overflow-hidden"
                  disabled
                >
                  <span className="relative z-10 flex flex-col items-center justify-center gap-1">
                    <span className="text-sm font-normal">Pròximament</span>
                    <span className="flex items-center gap-2">
                      Començar ara
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </span>
                </button>
              </motion.div>
            </div>

            {/* Features Section */}
            <div className="mt-24">
              <h2 className="text-3xl font-bold text-center mb-12">Per què fer-te Premium?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <div className="w-12 h-12 bg-selectivi-yellow/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-selectivi-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Més Pràctica</h3>
                  <p className="text-gray-600">Accedeix a totes les preguntes sense límits per practicar tant com vulguis.</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <div className="w-12 h-12 bg-selectivi-yellow/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-selectivi-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Seguiment Detallat</h3>
                  <p className="text-gray-600">Analitza el teu progrés amb estadístiques detallades i identifica àrees de millora.</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <div className="w-12 h-12 bg-selectivi-yellow/20 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-selectivi-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Millors Resultats</h3>
                  <p className="text-gray-600">Prepara't millor amb accés complet a tots els recursos i augmenta les teves possibilitats d'èxit.</p>
                </motion.div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-24">
              <h2 className="text-3xl font-bold text-center mb-12">Preguntes Freqüents</h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <h3 className="text-lg font-bold mb-2">Què inclou el pla Premium?</h3>
                  <p className="text-gray-600">El pla Premium inclou accés il·limitat a totes les preguntes, mode pràctica per temes, estadístiques detallades, calculadora avançada i suport prioritari.</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <h3 className="text-lg font-bold mb-2">Durant quant temps tinc accés?</h3>
                  <p className="text-gray-600">
                    Un sol pagament de 14.99€, i és teu per sempre! No és una subscripció - pagues una vegada i tens accés il·limitat 
                    a tots els continguts premium sense càrrecs addicionals ni renovacions.
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <h3 className="text-lg font-bold mb-2">Com puc pagar?</h3>
                  <p className="text-gray-600">Acceptem pagaments amb targeta de crèdit/dèbit a través de Stripe, que ofereix una plataforma segura i encriptada.</p>
                </motion.div>
              </div>
            </div>

            {/* Final CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-24 text-center"
            >
              <h2 className="text-3xl font-bold mb-6">Preparat per començar?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Uneix-te a milers d'estudiants que ja confien en SelectiviCAT Premium. 
                <span className="block mt-2 font-medium">Un sol pagament. Accés permanent. Sense sorpreses.</span>
              </p>
              <button 
                className="bg-selectivi-yellow/50 text-black/70 px-8 py-4 rounded-xl font-bold text-lg cursor-not-allowed relative"
                disabled
              >
                <span className="flex flex-col items-center gap-1">
                  <span className="text-sm font-normal">Pròximament</span>
                  <span>Començar ara per només 14.99€</span>
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </main>

      <FooterMain />
    </div>
  );
} 