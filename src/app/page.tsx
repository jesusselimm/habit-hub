"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Brain, ChartColumnBig, ClipboardClock, CircleFadingPlus, Rocket, Sparkles, User, UserRound, CircleFadingArrowUp, Menu, X } from "lucide-react";
import { CometCard } from "@/components/ui/comet-card";
import { WobbleCard } from "@/components/ui/wobble-card";
import { useState } from "react";
// Dynamic imports to prevent hydration issues
const RotatingText = dynamic(() => import("@/components/ui/rotatingText"), {
  ssr: false,
  loading: () => <span style={{ color: 'var(--color-white)' }}>Coach</span>
});

const InfiniteMovingCards = dynamic(() => import("@/components/ui/infinite-moving-cards").then(mod => ({ default: mod.InfiniteMovingCards })), {
  ssr: false,
  loading: () => (
    <div className="flex w-full overflow-hidden py-4 gap-4">
      {[...Array(3)].map((_, i) => (
        <div 
          key={i}
          className="relative w-[500px] max-w-full shrink-0 rounded-2xl border-2 border-white bg-gradient-to-b from-[#f5f5f5] to-[#ffffff] px-8 py-8 md:w-[550px] shadow-sm"
        >
          <div className="space-y-4 mb-6">
            <div className="h-4 bg-gradient-to-r from-gray/10 via-gray/20 to-gray/10 rounded-lg animate-pulse bg-[length:200%_100%] animate-shimmer"></div>
            <div className="h-4 bg-gradient-to-r from-gray/10 via-gray/20 to-gray/10 rounded-lg animate-pulse bg-[length:200%_100%] animate-shimmer w-5/6"></div>
            <div className="h-4 bg-gradient-to-r from-gray/10 via-gray/20 to-gray/10 rounded-lg animate-pulse bg-[length:200%_100%] animate-shimmer w-4/6"></div>
          </div>
          
          <div className="flex flex-row items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-gray/10 via-gray/20 to-gray/10 rounded-full animate-pulse bg-[length:200%_100%] animate-shimmer"></div>
            <div className="flex flex-col gap-2 flex-1">
              <div className="h-3 bg-gradient-to-r from-gray/10 via-gray/20 to-gray/10 rounded-md animate-pulse bg-[length:200%_100%] animate-shimmer w-20"></div>
              <div className="h-3 bg-gradient-to-r from-gray/10 via-gray/20 to-gray/10 rounded-md animate-pulse bg-[length:200%_100%] animate-shimmer w-24"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
});

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const rotatingWords = [
    "Coach",
    "Mentor",
    "Friend", 
    "Guide",
    "Partner"
  ];

  const testimonials = [
    {
      quote: "This app made tracking my habits feel effortless. I love the daily streaks and motivational boosts!",
      name: "Ada L.",
      title: "Early Adopter",
      image: "/image/testimonail/pexels-olly-774095.jpg"
    },
    {
      quote: "I finally found a habit tracker that actually keeps me motivated. Every day feels like progress!",
      name: "Sara G.",
      title: "Product Designer",
      image: "/image/testimonail/pexels-olly-834863.jpg"
    },
    {
      quote: "The AI suggestions are incredibly helpful. It's like having a personal coach in my pocket.",
      name: "Mark R.",
      title: "Software Engineer",
      image: "/image/testimonail/pexels-stefanstefancik.jpg"
    },
    {
      quote: "Simple, beautiful, and effective. This is exactly what I needed to build better habits.",
      name: "Emma K.",
      title: "Marketing Manager",
      image: "/image/testimonail/pexels-olly-789822.jpg"
    },
    {
      quote: "The analytics dashboard gives me such clear insights into my progress. Love it!",
      name: "Karen C.",
      title: "Data Scientist",
      image: "/image/testimonail/pexels-moose-photos-170195-1036623.jpg"
    }
  ];

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
              style={{ color: 'var(--color-blue)' }}
            >
              Home
            </Link>
            <a
              href="/pricing"
              className="text-sm font-bold transition-colors duration-200"
              style={{ color: '#B5B5B5' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-blue)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#B5B5B5')}
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
              style={{ color: 'var(--color-blue)' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <a
              href="/pricing"
              className="block text-sm font-bold py-2 transition-colors duration-200"
              style={{ color: 'var(--color-black)' }}
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

      {/* Hero Section */}
      <section id="home" className="w-full flex flex-col items-center justify-center py-20 px-4">
      <motion.h1 
        className="text-6xl md:text-7xl lg:text-8xl font-bold text-center mb-8 max-w-6xl leading-tight"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Habit tracking that works<br />
        like a{" "}
        <motion.span
            layout
            layoutId="rotating-box"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="inline-flex items-center justify-center bg-[#0466c8] rounded-full px-5 py-1" style={{ color: 'var(--color-dark-blue)' }}
          >
          <RotatingText
            texts={rotatingWords}
            mainClassName="inline-block overflow-hidden align-text-bottom"
            staggerFrom="last"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-120%", opacity: 0 }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            rotationInterval={2000}
          />
        </motion.span>
      </motion.h1>

        <motion.p 
          className="text-center text-black max-w-3xl mb-10 text-lg leading-relaxed mt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          A modern, intelligent platform that helps you build sustainable habits<br />
          and stay motivated on your journey to success.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
          >
            <Button className="w-full sm:w-[200px] md:w-[222px] h-[48px] md:h-[60px] rounded-full font-bold md:font-extrabold text-base md:text-lg shadow bg-black hover:bg-dark-blue text-white flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 group">
              <Sparkles className="size-5 md:size-6 transition-transform duration-300 group-hover:rotate-12" />
              Get Early Access
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
          >
            <Button variant="outline" className="w-full sm:w-[170px] md:w-[182px] h-[48px] md:h-[60px] rounded-full font-bold md:font-extrabold text-base md:text-lg border-gray text-black hover:bg-light-gray flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1 hover:border-dark-blue group">
              <UserRound className="size-5 md:size-6 transition-transform duration-300 group-hover:scale-110" />
              Contact Us
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Feature Cards */}
      <motion.section 
        className="w-full max-w-6xl mx-auto py-12 md:py-16 px-4 mt-12 md:mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
        {/* Easy Tracking */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
        >
          <CometCard>
          <div className="border-2 border-white bg-gradient-to-b from-[#f5f5f5] to-[#ffffff] rounded-2xl p-4 md:p-6 shadow-sm w-[240px] h-[160px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] transform rotate-[-8deg] flex flex-col justify-between">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue/10 rounded-full flex items-center justify-center mb-3 md:mb-6">
              <ClipboardClock className="size-8 md:size-10" style={{ color: 'var(--color-dark-blue)' }} />
            </div>
            <h3 className="text-sm md:text-base font-bold mb-1 md:mb-2" style={{ color: 'var(--color-black)' }}>Easy Tracking</h3>
            <p className="font-medium md:font-bold mb-2 md:mb-4 text-xs md:text-sm" style={{ color: 'var(--color-gray)' }}>Track your habits <strong style={{ color: 'var(--color-black)' }}>effortlessly</strong> with our clean, <strong style={{ color: 'var(--color-black)' }}>intuitive interface</strong>.</p>
          </div>
        </CometCard>
        </motion.div>

        {/* AI Suggestion */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
        >
          <CometCard>
            <div className="border-2 border-white bg-gradient-to-b from-[#f5f5f5] to-[#ffffff] rounded-2xl p-4 md:p-6 shadow-sm w-[240px] h-[160px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] transform rotate-[4deg] flex flex-col justify-between" style={{ color: 'var(--color-dark-blue)' }}>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue/10 rounded-full flex items-center justify-center mb-3 md:mb-6">
                <Brain className="size-8 md:size-10" style={{ color: 'var(--color-dark-blue)' }} />
              </div>
              <h3 className="text-sm md:text-base font-bold mb-1 md:mb-2" style={{ color: 'var(--color-black)' }} >AI Suggestion</h3>
              <p className="font-medium md:font-bold mb-2 md:mb-4 text-xs md:text-sm" style={{ color: 'var(--color-gray)' }}>Get <strong style={{ color: 'var(--color-black)' }}>personalized</strong> habit tips and reminders, powered by <strong style={{ color: 'var(--color-black)' }}>smart AI</strong>.</p>
            </div>
          </CometCard>
        </motion.div>

        {/* Motivation Boost */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
        >
          <CometCard>
            <div className="border-2 border-white bg-gradient-to-b from-[#f5f5f5] to-[#ffffff] rounded-2xl p-4 md:p-6 shadow-sm w-[240px] h-[160px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] transform rotate-[-8deg] flex flex-col justify-between" style={{ color: 'var(--color-dark-blue)' }}>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue/10 rounded-full flex items-center justify-center mb-3 md:mb-6">
                <Rocket className="size-8 md:size-10" style={{ color: 'var(--color-dark-blue)' }} />
              </div>
              <h3 className="text-sm md:text-base font-bold mb-1 md:mb-2" style={{ color: 'var(--color-black)' }} >Motivation Boost</h3>
              <p className="font-medium md:font-bold mb-2 md:mb-4 text-xs md:text-sm" style={{ color: 'var(--color-gray)' }}>Stay <strong style={{ color: 'var(--color-black)' }}>inspired</strong> with daily <strong style={{ color: 'var(--color-black)' }}>streaks, progress charts,</strong> and <strong style={{ color: 'var(--color-black)' }}>positive</strong> feedback.</p>
            </div>
          </CometCard>
        </motion.div>

        {/* Detailed Analytics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
        >
          <CometCard>
            <div className="border-2 border-white bg-gradient-to-b from-[#f5f5f5] to-[#ffffff] rounded-2xl p-4 md:p-6 shadow-sm w-[240px] h-[160px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] transform rotate-[8deg] flex flex-col justify-between" style={{ color: 'var(--color-dark-blue)' }}>
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue/10 rounded-full flex items-center justify-center mb-3 md:mb-6">
                <ChartColumnBig className="size-8 md:size-10" style={{ color: 'var(--color-dark-blue)' }} />
              </div>
              <h3 className="text-sm md:text-base font-bold mb-1 md:mb-2" style={{ color: 'var(--color-black)' }} >Detailed Analytics</h3>
              <p className="font-medium md:font-bold mb-2 md:mb-4 text-xs md:text-sm" style={{ color: 'var(--color-gray)' }}><strong style={{ color: 'var(--color-black)' }}>Visualize</strong> your journey and <strong style={{ color: 'var(--color-black)' }}>spot patterns</strong> to improve every day.</p>
            </div>
          </CometCard>
        </motion.div>
        </div>
      </motion.section>

      {/* Instant Onboarding Section */}
      <motion.section 
        className="w-full max-w-6xl mx-auto py-12 md:py-20 px-4 text-center mt-12 md:mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.0 }}
      >
        <motion.h2 
          className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-black"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2, ease: "easeOut" }}
        >
          Instant Onboarding
        </motion.h2>
        <motion.p 
          className="text-center max-w-4xl mx-auto mb-10 md:mb-16 text-base md:text-lg leading-relaxed px-4" 
          style={{ color: 'var(--color-black)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.4, ease: "easeOut" }}
        >
          &quot;No more endless forms or complex dashboards. Begin tracking
          and improving your habits right away, with a platform that works
          as intuitively as you do.&quot;
        </motion.p>
        
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 max-w-4xl mx-auto justify-items-center">
          {/* Step 1: Create Account */}
          <motion.div 
            className="border-2 border-white bg-gradient-to-b from-[#f5f5f5] to-[#ffffff] rounded-2xl p-4 md:p-6 shadow-sm w-full max-w-[280px] h-[140px] md:h-[170px] sm:w-[200px] sm:h-[170px] flex flex-col text-left justify-end" 
            style={{ color: 'var(--color-dark-blue)' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.6, ease: "easeOut" }}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue/10 rounded-full flex items-center justify-center mb-4 md:mb-6">
              <User className="size-8 md:size-10" style={{ color: 'var(--color-black)' }} />
            </div>
            <p className="text-sm md:text-base font-bold mb-1 md:mb-2" style={{ color: 'var(--color-gray)' }}>Step-1:</p>
            <h3 className="text-sm md:text-base font-bold" style={{ color: 'var(--color-blue)' }}>Create Account</h3>
          </motion.div>

          {/* Step 2: Add Habits */}
          <motion.div 
            className="border-2 border-white bg-gradient-to-b from-[#f5f5f5] to-[#ffffff] rounded-2xl p-4 md:p-6 shadow-sm w-full max-w-[280px] h-[140px] md:h-[170px] sm:w-[200px] sm:h-[170px] flex flex-col text-left justify-end" 
            style={{ color: 'var(--color-dark-blue)' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.8, ease: "easeOut" }}
          >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue/10 rounded-full flex items-center justify-center mb-4 md:mb-6">
              <CircleFadingPlus className="size-8 md:size-10" style={{ color: 'var(--color-black)' }} />
            </div>
            <p className="text-sm md:text-base font-bold mb-1 md:mb-2" style={{ color: 'var(--color-gray)' }}>Step-2:</p>
            <h3 className="text-sm md:text-base font-bold" style={{ color: 'var(--color-blue)' }}>Add Habits</h3>
          </motion.div>

          {/* Step 3: Track & Improve */}
          <motion.div 
            className="border-2 border-white bg-gradient-to-b from-[#f5f5f5] to-[#ffffff] rounded-2xl p-4 md:p-6 shadow-sm w-full max-w-[280px] h-[140px] md:h-[170px] sm:w-[200px] sm:h-[170px] flex flex-col text-left justify-end" 
            style={{ color: 'var(--color-dark-blue)' }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.0, ease: "easeOut" }}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-blue/10 rounded-full flex items-center justify-center mb-4 md:mb-6">
              <CircleFadingArrowUp className="size-8 md:size-10" style={{ color: 'var(--color-black)' }} />
            </div>
            <p className="text-sm md:text-base font-bold mb-1 md:mb-2" style={{ color: 'var(--color-gray)' }}>Step-3:</p>
            <h3 className="text-sm md:text-base font-bold" style={{ color: 'var(--color-blue)' }}>Track & Improve</h3>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        id="features" 
        className="w-full max-w-6xl mx-auto text-center py-12 md:py-20 px-4 mt-12 md:mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 3.2 }}
      >
        <motion.h2 
          className="text-lg md:text-xl font-bold mb-10 md:mb-16 text-black"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3.4, ease: "easeOut" }}
        >
          Features
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Streak Calendar */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.6, ease: "easeOut" }}
          >
            <WobbleCard containerClassName="bg-gradient-to-b from-[#f5f5f5] to-[#ffffff] h-[220px] md:h-[280px]">
                    <div className="h-full flex flex-col text-left relative z-10">
          <div className="flex-1 flex items-start justify-center">
            <img 
              src="/image/features/calendar.png" 
              alt="Streak Calendar" 
              className="w-32 h-32 md:w-48 md:h-48 object-contain"
            />
          </div>
          <div className="pb-4 md:pb-6">
            <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4" style={{ color: 'var(--color-black)' }}>
              Streak Calendar
            </h3>
            <p className="text-sm md:text-base font-medium md:font-bold" style={{ color: 'var(--color-gray)' }}>
              Track your daily <strong className="font-bold" style={{ color: 'var(--color-dark-blue)' }}>streaks</strong> and <strong className="font-bold" style={{ color: 'var(--color-dark-blue)' }}>never miss</strong> a habit.
            </p>
          </div>
        </div>
          </WobbleCard>
          </motion.div>

          {/* AI-powered Tips */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 3.8, ease: "easeOut" }}
          >
            <WobbleCard containerClassName="bg-gradient-to-b from-[#f5f5f5] to-[#ffffff] h-[230px] md:h-[300px]">
            <div className="h-full flex flex-col text-left relative z-10">
              <div className="flex-1 flex items-center justify-center">
                <img 
                  src="/image/features/idea.png" 
                  alt="AI-powered Tips" 
                  className="w-32 h-32 md:w-48 md:h-48 object-contain"
                />
              </div>
              <div className="pb-4 md:pb-6">
                <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4" style={{ color: 'var(--color-black)' }}>
                  AI-powered Tips
                </h3>
                <p className="text-sm md:text-base font-medium md:font-bold" style={{ color: 'var(--color-gray)' }}>
                  Get <strong className="font-bold" style={{ color: 'var(--color-dark-blue)' }}>personalized suggestions</strong> to boost your progress.
                </p>
              </div>
            </div>
          </WobbleCard>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Analytics Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 4.0, ease: "easeOut" }}
          >
            <WobbleCard containerClassName="bg-gradient-to-b from-[#f5f5f5] to-[#ffffff] h-[230px] md:h-[300px]">
            <div className="h-full flex flex-col text-left relative z-10">
              <div className="flex-1 flex items-center justify-center">
                <img 
                  src="/image/features/analitics.png" 
                  alt="Analytics Dashboard" 
                  className="w-32 h-32 md:w-48 md:h-48 object-contain"
                />
              </div>
              <div className="pb-4 md:pb-6">
                <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4" style={{ color: 'var(--color-black)' }}>
                  Analytics Dashboard
                </h3>
                <p className="text-sm md:text-base font-medium md:font-bold" style={{ color: 'var(--color-gray)' }}>
                  Visualize your improvement with <strong className="font-bold" style={{ color: 'var(--color-dark-blue)' }}>clear, beautiful charts</strong>.
                </p>
              </div>
            </div>
          </WobbleCard>
          </motion.div>

          {/* Motivation Reminders */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 4.2, ease: "easeOut" }}
          >
            <WobbleCard containerClassName="bg-gradient-to-b from-[#f5f5f5] to-[#ffffff] h-[230px] md:h-[300px]">
            <div className="h-full flex flex-col text-left relative z-10">
              <div className="flex-1 flex items-center justify-center">
                <img 
                  src="/image/features/reminders.png" 
                  alt="Motivation Reminders" 
                  className="w-32 h-32 md:w-48 md:h-48 object-contain"
                />
              </div>
              <div className="pb-4 md:pb-6">
                <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4" style={{ color: 'var(--color-black)' }}>
                  Motivation Reminders
                </h3>
                <p className="text-sm md:text-base font-medium md:font-bold" style={{ color: 'var(--color-gray)' }}>
                  Stay inspired with <strong className="font-bold" style={{ color: 'var(--color-dark-blue)' }}>smart notifications</strong> and <strong className="font-bold" style={{ color: 'var(--color-dark-blue)' }}>milestone rewards</strong>.
                </p>
              </div>
            </div>
          </WobbleCard>
          </motion.div>
        </div>

        {/* Flexible Habit Tracking - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 4.4, ease: "easeOut" }}
        >
          <WobbleCard containerClassName="bg-gradient-to-b from-[#f5f5f5] to-[#ffffff] h-[240px] md:h-[300px]">
          <div className="h-full flex flex-col text-left relative z-10">
            <div className="flex-1 flex items-center justify-center md:justify-end">
              <img 
                src="/image/features/tracking.png" 
                alt="Flexible Habit Tracking" 
                className="w-36 h-36 md:w-56 md:h-56 object-contain"
              />
            </div>
            <div className="pb-4 md:pb-6">
              <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4" style={{ color: 'var(--color-black)' }}>
                Flexible Habit Tracking
              </h3>
              <p className="text-sm md:text-base font-medium md:font-bold max-w-md" style={{ color: 'var(--color-gray)' }}>
                Adapt your habits <strong className="font-bold" style={{ color: 'var(--color-dark-blue)' }}>easily</strong>, however you want.
              </p>
            </div>
          </div>
        </WobbleCard>
        </motion.div>
      </motion.section>

      <motion.section 
        className="w-full max-w-6xl mx-auto text-center py-12 md:py-20 px-4 mt-6 md:mt-10 flex justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 4.6, ease: "easeOut" }}
      >
        <Button className="w-full max-w-[280px] md:w-[300px] h-[52px] md:h-[60px] rounded-full font-bold md:font-extrabold text-base md:text-lg shadow bg-black text-white flex items-center justify-center gap-2 border-2 border-transparent transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black mx-4 md:mx-0" style={{ '--hover-border-color': 'var(--color-blue)' } as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-blue)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}>
            <Sparkles className="size-5 md:size-6 relative z-10 transition-colors duration-300 group-hover:text-black" />
            <span className="relative z-10 transition-colors duration-300">Start Building Your Habits Today</span>
          </Button>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        id="testimonials" 
        className="w-full max-w-7xl mx-auto text-center py-12 md:py-20 px-4 mt-6 md:mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 4.8 }}
      >
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          pauseOnHover={true}
          className="mb-20"
        />
      </motion.section>


      {/* Footer */}
      <motion.footer 
        className="w-full bg-white py-6 md:py-8 px-4 mt-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 5.0, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Mobile Layout */}
          <div className="flex flex-col items-center text-center space-y-4 md:hidden">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-bold" style={{ color: 'var(--color-black)' }}>HabitHub</h3>
              <p className="text-sm font-medium mt-1" style={{ color: 'var(--color-dark-blue)' }}>design and develop by jesusselimm</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link href="/pricing" className="text-sm font-medium text-black hover:text-blue transition-colors">
                Pricing
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
                <Link href="/pricing" className="text-base font-medium text-black hover:text-blue transition-colors">
                  Pricing
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