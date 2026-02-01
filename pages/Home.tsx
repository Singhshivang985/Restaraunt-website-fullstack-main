
import React from 'react';
import { Link } from 'react-router-dom';
import { MENU_ITEMS } from '../constants';

const Home: React.FC = () => {
  const specialItems = MENU_ITEMS.filter(item => item.isSpecial).slice(0, 3);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://lh3.googleusercontent.com/gps-cs-s/AHVAwepODyiPv5_DIZcw_6aNwwtDA47JiypCzbc6mSTLvBUrxV_x6KO61gkY2YStZn3B7BIggqYYhQ48xxiE8Nfd-b4hK-TkXVZD6hvlyROFjQKjHhNjIM7-exzgFWdz9uE96CZvNsFcHCt4kQur=s1360-w1360-h1020-rw" 
            alt="Alimento Cafe Hero" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="text-amber-400 font-semibold uppercase tracking-[0.4em] text-sm block mb-4 animate-fade-in">Est. 2014</span>
          <h1 className="text-6xl md:text-9xl font-serif text-white font-bold mb-6 tracking-tight">
            ALIMENTO
          </h1>
          <p className="text-xl text-stone-200 mb-10 font-light tracking-wide max-w-2xl mx-auto italic">
            "Where modern culinary art meets the soul of a classic bistro."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/menu" 
              className="px-10 py-4 bg-amber-800 hover:bg-amber-900 text-white font-medium uppercase tracking-widest transition-all rounded shadow-lg"
            >
              Explore Menu
            </Link>
            <Link 
              to="/reserve" 
              className="px-10 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md font-medium uppercase tracking-widest transition-all rounded shadow-lg"
            >
              Book a Table
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://lh3.googleusercontent.com/gps-cs-s/AHVAwerAA1PMNTHA4OV3SEaAbzBePKqioYIQWykR7iATHogw-x9KAqSA2Z0G1WaSfjnJxajkwBr4jG4uO3JgmaLDyhHOtmiJaMe07H9jv8L5t5HNlLzYQMDe0O0uSY64Ul98FZT-o1jdSg=s1360-w1360-h1020-rw" 
                alt="Cafe Interior" 
                className="w-full h-[600px] object-cover rounded-sm shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-amber-900 text-white p-8 hidden lg:block shadow-2xl">
                <p className="text-4xl font-serif font-bold">10+</p>
                <p className="text-xs uppercase tracking-widest opacity-80">Years of Culinary Passion</p>
              </div>
            </div>
            <div>
              <span className="text-amber-800 font-semibold uppercase tracking-[0.3em] text-sm block mb-4">Our Heritage</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-8 leading-tight">
                Crafting Moments, One Sip at a Time.
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-8">
                Alimento was born from a desire to merge the rustic charm of traditional European cafes 
                with cutting-edge modern culinary techniques. Our journey began with a single roasted bean 
                and a vision to create a sanctuary for true food lovers in the heart of the city.
              </p>
              <div className="grid grid-cols-2 gap-8 border-t border-stone-200 pt-8">
                <div>
                  <h4 className="font-bold text-stone-900 mb-2 uppercase text-xs tracking-widest">Artisan Coffee</h4>
                  <p className="text-sm text-stone-500 italic">Sourced directly from sustainable micro-lots across the globe.</p>
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 mb-2 uppercase text-xs tracking-widest">Gourmet Food</h4>
                  <p className="text-sm text-stone-500 italic">Seasonal menus using fresh, locally sourced farm ingredients.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-800 font-semibold uppercase tracking-[0.3em] text-sm block mb-4">The Selection</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-900">Chef's Signature Dishes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialItems.map((item) => (
              <div key={item.id} className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all group duration-500">
                <div className="h-72 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-amber-900 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-full">
                    Specialty
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-serif font-bold text-stone-900">{item.name}</h3>
                    <span className="text-amber-800 font-bold text-lg">${item.price}</span>
                  </div>
                  <p className="text-stone-500 text-sm mb-6 leading-relaxed line-clamp-2 italic">{item.description}</p>
                  <Link to="/menu" className="inline-block text-amber-900 font-bold text-xs uppercase tracking-[0.2em] border-b-2 border-amber-900/20 hover:border-amber-900 transition-all pb-1">View in Menu</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-amber-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1920&auto=format&fit=crop" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8">The Alimento Experience.</h2>
          <p className="text-xl text-amber-100/80 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            Whether it's a quick morning ritual or a slow-paced evening celebration, 
            discover a setting designed for elegance and taste.
          </p>
          <Link 
            to="/reserve" 
            className="px-14 py-5 bg-white text-amber-900 font-bold uppercase tracking-[0.3em] hover:bg-stone-100 transition-all inline-block shadow-2xl transform hover:-translate-y-1"
          >
            Reserve Your Table
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
