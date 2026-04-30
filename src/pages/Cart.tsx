/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Trash2, Plus, Minus, ArrowLeft, CreditCard, ShoppingBag, Truck, CheckCircle } from "lucide-react";
import { useCart } from "../CartContext";

export default function Cart({ onNavigate }: { onNavigate: (page: string) => void }) {
  const { cart, totalPrice, totalItems, updateQuantity, removeFromCart, clearCart } = useCart();
  const [step, setStep] = useState(1); // 1: Review, 2: Checkout, 3: Success
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    payment: "card"
  });

  if (step === 3) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center">
        <motion.div 
           initial={{ scale: 0.5, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           className="w-24 h-24 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <CheckCircle size={48} />
        </motion.div>
        <h1 className="text-4xl font-display font-bold italic font-serif mb-4">Order Placed!</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mb-10 leading-relaxed">
          Your delicious Crimson Chicken is on its way. Use the order ID <span className="font-bold text-zinc-900 dark:text-white">#CR-88219</span> to track your order.
        </p>
        <div className="space-y-4">
          <button 
            onClick={() => { clearCart(); onNavigate("home"); }}
            className="w-full bg-red-600 text-white py-4 rounded-2xl font-bold hover:bg-red-700 transition-all"
          >
            Track Order
          </button>
          <button 
            onClick={() => { clearCart(); onNavigate("menu"); }}
            className="w-full text-zinc-500 font-bold hover:text-red-600 transition-all"
          >
            Back to Menu
          </button>
        </div>
      </div>
    );
  }

  if (totalItems === 0 && step === 1) {
    return (
      <div className="max-w-xl mx-auto px-4 py-32 text-center">
        <div className="inline-block p-10 bg-zinc-100 dark:bg-zinc-900 rounded-full mb-8">
          <ShoppingBag size={64} className="text-zinc-300 dark:text-zinc-700" />
        </div>
        <h1 className="text-3xl font-display font-bold italic font-serif mb-4">Your cart is empty</h1>
        <p className="text-zinc-500 dark:text-zinc-400 mb-10">Look like you haven't added anything yet. Let's fix that!</p>
        <button 
          onClick={() => onNavigate("menu")}
          className="bg-red-600 text-white px-10 py-4 rounded-full font-bold hover:bg-red-700 transition-all shadow-xl shadow-red-600/20"
        >
          Browse Menu
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
      <div className="flex items-center justify-between mb-12">
        <div>
          <button 
            onClick={() => step === 2 ? setStep(1) : onNavigate("menu")}
            className="flex items-center gap-2 text-zinc-500 hover:text-red-600 font-medium transition-colors mb-4"
          >
            <ArrowLeft size={16} /> 
            {step === 2 ? "Back to Review" : "Continue Shopping"}
          </button>
          <h1 className="text-4xl md:text-5xl font-display font-bold italic font-serif">
            {step === 1 ? "Your Cart" : "Checkout"}
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-4">
           <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${step >= 1 ? "bg-red-600 text-white" : "bg-zinc-200 dark:bg-zinc-800"}`}>1</div>
           <div className="w-8 h-px bg-zinc-200 dark:border-zinc-800" />
           <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${step >= 2 ? "bg-red-600 text-white" : "bg-zinc-200 dark:bg-zinc-800"}`}>2</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {step === 1 ? (
            <div className="space-y-6">
              {cart.map((item) => (
                <motion.div 
                  key={item.id}
                  layout
                  className="bg-white dark:bg-zinc-900 p-6 rounded-3xl border border-zinc-100 dark:border-zinc-800 flex items-center gap-6 shadow-sm"
                >
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-24 h-24 rounded-2xl object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                    <p className="text-zinc-500 text-xs mb-4">{item.category}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center bg-zinc-50 dark:bg-zinc-800 rounded-full p-1">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-white dark:hover:bg-zinc-700 rounded-full transition-all"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-10 text-center font-bold">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-white dark:hover:bg-zinc-700 rounded-full transition-all"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="font-serif italic font-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="p-3 text-zinc-300 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </motion.div>
              ))}
            </div>
          ) : (
            <form className="space-y-8 bg-white dark:bg-zinc-900 p-10 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-zinc-500">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-red-600 outline-none transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-zinc-500">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-red-600 outline-none transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-zinc-500">Delivery Address</label>
                  <input 
                    type="text" 
                    placeholder="123 Crimson Lane, Food City, FC 12345"
                    className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-red-600 outline-none transition-all"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-zinc-500">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="(555) 000-0000"
                    className="w-full bg-zinc-50 dark:bg-zinc-800 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-red-600 outline-none transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-zinc-500">Payment Method</label>
                  <div className="grid grid-cols-2 gap-4">
                     <button 
                       type="button"
                       onClick={() => setFormData({...formData, payment: "card"})}
                       className={`flex items-center justify-center gap-2 py-4 rounded-2xl border-2 transition-all ${formData.payment === "card" ? "border-red-600 bg-red-50 dark:bg-red-900/10 text-red-600" : "border-zinc-100 dark:border-zinc-800 text-zinc-500"}`}
                     >
                       <CreditCard size={18} /> Card
                     </button>
                     <button 
                       type="button"
                       onClick={() => setFormData({...formData, payment: "cash"})}
                       className={`flex items-center justify-center gap-2 py-4 rounded-2xl border-2 transition-all ${formData.payment === "cash" ? "border-red-600 bg-red-50 dark:bg-red-900/10 text-red-600" : "border-zinc-100 dark:border-zinc-800 text-zinc-500"}`}
                     >
                       <Truck size={18} /> Cash
                     </button>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Sidebar Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-32 bg-white dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 shadow-xl shadow-zinc-200/20 dark:shadow-none">
            <h2 className="text-xl font-bold mb-6 italic font-serif">Order Summary</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm">
                <span className="text-zinc-500">Subtotal ({totalItems} items)</span>
                <span className="font-bold">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-500">Delivery Fee</span>
                <span className="text-green-600 font-bold">FREE</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-500">Estimated Tax</span>
                <span className="font-bold">${(totalPrice * 0.08).toFixed(2)}</span>
              </div>
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex justify-between items-end">
                <span className="text-lg font-bold">Total</span>
                <span className="text-3xl font-display font-bold italic font-serif text-red-600">
                  ${(totalPrice * 1.08).toFixed(2)}
                </span>
              </div>
            </div>

            <button 
              onClick={() => step === 1 ? setStep(2) : setStep(3)}
              disabled={step === 2 && (!formData.name || !formData.address)}
              className="w-full bg-red-600 text-white py-5 rounded-2xl font-bold hover:bg-red-700 transition-all shadow-xl shadow-red-600/30 disabled:opacity-50 disabled:cursor-not-allowed mb-4 flex items-center justify-center gap-3"
            >
              {step === 1 ? "Proceed to Checkout" : "Confirm Order"}
              {step === 1 && <ShoppingBag size={20} />}
            </button>
            <p className="text-[10px] text-center text-zinc-400 uppercase tracking-widest font-medium">
              100% Secure Checkout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
