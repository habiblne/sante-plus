import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export default function AppointmentCTA({ onOpenAppointment }) {
  return (
    <section className="py-16 md:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-5 border border-blue-400/20">
          <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Prise de rendez-vous</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Besoin d'une consultation ?
        </h2>

        <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Prenez rendez-vous simplement et choisissez le moment qui vous convient.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            type="button"
            onClick={onOpenAppointment}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-slate-900 bg-white hover:bg-slate-100 active:bg-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 cursor-pointer"
          >
            <span>Prendre un rendez-vous</span>
            <ArrowRight className="w-4 h-4 text-blue-600" aria-hidden="true" />
          </button>
        </div>

        <p className="mt-4 text-xs text-slate-400">
          Consultations organisées sur rendez-vous pour limiter l'attente en salle.
        </p>
      </div>
    </section>
  );
}

