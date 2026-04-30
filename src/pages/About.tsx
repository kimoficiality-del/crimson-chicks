/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Heart, Users, ShieldCheck, Leaf } from "lucide-react";

export default function About() {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] text-red-600 font-bold mb-4">Since 1967</h2>
            <h1 className="text-5xl md:text-7xl font-display font-bold italic font-serif mb-8 leading-[1.1]">
              A Legacy of <br /> <span className="text-red-600">Care & Chicken.</span>
            </h1>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed">
              What started as a small diner in Bamenda has grown into a beloved tradition. We founded this company on a simple principle: we're not just in the chicken business, we're in the people business.
            </p>
            <div className="flex items-center gap-6">
               <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">2,600+</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Locations</div>
               </div>
               <div className="w-px h-12 bg-zinc-200 dark:bg-zinc-800" />
               <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">100%</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Family Owned</div>
               </div>
            </div>
          </div>
          <div className="relative">
             <div className="rounded-[3rem] overflow-hidden aspect-square shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1540340061722-9293d5163008?q=80&w=1000&auto=format&fit=crop" 
                  alt="Founder with chicken" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
             </div>
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/10 rounded-full blur-3xl" />
             <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-red-600/5 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-zinc-50 dark:bg-zinc-900/50 py-24 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-display font-bold italic font-serif mb-4">Our Core Values</h2>
             <p className="text-zinc-500 max-w-xl mx-auto">The beliefs that guide every sandwich we make and every guest we serve.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "Care First", desc: "We strive to be the world's most caring company, one interaction at a time." },
              { icon: Users, title: "Better Together", desc: "Our staff are not employees, they are Team Members and family." },
              { icon: ShieldCheck, title: "Stewardship", desc: "We are responsible caretakers of the resources entrusted to us." },
              { icon: Leaf, title: "Purpose Driven", desc: "Serving great food is what we do, but making a difference is why we do it." },
            ].map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 bg-red-50 dark:bg-red-900/10 text-red-600 rounded-2xl flex items-center justify-center mb-6 border border-red-100 dark:border-red-900/20 group-hover:scale-110 transition-transform">
                  <v.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
         <div className="bg-red-600 rounded-[3rem] p-12 md:p-20 text-white overflow-hidden relative">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-display font-bold italic font-serif mb-8 italic">More than just a job.</h2>
              <p className="text-red-100 text-lg mb-10 leading-relaxed">
                We're committed to creating a culture of belonging where everyone can thrive. Whether you're a first-time worker or a career professional, there's a place for you at Crimson Chicken.
              </p>
              <button className="bg-white text-red-600 px-10 py-4 rounded-full font-bold hover:bg-zinc-100 transition-all flex items-center gap-2">
                Join our Team
              </button>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none hidden lg:block">
               <img 
                 src="https://images.unsplash.com/photo-1549463599-242406bd1f43?q=80&w=800&auto=format&fit=crop" 
                 alt="Happy Staff" 
                 className="w-full h-full object-cover"
                 referrerPolicy="no-referrer"
               />
            </div>
         </div>
      </section>
    </div>
  );
}
