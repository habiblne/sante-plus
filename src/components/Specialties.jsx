import React from 'react';
import { HeartPulse, Baby, Stethoscope, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Specialties({ onSelectSpecialty }) {
  const specialties = [
    {
      id: 'cardiologie',
      title: 'Cardiologie',
      description: 'Suivi cardiovasculaire et prévention.',
      detail: 'Évaluation des facteurs de risque, bilans de santé cardiaque et conseils préventifs pour préserver votre système cardiovasculaire.',
      icon: HeartPulse,
    },
    {
      id: 'pediatrie',
      title: 'Pédiatrie',
      description: 'Accompagnement médical dédié aux enfants.',
      detail: 'Suivi attentif de la croissance, consultations de routine et accompagnement bienveillant des nouveau-nés jusqu’à l’adolescence.',
      icon: Baby,
    },
    {
      id: 'medecine-generale',
      title: 'Médecine Générale',
      description: 'Consultations et suivi médical général.',
      detail: 'Diagnostics, bilans de santé périodiques, orientations spécialisées et prise en charge des affections aiguës ou chroniques.',
      icon: Stethoscope,
    },
  ];

  return (
    <section id="specialites" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/60 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-3">
            Expertise Médicale
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Nos Spécialités
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Une prise en charge adaptée à vos besoins.
          </p>
        </ScrollReveal>

        {/* 3 Specialty Cards with staggered reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.id} delay={idx * 100} className="h-full">
                <div className="flex flex-col justify-between p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-300 transition-all duration-300 group h-full">
                  <div>
                    {/* Icon Container */}
                    <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                      <Icon className="w-7 h-7" aria-hidden="true" />
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm font-semibold text-blue-700/90 mb-3">
                      {item.description}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>

                  {/* Card Action */}
                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => onSelectSpecialty(item.title)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded cursor-pointer"
                    >
                      <span>Prendre rendez-vous</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
