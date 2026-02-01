
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-serif font-bold text-amber-500 mb-6 tracking-tighter">ALIMENTO</h2>
            <p className="text-lg leading-relaxed mb-8 max-w-md">
              A symphony of taste and tradition. Experience the finest modern cuisine 
              in the heart of the city. Join us for artisan coffee and gourmet meals 
              crafted with passion.
            </p>
          </div>
          
          <div>
            <h3 className="text-stone-100 font-medium uppercase tracking-widest mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-amber-500 transition-colors">Home</Link></li>
              <li><Link to="/menu" className="hover:text-amber-500 transition-colors">Menu</Link></li>
              <li><Link to="/reserve" className="hover:text-amber-500 transition-colors">Reservations</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-stone-100 font-medium uppercase tracking-widest mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li>Cantt Police Station, Alka Puri Colony, Prayagraj, Uttar Pradesh 211001</li>
              <li>+91 12345-67890</li>
              <li>hello@alimento.cafe</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-stone-800 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Alimento Bistro. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-amber-500">Instagram</a>
            <a href="#" className="hover:text-amber-500">Facebook</a>
            <a href="#" className="hover:text-amber-500">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
