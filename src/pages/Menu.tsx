/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Plus, Minus, Info, CheckCircle2 } from "lucide-react";
import { MENU_ITEMS, CATEGORIES } from "../constants";
import { useCart } from "../CartContext";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { addToCart, cart, updateQuantity } = useCart();
  const [showToast, setShowToast] = useState<string | null>(null);

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (item: any) => {
    addToCart(item);
    setShowToast(item.name);
    setTimeout(() => setShowToast(null), 2000);
  };

  const getItemQuantity = (id: string) => {
    const item = cart.find(i => i.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
      {/* Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
        <div>
          <h1 className="text-4xl md:text-5xl font-display font-bold italic font-serif mb-4">Our Menu</h1>
          <p className="text-zinc-500 dark:text-zinc-400">Hand-breaded chicken, prepared fresh every day.</p>
        </div>

        <div className="relative w-full md:w-80 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-red-600 transition-colors" size={20} />
          <input 
            type="text" 
            placeholder="Search menu items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-red-600 outline-none transition-all"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
        {["All", ...CATEGORIES].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
              activeCategory === category 
                ? "bg-red-600 text-white shadow-lg shadow-red-600/20" 
                : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-red-600/30"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="group bg-white dark:bg-zinc-900 rounded-[2rem] overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                  {item.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <span className="text-xl font-serif italic text-red-600">${item.price}</span>
                </div>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-6 line-clamp-2 min-h-[40px]">
                  {item.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-zinc-50 dark:border-zinc-800">
                  <div className="flex items-center gap-2 text-xs font-medium text-zinc-400">
                    <Info size={14} />
                    <span>{item.calories} Cal</span>
                  </div>
                  
                  {getItemQuantity(item.id) > 0 ? (
                    <div className="flex items-center bg-zinc-100 dark:bg-zinc-800 rounded-full p-1 border border-zinc-200 dark:border-zinc-700">
                      <button 
                         onClick={() => updateQuantity(item.id, -1)}
                         className="w-8 h-8 flex items-center justify-center hover:bg-white dark:hover:bg-zinc-700 rounded-full transition-colors"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center font-bold text-sm">
                        {getItemQuantity(item.id)}
                      </span>
                      <button 
                         onClick={() => updateQuantity(item.id, 1)}
                         className="w-8 h-8 flex items-center justify-center hover:bg-white dark:hover:bg-zinc-700 rounded-full transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  ) : (
                    <button 
                      onClick={() => handleAddToCart(item)}
                      className="bg-zinc-900 dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-full text-xs font-bold hover:bg-red-600 dark:hover:bg-red-600 hover:text-white dark:hover:text-white transition-all shadow-lg shadow-black/5 dark:shadow-white/5"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-20">
          <div className="text-zinc-300 dark:text-zinc-700 mb-6">
            <Search size={64} className="mx-auto" />
          </div>
          <h3 className="text-2xl font-bold mb-2">No items found</h3>
          <p className="text-zinc-500">Try adjusting your search or filters.</p>
          <button 
            onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
            className="mt-6 text-red-600 font-bold hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] bg-zinc-900 dark:bg-white text-white dark:text-black px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 font-medium text-sm"
          >
            <CheckCircle2 className="text-red-500" size={20} />
            Added {showToast} to your cart
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
