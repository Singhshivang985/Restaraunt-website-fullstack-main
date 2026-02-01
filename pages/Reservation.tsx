
import React, { useState } from 'react';
import { storageService } from '../services/storageService';

const Reservation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '19:00',
    guests: 2
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    storageService.saveReservation(formData);
    setIsSubmitted(true);
    // Clear form after delay
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '19:00',
        guests: 2
      });
      setIsSubmitted(false);
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="sticky top-32">
            <span className="text-amber-800 font-semibold uppercase tracking-[0.3em] text-sm block mb-4">Booking</span>
            <h1 className="text-5xl font-serif font-bold text-stone-900 mb-8">Reserve a Table</h1>
            <p className="text-stone-600 mb-12 text-lg leading-relaxed">
              We look forward to hosting you. Please fill out the form to secure your spot. 
              For parties larger than 8, please call us directly.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="bg-amber-900 text-white p-3 rounded">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">Opening Hours</h4>
                  <p className="text-stone-500 text-sm">Mon - Fri: 08:00 AM - 10:00 PM</p>
                  <p className="text-stone-500 text-sm">Sat - Sun: 09:00 AM - 11:30 PM</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-amber-900 text-white p-3 rounded">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">Location</h4>
                  <p className="text-stone-500 text-sm">Cantt Police Station, Alka Puri Colony, Prayagraj, Uttar Pradesh 211001</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 shadow-2xl rounded-sm border border-stone-100">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">Request Sent!</h2>
                <p className="text-stone-500">We will review your reservation and send a confirmation to your email shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Full Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="full Name"
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:outline-none focus:border-amber-700 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Email Address</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="abc@example.com"
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:outline-none focus:border-amber-700 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Phone Number</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 9090909090"
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:outline-none focus:border-amber-700 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Number of Guests</label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:outline-none focus:border-amber-700 transition-colors"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                        <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Date</label>
                    <input
                      required
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:outline-none focus:border-amber-700 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Time</label>
                    <input
                      required
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:outline-none focus:border-amber-700 transition-colors"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-amber-900 text-white font-bold uppercase tracking-[0.2em] hover:bg-amber-950 transition-colors mt-8"
                >
                  Confirm Reservation
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
