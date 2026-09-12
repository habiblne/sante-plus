import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustFeatures from './components/TrustFeatures';
import Specialties from './components/Specialties';
import About from './components/About';
import AppointmentCTA from './components/AppointmentCTA';
import Contact from './components/Contact';
import AppointmentModal from './components/AppointmentModal';
import Footer from './components/Footer';

export default function App() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  const handleOpenAppointment = (specialty = '') => {
    setSelectedSpecialty(specialty);
    setIsAppointmentModalOpen(true);
  };

  const handleCloseAppointment = () => {
    setIsAppointmentModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      {/* Top Navigation */}
      <Navbar onOpenAppointment={() => handleOpenAppointment()} />

      {/* Main Content Area */}
      <main className="flex-1">
        <Hero onOpenAppointment={() => handleOpenAppointment()} />
        <TrustFeatures />
        <Specialties onSelectSpecialty={(spec) => handleOpenAppointment(spec)} />
        <About />
        <AppointmentCTA onOpenAppointment={() => handleOpenAppointment()} />
        <Contact onOpenAppointment={() => handleOpenAppointment()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Appointment Modal */}
      {isAppointmentModalOpen && (
        <AppointmentModal
          isOpen={isAppointmentModalOpen}
          onClose={handleCloseAppointment}
          defaultSpecialty={selectedSpecialty}
        />
      )}
    </div>
  );
}
