/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Search, MapPin, Phone, Clock, ArrowUpRight, Compass } from "lucide-react";
import { motion } from "motion/react";
import { LOCATIONS } from "../constants";

export default function Locations() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLocations = LOCATIONS.filter(loc => 
    loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    loc.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    loc.zip.includes(searchQuery)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-display font-bold italic font-serif mb-6">Find a Restaurant</h1>
        <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
          From the heart of the city to the quiet suburbs, a warm Crimson Chicken sandwich is never far away.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Sidebar Search & List */}
        <div className="lg:col-span-4 space-y-8">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-red-500 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search by city, ZIP, or name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-red-600 outline-none transition-all"
            />
          </div>

          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 no-scrollbar">
            {filteredLocations.map((loc) => (
              <div 
                key={loc.id}
                className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:border-red-600/30 transition-all cursor-pointer group hover:shadow-lg"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-lg group-hover:text-red-600 transition-colors">{loc.name}</h3>
                  <div className="w-8 h-8 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400 group-hover:text-red-600">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
                <div className="space-y-3 text-sm text-zinc-500">
                  <div className="flex items-center gap-3">
                    <MapPin size={16} className="text-red-600 shrink-0" />
                    <span>{loc.address}, {loc.city}, {loc.zip}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-red-600 shrink-0" />
                    <span>{loc.hours}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-red-600 shrink-0" />
                    <span>{loc.phone}</span>
                  </div>
                </div>
                <button className="w-full mt-6 bg-zinc-50 dark:bg-zinc-800 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all">
                  Order from here
                </button>
              </div>
            ))}

            {filteredLocations.length === 0 && (
              <div className="text-center py-12">
                <p className="text-zinc-500">No restaurants found in this area.</p>
              </div>
            )}
          </div>
        </div>

        {/* Map View Placeholder */}
        <div className="lg:col-span-8 bg-zinc-100 dark:bg-zinc-900 rounded-[3rem] relative overflow-hidden min-h-[500px] border border-zinc-200 dark:border-zinc-800">
           {/* Mock Map UI */}
           <div className="absolute inset-0 grayscale opacity-40">
             <img 
               src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1920&auto=format&fit=crop" 
               alt="Map"
               className="w-full h-full object-cover"
               referrerPolicy="no-referrer"
             />
           </div>
           
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl flex flex-col items-center gap-4 text-center max-w-sm mx-4 pointer-events-auto">
                 <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center">
                    <Compass size={32} className="animate-spin-slow" />
                 </div>
                 <h4 className="text-xl font-bold italic font-serif">Interactive Map</h4>
                 <p className="text-sm text-zinc-500">Enable location permissions to see restaurants near your current position.</p>
                 <button className="bg-red-600 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-red-700 transition-all">
                    Enable Location
                 </button>
              </div>
           </div>

           {/* Custom Map Markers (Floating elements) */}
           {filteredLocations.map((loc, i) => (
             <motion.div
               key={loc.id}
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               transition={{ delay: i * 0.1 }}
               className="absolute z-20 pointer-events-auto group"
               style={{ 
                 top: `${20 + (i * 25)}%`, 
                 left: `${30 + (i * 15)}%` 
               }}
             >
                <div className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:scale-125 transition-transform">
                   <MapPin size={20} fill="currentColor" />
                </div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white dark:bg-zinc-800 whitespace-nowrap shadow-xl px-4 py-2 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                   {loc.name}
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
}
