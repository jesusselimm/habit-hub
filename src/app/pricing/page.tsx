"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import "../globals.css";


export default function PricingPage() {
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

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
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
        </div>
      </nav>

      {/* Header Section */}
      <section className="w-full max-w-6xl mx-auto text-center py-20 px-4">
        <h1 className="text-6xl md:text-7xl font-bold text-black mb-8">
          Plans and Pricing
        </h1>
        <p className="text-xl text-black max-w-2xl mx-auto mb-16 leading-relaxed">
          Receive unlimited credits when you pay yearly,<br />
          and save on your plan
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="w-full max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          
          {/* Free Plan */}
          <div className="border-2 bg-white rounded-2xl p-8 w-full max-w-[350px] max-h-[550px] flex flex-col" style={{ borderColor: 'var(--color-blue)' }}>
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
          </div>

          {/* Pro Plan */}
          <div className="border-2 bg-white rounded-2xl p-8 w-full max-w-[350px] max-h-[550px] flex flex-col" style={{ borderColor: 'var(--color-blue)' }}>
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
          </div>

          {/* Enterprise Plan */}
          <div className="border-2 bg-white rounded-2xl p-8 w-full max-w-[350px] max-h-[550px] flex flex-col" style={{ borderColor: 'var(--color-blue)' }}>
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
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-white py-8 px-4 mt-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold" style={{ color: 'var(--color-black)' }}>HabitHub</h3>
            <p className="text-base font-bold" style={{ color: 'var(--color-dark-blue)' }}>design and develop by jesusselimm</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex gap-6">
              <a href="#" className="text-base font-bold text-black hover:text-blue transition-colors">
                About
              </a>
              <a href="#" className="text-base font-bold text-black hover:text-blue transition-colors">
                Contact
              </a>
              <a href="#" className="text-base font-bold text-black hover:text-blue transition-colors">
                Privacy
              </a>
            </div>
            <p className="text-base font-bold" style={{ color: 'var(--color-dark-blue)' }}>© 2025 HabitHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
