"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import "../globals.css";


export default function PricingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <main className="bg-light-gray min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-light-gray/80 backdrop-blur-md border-b border-white/20 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/image/HabitHub-Logo.svg" 
              alt="HabitHub Logo" 
              className="w-8 h-8"
            />
            <h1 className="text-xl font-bold" style={{ color: 'var(--color-blue)' }}>
              HabitHub
            </h1>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-bold transition-colors duration-200"
              style={{ color: '#B5B5B5' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-blue)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#B5B5B5')}
            >
              Home
            </Link>
            <a
              href="/pricing"
              className="text-sm font-bold transition-colors duration-200"
              style={{ color: 'var(--color-blue)' }}
            >
              Pricing
            </a>
            <a
              href="/signup"
              className="text-sm font-bold transition-colors duration-200"
              style={{ color: '#B5B5B5' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-blue)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#B5B5B5')}
            >
              Sign Up
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" style={{ color: 'var(--color-blue)' }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: 'var(--color-blue)' }} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden bg-white border-t border-gray-200 shadow-lg"
          initial={false}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          <div className="px-4 py-4 space-y-4">
            <Link
              href="/"
              className="block text-sm font-bold py-2 transition-colors duration-200"
              style={{ color: 'var(--color-black)' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <a
              href="/pricing"
              className="block text-sm font-bold py-2 transition-colors duration-200"
              style={{ color: 'var(--color-blue)' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="/signup"
              className="block text-sm font-bold py-2 transition-colors duration-200"
              style={{ color: 'var(--color-black)' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </a>
          </div>
        </motion.div>
      </nav>

      {/* Header Section */}
      <motion.section 
        className="w-full max-w-6xl mx-auto text-center py-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-6xl md:text-7xl font-bold text-black mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Plans and Pricing
        </motion.h1>
        <motion.p 
          className="text-xl text-black max-w-2xl mx-auto mb-16 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          Receive unlimited credits when you pay yearly,<br />
          and save on your plan
        </motion.p>
      </motion.section>

      {/* Pricing Cards */}
      <motion.section 
        className="w-full max-w-6xl mx-auto px-4 pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          
          {/* Free Plan */}
          <motion.div 
            className="border-2 bg-white rounded-2xl p-8 w-full max-w-[350px] max-h-[550px] flex flex-col" 
            style={{ borderColor: 'var(--color-blue)' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            <div className="mb-8">
              <h3 className="text-2xl text-black mb-12">Free</h3>
              <div className="mb-4">
                <span className="text-5xl font-bold text-black">$0</span>
                <p className="text-sm text-black mt-4 mb-12">per user/month, billed annually</p>
              </div>
            </div>

            <div className="flex-1 space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Check className="size-5 text-black flex-shrink-0" />
                <span className="text-sm font-bold text-black">Track up to 3 habits</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="size-5 text-black flex-shrink-0" />
                <span className="text-sm font-bold text-black">Daily reminder notifications</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="size-5 text-black flex-shrink-0" />
                <span className="text-sm font-bold text-black">Basic progress charts</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="size-5 text-black flex-shrink-0" />
                <span className="text-sm font-bold text-black">Sync on 1 device</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="size-5 text-black flex-shrink-0" />
                <span className="text-sm font-bold text-black">7-day history access</span>
              </div>
            </div>

            <Button 
              className="w-full h-12 rounded-full font-bold text-base transition-colors duration-300 mt-auto"
              style={{ 
                backgroundColor: 'var(--color-black)', 
                color: 'var(--color-white)' 
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-blue)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-black)'}
            >
              Get started with Free
            </Button>
          </motion.div>

          {/* Pro Plan */}
          <motion.div 
            className="border-2 bg-white rounded-2xl p-8 w-full max-w-[350px] max-h-[550px] flex flex-col" 
            style={{ borderColor: 'var(--color-blue)' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
          >
            <div className="mb-8">
              <h3 className="text-2xl text-black mb-12">Pro</h3>
              <div className="mb-4">
                <span className="text-5xl font-bold text-black">$10</span>
                <p className="text-sm text-black mt-4 mb-12">per user/month, billed annually</p>
              </div>
            </div>

            <div className="flex-1 space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Check className="size-5 text-black flex-shrink-0" />
                <span className="text-sm font-bold text-black">Unlimited habits</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="size-5 text-black flex-shrink-0" />
                <span className="text-sm font-bold text-black">AI-powered insights & feedback</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="size-5 text-black flex-shrink-0" />
                <span className="text-sm font-bold text-black">Advanced analytics & weekly reports</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="size-5 text-black flex-shrink-0" />
                <span className="text-sm font-bold text-black">Multi-device sync</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="size-5 text-black flex-shrink-0" />
                <span className="text-sm font-bold text-black">Themes & customization</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="size-5 text-black flex-shrink-0" />
                <span className="text-sm font-bold text-black">Export progress (PDF / CSV)</span>
              </div>
            </div>

            <Button 
              className="w-full h-12 rounded-full font-bold text-base transition-colors duration-300 mt-auto"
              style={{ 
                backgroundColor: 'var(--color-black)', 
                color: 'var(--color-white)' 
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-blue)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-black)'}
            >
              Get started with Pro
            </Button>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div 
            className="border-2 bg-white rounded-2xl p-8 w-full max-w-[350px] max-h-[550px] flex flex-col" 
            style={{ borderColor: 'var(--color-blue)' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
          >
            <div className="mb-8">
              <h3 className="text-2xl text-black mb-12">Enterprise</h3>
              <div className="mb-4">
                <span className="text-5xl font-bold text-black">Custom</span>
                <p className="text-sm text-black mt-4 mb-12">per user/month, billed annually</p>
              </div>
            </div>

            <div className="flex-1 space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Check className="size-5 text-black flex-shrink-0" />
                <span className="text-sm font-bold text-black">Everything in Pro</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="size-5 text-black flex-shrink-0" />
                <span className="text-sm font-bold text-black">Team habit tracking & reporting</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="size-5 text-black flex-shrink-0" />
                <span className="text-sm font-bold text-black">Up to 20+ team members</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="size-5 text-black flex-shrink-0" />
                <span className="text-sm font-bold text-black">Dedicated dashboard & integrations.(Slack, Notion, Jira, etc.)</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="size-5 text-black flex-shrink-0" />
                <span className="text-sm font-bold text-black">API access</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="size-5 text-black flex-shrink-0" />
                <span className="text-sm font-bold text-black">Priority support</span>
              </div>
            </div>

            <Button 
              className="w-full h-12 rounded-full font-bold text-base transition-colors duration-300 mt-auto"
              style={{ 
                backgroundColor: 'var(--color-black)', 
                color: 'var(--color-white)' 
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-blue)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-black)'}
            >
              Get started with Enterprise
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="w-full bg-white py-6 md:py-8 px-4 mt-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Mobile Layout */}
          <div className="flex flex-col items-center text-center space-y-4 md:hidden">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold" style={{ color: 'var(--color-black)' }}>HabitHub</h3>
              <p className="text-sm font-medium mt-1" style={{ color: 'var(--color-dark-blue)' }}>design and develop by jesusselimm</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link href="/" className="text-sm font-medium text-black hover:text-blue transition-colors">
                Home
              </Link>
              <Link href="/signup" className="text-sm font-medium text-black hover:text-blue transition-colors">
                Sign Up
              </Link>
              <Link href="#" className="text-sm font-medium text-black hover:text-blue transition-colors">
                Contact
              </Link>
            </div>
            
            <p className="text-xs font-medium" style={{ color: 'var(--color-dark-blue)' }}>© 2025 HabitHub. All rights reserved.</p>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex justify-between items-center">
            <div className="flex flex-col items-start">
              <h3 className="text-2xl font-bold" style={{ color: 'var(--color-black)' }}>HabitHub</h3>
              <p className="text-base font-medium" style={{ color: 'var(--color-dark-blue)' }}>design and develop by jesusselimm</p>
            </div>
            
            <div className="flex flex-col items-end gap-2">
              <div className="flex gap-6">
                <Link href="/" className="text-base font-medium text-black hover:text-blue transition-colors">
                  Home
                </Link>
                <Link href="/signup" className="text-base font-medium text-black hover:text-blue transition-colors">
                  Sign Up
                </Link>
                <Link href="#" className="text-base font-medium text-black hover:text-blue transition-colors">
                  Contact
                </Link>
              </div>
              <p className="text-base font-medium" style={{ color: 'var(--color-dark-blue)' }}>© 2025 HabitHub. All rights reserved.</p>
            </div>
          </div>
        </div>
      </motion.footer>
    </main>
  );
}
