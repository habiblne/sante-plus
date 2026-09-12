import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Brand */}
          <div className="flex items-center gap-1.5 text-xl font-bold text-white tracking-tight">
            <span>Santé Plus</span>
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-500"></span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm" aria-label="Liens de bas de page">
            <a href="#specialites" className="hover:text-white transition-colors">
              Spécialités
            </a>
            <a href="#a-propos" className="hover:text-white transition-colors">
              À propos
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          {/* Portfolio Credit */}
          <div className="text-sm text-slate-400 font-medium">
            Site conçu par <span className="text-blue-400 font-semibold">DZWEB</span>.
          </div>

        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
          <p>© 2026 Cabinet Médical Santé Plus.</p>
          <p>
            Site fictif réalisé à des fins de démonstration pour portfolio professionnel.
          </p>
        </div>
      </div>
    </footer>
  );
}

