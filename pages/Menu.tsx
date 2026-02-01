
import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';

const Menu: React.FC = () => {
  const categories: string[] = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Beverages', 'Desserts'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <span className="text-amber-800 font-semibold uppercase tracking-[0.3em] text-sm block mb-4">The Selection</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-stone-900 mb-6">Our Menu</h1>
          <p className="text-stone-500 max-w-2xl mx-auto">
            Discover a world of flavors, meticulously crafted for the discerning palate. 
            From our morning blends to evening delights.
          </p>
        </header>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium uppercase tracking-widest transition-all ${
                activeCategory === cat 
                  ? 'bg-amber-800 text-white shadow-lg' 
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredItems.map((item) => (
            <div key={item.id} className="flex gap-6 group">
              <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 rounded-full overflow-hidden border-2 border-amber-100 group-hover:border-amber-300 transition-colors">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-baseline mb-2 border-b border-dotted border-stone-300 pb-1">
                  <h3 className="text-xl font-serif font-bold text-stone-900">{item.name}</h3>
                  <span className="text-amber-900 font-bold ml-4">${item.price}</span>
                </div>
                <p className="text-stone-500 text-sm leading-relaxed mb-2">{item.description}</p>
                {item.isSpecial && (
                  <span className="inline-block bg-amber-50 text-amber-700 text-[10px] px-2 py-0.5 rounded uppercase font-bold tracking-tighter">Chef's Special</span>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-stone-400">
            No items found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
