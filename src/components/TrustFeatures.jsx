import React from 'react';
import { HeartHandshake, ClipboardList, CalendarCheck, ShieldCheck } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function TrustFeatures() {
  const features = [
    {
      title: 'Écoute & accompagnement',
      description: 'Une attention bienveillante pour comprendre vos besoins et répondre à vos interrogations.',
      icon: HeartHandshake,
    },
    {
      title: 'Consultation personnalisée',
      description: 'Un suivi approfondi et des recommandations adaptées au profil de chaque patient.',
      icon: ClipboardList,
    },
    {
      title: 'Prise de rendez-vous simple',
      description: 'Une organisation fluide pour planifier votre visite en toute sérénité.',
      icon: CalendarCheck,
    },
    {
      title: 'Approche professionnelle',
      description: 'La rigueur clinique et le respect des normes médicales au cœur de notre pratique.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 90} className="h-full">
                <div className="group p-6 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/70 hover:border-blue-200 transition-all duration-200 hover:shadow-md h-full">
                  <div className="w-12 h-12 rounded-xl bg-blue-100/70 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h2 className="text-base font-bold text-slate-900 mb-1.5">
                    {feature.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
