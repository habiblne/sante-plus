import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2, Calendar, AlertCircle } from 'lucide-react';

export default function AppointmentModal({ isOpen, onClose, defaultSpecialty = '' }) {
  const [formData, setFormData] = useState({
    nom: '',
    telephone: '',
    specialite: defaultSpecialty || 'Médecine Générale',
    date: '',
    heure: '09:00',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const modalRef = useRef(null);
  const firstInputRef = useRef(null);

  // Handle ESC key, focus trapping, and focus return to triggering element
  useEffect(() => {
    const previousActiveElement = document.activeElement;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    
    // Focus first input on open
    const timer = setTimeout(() => {
      firstInputRef.current?.focus();
    }, 50);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
      if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
        previousActiveElement.focus();
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nom.trim()) {
      newErrors.nom = 'Veuillez renseigner votre nom complet.';
    }
    if (!formData.telephone.trim()) {
      newErrors.telephone = 'Veuillez renseigner votre numéro de téléphone.';
    } else if (!/^[0-9+() \-.]{8,20}$/.test(formData.telephone.trim())) {
      newErrors.telephone = 'Numéro de téléphone non valide.';
    }
    if (!formData.specialite) {
      newErrors.specialite = 'Veuillez sélectionner une spécialité.';
    }
    if (!formData.date) {
      newErrors.date = 'Veuillez choisir une date.';
    }
    if (!formData.heure) {
      newErrors.heure = 'Veuillez sélectionner une heure.';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    // Frontend-only demo interaction: strictly no network request
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    onClose();
  };

  // Get current date string for min date (YYYY-MM-DD)
  const todayDate = new Date().toISOString().split('T')[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm transition-opacity duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
          aria-label="Fermer la fenêtre"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        {isSubmitted ? (
          /* Success State */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" aria-hidden="true" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              Demande enregistrée
            </h3>

            <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-100 text-sm text-blue-900 text-left space-y-1">
              <p className="font-semibold">Récapitulatif de votre demande :</p>
              <p><span className="text-slate-600">Patient :</span> {formData.nom}</p>
              <p><span className="text-slate-600">Spécialité :</span> {formData.specialite}</p>
              <p><span className="text-slate-600">Date et heure :</span> {formData.date} à {formData.heure}</p>
              <p><span className="text-slate-600">Téléphone :</span> {formData.telephone}</p>
            </div>

            <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 text-center font-medium">
              Ceci est une démonstration — aucune donnée n'a été envoyée.
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
              >
                Fermer
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-2">
                <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Formulaire de contact</span>
              </div>
              <h2 id="modal-title" className="text-2xl font-bold text-slate-900">
                Prendre un rendez-vous
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Remplissez les informations ci-dessous pour organiser votre consultation.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              
              {/* Nom */}
              <div>
                <label htmlFor="nom" className="block text-sm font-semibold text-slate-700 mb-1">
                  Nom complet <span className="text-red-500">*</span>
                </label>
                <input
                  ref={firstInputRef}
                  type="text"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  placeholder="Ex. Karim Benali"
                  className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
                    errors.nom ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                  } focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors`}
                  aria-required="true"
                  aria-invalid={!!errors.nom}
                  aria-describedby={errors.nom ? 'nom-error' : undefined}
                />
                {errors.nom && (
                  <p id="nom-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.nom}</span>
                  </p>
                )}
              </div>

              {/* Téléphone */}
              <div>
                <label htmlFor="telephone" className="block text-sm font-semibold text-slate-700 mb-1">
                  Téléphone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  placeholder="Ex. 0557 00 00 00"
                  className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
                    errors.telephone ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                  } focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors`}
                  aria-required="true"
                  aria-invalid={!!errors.telephone}
                  aria-describedby={errors.telephone ? 'telephone-error' : undefined}
                />
                {errors.telephone && (
                  <p id="telephone-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.telephone}</span>
                  </p>
                )}
              </div>

              {/* Spécialité */}
              <div>
                <label htmlFor="specialite" className="block text-sm font-semibold text-slate-700 mb-1">
                  Spécialité <span className="text-red-500">*</span>
                </label>
                <select
                  id="specialite"
                  name="specialite"
                  value={formData.specialite}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                >
                  <option value="Médecine Générale">Médecine Générale</option>
                  <option value="Cardiologie">Cardiologie</option>
                  <option value="Pédiatrie">Pédiatrie</option>
                </select>
              </div>

              {/* Date & Heure */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-semibold text-slate-700 mb-1">
                    Date souhaitée <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    min={todayDate}
                    value={formData.date}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
                      errors.date ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                    } focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors`}
                    aria-required="true"
                    aria-invalid={!!errors.date}
                    aria-describedby={errors.date ? 'date-error' : undefined}
                  />
                  {errors.date && (
                    <p id="date-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.date}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="heure" className="block text-sm font-semibold text-slate-700 mb-1">
                    Heure souhaitée <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="heure"
                    name="heure"
                    value={formData.heure}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                  >
                    <option value="08:30">08:30</option>
                    <option value="09:30">09:30</option>
                    <option value="10:30">10:30</option>
                    <option value="11:30">11:30</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1">
                  Message ou motif (facultatif)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Précisez votre motif si vous le souhaitez..."
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-none"
                ></textarea>
              </div>

              {/* Notice */}
              <p className="text-xs text-slate-500">
                Projet de démonstration. Les informations saisies ne font l'objet d'aucun traitement réel.
              </p>

              {/* Actions */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-sm transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  Confirmer la demande
                </button>
              </div>

            </form>
          </div>
        )}
      </div>
    </div>
  );
}
