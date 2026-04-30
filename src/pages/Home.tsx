/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Star, Clock, MapPin, Tablet } from "lucide-react";
import { MENU_ITEMS } from "../constants";

export default function Home({ onNavigate }: { onNavigate: (page: string) => void }) {
  const featuredItems = MENU_ITEMS.slice(0, 3);

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1920&auto=format&fit=crop"
            alt="Delicious Chicken Sandwich"
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
              Flavor That <br />
              <span className="text-red-600">Speaks for Itself</span>
            </h1>
            <p className="text-lg text-zinc-300 mb-10 leading-relaxed max-w-lg">
              Freshly breaded, pressure-cooked in 100% refined peanut oil. Experience the classic taste that has defined generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate("menu")}
                className="bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-red-600/30"
              >
                Order Now
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => onNavigate("locations")}
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
              >
                Find a Store
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Badges */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-zinc-200 dark:border-zinc-800">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-1">100%</div>
            <div className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Peanut Oil</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-1">Fresh</div>
            <div className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Hand-Breaded</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-1">6:30AM</div>
            <div className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Morning Start</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-1">Closed</div>
            <div className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Every Sunday</div>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-sm uppercase tracking-[0.2em] text-red-600 font-bold mb-3">Our Favorites</h2>
            <h3 className="text-4xl font-display font-bold italic font-serif">Featured Selections</h3>
          </div>
          <button 
            onClick={() => onNavigate("menu")}
            className="text-red-600 font-bold flex items-center gap-2 hover:gap-3 transition-all border-b-2 border-red-600/20 pb-1"
          >
            View Full Menu <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredItems.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-zinc-100 dark:border-zinc-800"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                  {item.calories} Cal
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">{item.name}</h4>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm line-clamp-2 mb-6">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold font-serif italic">${item.price}</span>
                  <button 
                    onClick={() => onNavigate("menu")}
                    className="w-10 h-10 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center text-zinc-900 dark:text-white hover:bg-red-600 hover:text-white transition-all"
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Promotions Section */}
      <section className="bg-red-600 py-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_white_0%,_transparent_70%)] blur-3xl translate-x-1/2" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-white/80 uppercase tracking-[0.2em] font-bold mb-4">Limited Time Offer</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
              Get 20% Off Your <br />First Mobile Order
            </h3>
            <p className="text-red-100 text-lg mb-10 max-w-lg mx-auto md:mx-0">
              Download the Crimson App today and start earning rewards on every bite. Available on iOS and Android.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <div className="bg-white text-red-600 px-6 py-3 rounded-xl font-bold flex items-center gap-3">
                <Tablet /> App Store
              </div>
              <div className="bg-white text-red-600 px-6 py-3 rounded-xl font-bold flex items-center gap-3">
                <Tablet /> Google Play
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
             <motion.div 
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="relative z-10 bg-white p-4 rounded-[3rem] shadow-2xl rotate-6 max-w-sm mx-auto"
             >
               <img 
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop" 
                alt="App Interface" 
                className="rounded-[2.5rem] w-full"
                referrerPolicy="no-referrer"
               />
             </motion.div>
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/20 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.2em] text-red-600 font-bold mb-3">Our Community</h2>
          <h3 className="text-4xl font-display font-bold italic font-serif">What Our Guests Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Sarah J.", role: "Local Guide", text: "The Classic Sandwich is consistently perfect. I've been coming here for 10 years and the quality never drops.", stars: 5 },
            { name: "Mark T.", role: "Foodie", text: "Best waffle fries in the city, hands down. The Crimson sauce is a game changer for the nuggets too!", stars: 5 },
            { name: "Jessica R.", role: "Busy Mom", text: "The staff is incredibly polite and efficient. It's my go-to for a quick, delicious dinner for the kids.", stars: 5 },
          ].map((t, idx) => (
            <div key={idx} className="bg-zinc-50 dark:bg-zinc-900/50 p-10 rounded-3xl border border-zinc-100 dark:border-zinc-800">
              <div className="flex gap-1 mb-6 text-amber-400">
                {[...Array(t.stars)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-lg italic mb-8 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-200 dark:bg-zinc-800 rounded-full flex items-center justify-center font-bold text-zinc-400">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-widest">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Location Finder Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 overflow-hidden">
        <div className="bg-zinc-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
          <div className="relative z-10 flex-1">
            <h2 className="text-red-500 uppercase tracking-[0.2em] font-bold mb-4">Nearby</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">Ready to eat? <br />Find us near you.</h3>
            <div className="flex items-center gap-4 text-zinc-400 mb-8">
              <MapPin className="text-red-500" />
              <span>Over 2,600 locations nationwide.</span>
            </div>
            <button 
              onClick={() => onNavigate("locations")}
              className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-zinc-200 transition-all flex items-center gap-2"
            >
              Open Locations <ArrowRight size={20} />
            </button>
          </div>
          <div className="flex-1 w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden grayscale opacity-50 contrast-125">
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop" 
              alt="Map Background" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-red-600/10 rounded-full blur-3xl" />
        </div>
      </section>
    </div>
  );
}
