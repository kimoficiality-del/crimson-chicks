/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Lock, User, ArrowRight, Github, Chrome, CheckCircle } from "lucide-react";

export default function Auth({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => onNavigate("home"), 1500);
    }, 1500);
  };

  if (success) {
    return (
      <div className="max-w-md mx-auto px-4 py-32 text-center">
        <motion.div 
           initial={{ scale: 0.5, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <CheckCircle size={40} />
        </motion.div>
        <h2 className="text-3xl font-display font-bold italic font-serif mb-4 italic">Welcome back!</h2>
        <p className="text-zinc-500">Redirecting to home...</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-4 pb-20 pt-10">
      <div className="bg-white dark:bg-zinc-900 rounded-[3rem] p-10 border border-zinc-100 dark:border-zinc-800 shadow-2xl shadow-red-600/5">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6 shadow-xl shadow-red-600/20">
            C
          </div>
          <h1 className="text-3xl font-display font-bold italic font-serif mb-2">
            {isLogin ? "Sign In" : "Join the Flock"}
          </h1>
          <p className="text-sm text-zinc-500">
            {isLogin ? "Welcome back to Crimson Chicken" : "Become a member and earn rewards"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-red-600 transition-colors" size={18} />
              <input 
                required
                type="text" 
                placeholder="Full Name"
                className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl py-4 pl-12 pr-6 focus:ring-2 focus:ring-red-600 outline-none transition-all placeholder:text-zinc-300"
              />
            </div>
          )}
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-red-600 transition-colors" size={18} />
            <input 
              required
              type="email" 
              placeholder="Email Address"
              className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl py-4 pl-12 pr-6 focus:ring-2 focus:ring-red-600 outline-none transition-all placeholder:text-zinc-300"
            />
          </div>
          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-red-600 transition-colors" size={18} />
            <input 
              required
              type="password" 
              placeholder="Password"
              className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl py-4 pl-12 pr-6 focus:ring-2 focus:ring-red-600 outline-none transition-all placeholder:text-zinc-300"
            />
          </div>

          {isLogin && (
            <div className="text-right">
               <button type="button" className="text-xs font-bold text-red-600 hover:underline">Forgot Password?</button>
            </div>
          )}

          <button 
            disabled={loading}
            type="submit"
            className="w-full bg-red-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-red-700 transition-all shadow-xl shadow-red-600/30 disabled:opacity-50 mt-6"
          >
            {loading ? "Processing..." : (isLogin ? "Sign In" : "Create Account")}
            {!loading && <ArrowRight size={20} />}
          </button>
        </form>

        <div className="relative my-10 flex items-center justify-center">
           <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-zinc-100 dark:border-zinc-800"></div></div>
           <span className="relative bg-white dark:bg-zinc-900 px-4 text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none">Or continue with</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
           <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all font-bold text-xs uppercase tracking-widest">
              <Chrome size={16} /> Google
           </button>
           <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all font-bold text-xs uppercase tracking-widest">
              <Github size={16} /> GitHub
           </button>
        </div>

        <div className="mt-10 text-center text-sm">
           <span className="text-zinc-500">{isLogin ? "Don't have an account?" : "Already have an account?"}</span>
           <button 
             onClick={() => setIsLogin(!isLogin)}
             className="ml-2 font-bold text-red-600 hover:underline"
           >
             {isLogin ? "Sign Up" : "Sign In"}
           </button>
        </div>
      </div>
    </div>
  );
}
