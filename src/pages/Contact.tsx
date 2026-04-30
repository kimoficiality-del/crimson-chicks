/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Mail, MessageSquare, Phone, Send, MapPin, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
      <div className="text-center mb-16">
         <h1 className="text-4xl md:text-6xl font-display font-bold italic font-serif mb-6 underline decoration-red-600/20 underline-offset-8">Say Hello.</h1>
         <p className="text-zinc-500 max-w-xl mx-auto">Have a question? We're here to help. Reach out and our team will get back to you shortly.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Info Area */}
        <div className="space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-sm">
              <div className="w-12 h-12 bg-red-50 dark:bg-red-900/10 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                <Phone size={24} />
              </div>
              <h3 className="font-bold mb-2">Call Us</h3>
              <p className="text-sm text-zinc-500">+237 658-424-009 (Available 24/7)</p>
            </div>
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 shadow-sm">
              <div className="w-12 h-12 bg-red-50 dark:bg-red-900/10 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                <Mail size={24} />
              </div>
              <h3 className="font-bold mb-2">Email Us</h3>
              <p className="text-sm text-zinc-500">kimfoficiality@gmail.com</p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
            <h3 className="text-2xl font-display font-bold italic font-serif mb-6 relative z-10">Corporate Office</h3>
            <div className="space-y-6 relative z-10">
               <div className="flex items-start gap-4 text-zinc-400">
                  <MapPin className="text-red-500 shrink-0" size={20} />
                  <p>Commercial Avenue, <br />Bamenda, Cameroon</p>
               </div>
               <div className="flex items-center gap-4 text-zinc-400">
                  <MessageSquare className="text-red-500 shrink-0" size={20} />
                  <p>Real-time chat available in-app.</p>
               </div>
            </div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-red-600/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
          </div>

          {/* Social */}
          <div className="flex items-center gap-8 px-6">
            <span className="text-xs uppercase tracking-widest font-bold text-zinc-400">Follow us</span>
            <div className="flex gap-6">
              {['Facebook', 'Twitter', 'Instagram', 'TikTok'].map(s => (
                <a key={s} href="#" className="text-sm font-bold hover:text-red-600 transition-colors">{s}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Form Area */}
        <div className="bg-white dark:bg-zinc-900 p-10 rounded-[3rem] border border-zinc-100 dark:border-zinc-800 shadow-2xl shadow-red-600/5 relative overflow-hidden">
           <AnimatePresence mode="wait">
             {!submitted ? (
               <motion.form 
                 key="form"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 onSubmit={handleSubmit} 
                 className="space-y-6"
               >
                 <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Your Name</label>
                   <input 
                     required
                     type="text" 
                     placeholder="John Doe"
                     className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-red-600 outline-none transition-all placeholder:text-zinc-300"
                   />
                 </div>
                 <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Email Address</label>
                   <input 
                     required
                     type="email" 
                     placeholder="john@example.com"
                     className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-red-600 outline-none transition-all placeholder:text-zinc-300"
                   />
                 </div>
                 <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">How can we help?</label>
                   <textarea 
                     required
                     rows={4}
                     placeholder="Tell us what's on your mind..."
                     className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-red-600 outline-none transition-all placeholder:text-zinc-300 resize-none"
                   />
                 </div>
                 <button 
                   disabled={loading}
                   type="submit"
                   className="w-full bg-red-600 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-red-700 transition-all shadow-xl shadow-red-600/20 disabled:opacity-50"
                 >
                   {loading ? "Sending..." : "Send Message"}
                   {!loading && <Send size={20} />}
                 </button>
               </motion.form>
             ) : (
               <motion.div 
                 key="success"
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="text-center py-20"
               >
                 <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle size={40} />
                 </div>
                 <h2 className="text-3xl font-display font-bold italic font-serif mb-4 italic">Message Sent!</h2>
                 <p className="text-zinc-500 mb-10">We've received your inquiry and will respond within 24 hours.</p>
                 <button 
                   onClick={() => setSubmitted(false)}
                   className="text-red-600 font-bold hover:underline"
                 >
                   Send another message
                 </button>
               </motion.div>
             )}
           </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
