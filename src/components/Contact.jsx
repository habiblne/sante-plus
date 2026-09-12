import React from 'react';
import { MapPin, Phone, Clock, Calendar, Navigation, Compass } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Contact({ onOpenAppointment }) {
  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/60 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-3">
            Localisation & Accès
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Rendez-nous visite
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Un accès pratique au cœur de Birkhadem, avec stationnement à proximité.
          </p>
        </ScrollReveal>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Premium Map Placeholder */}
          <div className="lg:col-span-6 flex flex-col">
            <ScrollReveal delay={0} className="h-full flex flex-col">
              <div className="relative flex-1 min-h-[380px] sm:min-h-[440px] rounded-3xl overflow-hidden border border-slate-200/90 shadow-md bg-slate-100 flex flex-col justify-between p-6 h-full">
                
                {/* Stylized Map Grid Graphic */}
                <div className="absolute inset-0 bg-[#eef3f8]">
                  {/* SVG vector stylized cartography of Algiers Bay and road arteries */}
                  <svg className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <defs>
                      <pattern id="mapGridEnhanced" width="36" height="36" patternUnits="userSpaceOnUse">
                        <path d="M 36 0 L 0 0 0 36" fill="none" stroke="#dbeafe" strokeWidth="1" />
                      </pattern>
                    </defs>
                    
                    {/* Background grid */}
                    <rect width="100%" height="100%" fill="url(#mapGridEnhanced)" />
                    
                    {/* Mediterranean Coastline / Bay of Algiers */}
                    <path
                      d="M 0 70 Q 180 130 360 85 T 700 45 L 700 0 L 0 0 Z"
                      fill="#bfdbfe"
                      opacity="0.5"
                    />
                    <text x="24" y="45" fill="#1d4ed8" fontSize="12" fontWeight="600" opacity="0.75" letterSpacing="2">
                      MER MÉDITERRANÉE • BAIE D'ALGER
                    </text>
                    
                    {/* Major Highway Arteries */}
                    {/* Rocade Sud */}
                    <path d="M -20 200 Q 220 170 420 270 T 750 330" fill="none" stroke="#cbd5e1" strokeWidth="10" />
                    <path d="M -20 200 Q 220 170 420 270 T 750 330" fill="none" stroke="#ffffff" strokeWidth="4" />
                    
                    {/* Route Nationale 1 (RN1) */}
                    <path d="M 260 -20 Q 275 190 290 480" fill="none" stroke="#cbd5e1" strokeWidth="10" />
                    <path d="M 260 -20 Q 275 190 290 480" fill="none" stroke="#ffffff" strokeWidth="4" />
                    
                    {/* Secondary Connecting Roads */}
                    <path d="M 60 360 L 500 130" fill="none" stroke="#93c5fd" strokeWidth="3" strokeDasharray="6 4" />
                    <path d="M 140 110 Q 280 220 450 400" fill="none" stroke="#e2e8f0" strokeWidth="5" />
                    <path d="M 180 300 Q 320 250 480 320" fill="none" stroke="#e2e8f0" strokeWidth="4" />
                  </svg>
                </div>

                {/* Top Map Location Badge */}
                <div className="relative z-10 flex items-center justify-between w-full">
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md shadow-sm border border-slate-200 text-xs font-bold text-slate-800">
                    <Navigation className="w-4 h-4 text-blue-600" aria-hidden="true" />
                    <span>Alger, Algérie</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 backdrop-blur-md text-[11px] font-medium text-slate-200 shadow-sm">
                    <Compass className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />
                    <span>36° 43' N, 3° 03' E</span>
                  </div>
                </div>

                {/* Center Map Marker Pin */}
                <div className="relative z-10 self-center my-auto flex flex-col items-center">
                  <div className="relative flex items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-14 w-14 rounded-full bg-blue-500 opacity-30"></span>
                    <div className="w-12 h-12 rounded-full bg-blue-600 shadow-2xl flex items-center justify-center text-white border-2 border-white ring-4 ring-blue-600/30">
                      <MapPin className="w-6 h-6" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="mt-2.5 px-3.5 py-1.5 rounded-xl bg-slate-900/95 backdrop-blur-md text-white text-xs font-bold shadow-lg border border-slate-700/60 text-center">
                    <span>Cabinet Médical Santé Plus</span>
                    <span className="block text-[10px] font-normal text-blue-300">Birkhadem, Alger</span>
                  </div>
                </div>

                {/* Bottom Map Info Footer */}
                <div className="relative z-10">
                  <div className="p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-xs text-slate-700 flex items-center justify-between shadow-sm">
                    <span className="font-semibold text-slate-900">Quartier Birkhadem</span>
                    <span className="text-slate-500">Accès direct Rocade Sud & RN1</span>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Practical Details */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <ScrollReveal delay={100} className="space-y-6">
              <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-6">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Adresse</h3>
                    <p className="text-lg font-bold text-slate-900 mt-0.5">
                      Birkhadem, Alger, Algérie
                    </p>
                    <p className="text-sm text-slate-500 mt-0.5">
                      Accès facile via les axes autoroutiers et transports en commun.
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-100" />

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Téléphone</h3>
                    <a
                      href="tel:+213557000000"
                      className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors mt-0.5 block"
                    >
                      +213 557 00 00 00
                    </a>
                    <p className="text-sm text-slate-500 mt-0.5">
                      Accueil téléphonique durant les heures d'ouverture.
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-100" />

                {/* Opening Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Horaires d'ouverture</h3>
                    <p className="text-lg font-bold text-slate-900 mt-0.5">
                      Dimanche – Jeudi
                    </p>
                    <p className="text-base font-semibold text-blue-700 mt-0.5">
                      08:00 – 18:00
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Fermé les vendredis et samedis.
                    </p>
                  </div>
                </div>

              </div>

              {/* Direct CTA card */}
              <div className="p-6 rounded-3xl bg-blue-50/80 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900">Planifiez votre consultation</h3>
                  <p className="text-sm text-slate-600 mt-0.5">Évitez l'attente en réservant votre créneau.</p>
                </div>
                <button
                  type="button"
                  onClick={onOpenAppointment}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-sm transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <span>Prendre un rendez-vous</span>
                </button>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
