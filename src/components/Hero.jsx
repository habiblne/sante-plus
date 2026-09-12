import React from 'react';
import { ArrowRight, CheckCircle2, Calendar, Clock, Stethoscope, MapPin } from 'lucide-react';

export default function Hero({ onOpenAppointment }) {
  const trustPoints = [
    'Consultations sur rendez-vous',
    'Équipe médicale qualifiée',
    'Accueil chaleureux',
  ];

  return (
    <section id="accueil" className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-white">
      {/* Subtle background ambient mesh */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-slate-100/60 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 text-blue-800 text-xs sm:text-sm font-medium">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
              </span>
              <span>Cabinet Médical de Référence à Alger</span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Votre Santé,<br />
              <span className="text-blue-600">Notre Priorité.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl font-normal">
              Des soins médicaux de qualité, une équipe à votre écoute et un accompagnement personnalisé.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={onOpenAppointment}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 cursor-pointer"
              >
                <span>Prendre un Rendez-vous</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <a
                href="#specialites"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-slate-700 bg-white hover:bg-slate-50 active:bg-slate-100 border border-slate-200 rounded-xl transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                Découvrir nos spécialités
              </a>
            </div>

            {/* Small Trust Indicators */}
            <div className="pt-4 border-t border-slate-100">
              <ul className="flex flex-wrap items-center gap-y-2 gap-x-6">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column: Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Card with soft border and elevation */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-slate-200/90 bg-slate-100">
                <img
                  src="/hero-doctor.jpg"
                  alt="Médecin en consultation au Cabinet Médical Santé Plus"
                  className="w-full h-[400px] sm:h-[460px] object-cover object-top"
                  loading="eager"
                />
                
                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating pill: Status inside image top */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-xs font-semibold text-slate-800 shadow-sm border border-white/60">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Cabinet ouvert</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md text-xs font-medium text-white shadow-sm">
                    <Clock className="w-3.5 h-3.5 text-blue-300" aria-hidden="true" />
                    <span>08:00 – 18:00</span>
                  </div>
                </div>

                {/* Bottom-right inside image caption covering any uniform embroidery */}
                <div className="absolute bottom-8 right-4 sm:right-6 pointer-events-none">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 backdrop-blur-md text-xs font-semibold text-white border border-white/20 shadow-xl">
                    <Stethoscope className="w-4 h-4 text-blue-400" aria-hidden="true" />
                    <span>Consultations & Soins</span>
                  </div>
                </div>
              </div>

              {/* Layered Floating Card: Schedule Badge (Bottom Left) */}
              <div className="hidden sm:block absolute -bottom-5 -left-5 bg-white p-4 rounded-2xl shadow-xl border border-slate-200/90 max-w-[240px] z-10">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 flex-shrink-0">
                    <Calendar className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider">Rendez-vous</p>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">Créneaux disponibles</p>
                    <p className="text-xs text-slate-500 mt-0.5">Dimanche à Jeudi</p>
                  </div>
                </div>
              </div>

              {/* Top Right Floating Pill (Algiers badge) */}
              <div className="hidden sm:inline-flex items-center gap-1.5 absolute -top-3 -right-3 z-10 px-3 py-1.5 rounded-full bg-white shadow-md border border-slate-200 text-xs font-semibold text-slate-800">
                <MapPin className="w-3.5 h-3.5 text-blue-600" aria-hidden="true" />
                <span>Birkhadem, Alger</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
