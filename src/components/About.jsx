import React from 'react';
import { Heart, Sparkles, UserCheck, ShieldCheck } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function About() {
  const values = [
    {
      title: 'Écoute attentive',
      description: 'Chaque patient est accueilli avec bienveillance pour exprimer ses symptômes sans précipitation.',
      icon: Heart,
    },
    {
      title: 'Soins personnalisés',
      description: 'Une prise en charge sur mesure, adaptée au rythme de vie et aux antécédents de chacun.',
      icon: UserCheck,
    },
    {
      title: 'Consultation rigoureuse',
      description: 'Des examens cliniques méticuleux dans le respect absolu des recommandations médicales.',
      icon: ShieldCheck,
    },
    {
      title: 'Confort & sérénité',
      description: 'Un environnement calme, propre et apaisant pensé pour le bien-être de toute la famille.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="a-propos" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Storytelling */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <ScrollReveal delay={0}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Image Frame */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-100">
                  <img
                    src="/clinic-interior.jpg"
                    alt="Espace d'accueil et de consultation au Cabinet Médical Santé Plus"
                    className="w-full h-[380px] sm:h-[460px] object-cover"
                    loading="lazy"
                  />
                  
                  {/* Subtle gradient treatment */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                  {/* Overlaid Badge */}
                  <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                    <div className="p-4 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/20 shadow-lg">
                      <p className="text-xs font-semibold uppercase tracking-wider text-blue-300">Notre Engagement</p>
                      <p className="text-base font-medium text-white mt-1">
                        Une relation de confiance durable au service de votre santé.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative accent frame behind */}
                <div className="hidden sm:block absolute -top-4 -right-4 w-full h-full rounded-2xl border-2 border-blue-100 -z-10" />

              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <ScrollReveal delay={80}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/60 text-blue-700 text-xs font-semibold tracking-wide uppercase">
                Notre Philosophie
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mt-3">
                Une médecine centrée sur l'humain.
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-4">
                Au Cabinet Médical Santé Plus, nous croyons que la qualité des soins repose avant tout sur la relation entre le praticien et son patient. Nous mettons un point d'honneur à offrir un cadre chaleureux et une démarche clinique exigeante pour accompagner chacun vers un meilleur bien-être.
              </p>
            </ScrollReveal>

            {/* Core Values Grid with staggered delays */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {values.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <ScrollReveal key={idx} delay={140 + idx * 80}>
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 flex-shrink-0 mt-0.5">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900">
                          {val.title}
                        </h3>
                        <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                          {val.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
