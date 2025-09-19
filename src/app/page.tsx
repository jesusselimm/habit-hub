"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Brain, ChartColumnBig, ClipboardClock, CircleFadingPlus, Rocket, Sparkles, User, UserRound, CircleFadingArrowUp } from "lucide-react";
import { CometCard } from "@/components/ui/comet-card";
import { WobbleCard } from "@/components/ui/wobble-card";
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

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
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
        </div>
        </nav>

      {/* Hero Section */}
      <section id="home" className="w-full flex flex-col items-center justify-center py-20 px-4">
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-center mb-8 max-w-6xl leading-tight">
        Habit tracking that works<br />
        like a{" "}
        <motion.span
            layout
            layoutId="rotating-box"
            transition={{ type: "spring", damping: 25, stiffness: 300, duration: 2 }}
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
      </h1>

        <p className="text-center text-black max-w-3xl mb-10 text-lg leading-relaxed mt-4">
          A modern, intelligent platform that helps you build sustainable habits<br />
          and stay motivated on your journey to success.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Button className="w-[222px] h-[60px] rounded-full font-extrabold text-lg shadow bg-black hover:bg-dark-blue text-white flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 group">
            <Sparkles className="size-6 transition-transform duration-300 group-hover:rotate-12" />
            Get Early Access
          </Button>
          <Button variant="outline" className="w-[182px] h-[60px] rounded-full font-extrabold text-lg border-gray text-black hover:bg-light-gray flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1 hover:border-dark-blue group">
            <UserRound className="size-6 transition-transform duration-300 group-hover:scale-110" />
            Contact Us
          </Button>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="w-full max-w-6xl mx-auto py-16 px-4 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {/* Easy Tracking */}
        <CometCard>
          <div className="border-2 border-white bg-gradient-to-b from-[#f5f5f5] to-[#ffffff] rounded-2xl p-6 shadow-sm w-[280px] h-[200px] sm:w-[200px] sm:h-[200px] transform rotate-[-8deg] flex flex-col justify-between">
            <div className="w-12 h-12 bg-blue/10 rounded-full flex items-center justify-center mb-6">
              <ClipboardClock className="size-10" style={{ color: 'var(--color-dark-blue)' }} />
            </div>
            <h3 className="text-base font-bold mb-2" style={{ color: 'var(--color-black)' }}>Easy Tracking</h3>
            <p className="font-bold mb-4 text-sm" style={{ color: 'var(--color-gray)' }}>Track your habits <strong style={{ color: 'var(--color-black)' }}>effortlessly</strong> with our clean, <strong style={{ color: 'var(--color-black)' }}>intuitive interface</strong>.</p>
          </div>
        </CometCard>

        {/* AI Suggestion */}
          <CometCard>
            <div className="border-2 border-white bg-gradient-to-b from-[#f5f5f5] to-[#ffffff] rounded-2xl p-6 shadow-sm w-[280px] h-[200px] sm:w-[200px] sm:h-[200px] transform rotate-[4deg] flex flex-col justify-between" style={{ color: 'var(--color-dark-blue)' }}>
              <div className="w-12 h-12 bg-blue/10 rounded-full flex items-center justify-center mb-6">
                <Brain className="size-10" style={{ color: 'var(--color-dark-blue)' }} />
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: 'var(--color-black)' }} >AI Suggestion</h3>
              <p className="font-bold mb-4 text-sm" style={{ color: 'var(--color-gray)' }}>Get <strong style={{ color: 'var(--color-black)' }}>personalized</strong> habit tips and reminders, powered by <strong style={{ color: 'var(--color-black)' }}>smart AI</strong>.</p>
            </div>
          </CometCard>

        {/* Motivation Boost */}
          <CometCard>
            <div className="border-2 border-white bg-gradient-to-b from-[#f5f5f5] to-[#ffffff] rounded-2xl p-6 shadow-sm w-[280px] h-[200px] sm:w-[200px] sm:h-[200px] transform rotate-[-8deg] flex flex-col justify-between" style={{ color: 'var(--color-dark-blue)' }}>
              <div className="w-12 h-12 bg-blue/10 rounded-full flex items-center justify-center mb-6">
                <Rocket className="size-10" style={{ color: 'var(--color-dark-blue)' }} />
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: 'var(--color-black)' }} >Motivation Boost</h3>
              <p className="font-bold mb-4 text-sm" style={{ color: 'var(--color-gray)' }}>Stay <strong style={{ color: 'var(--color-black)' }}>inspired</strong> with daily <strong style={{ color: 'var(--color-black)' }}>streaks, progress charts,</strong> and <strong style={{ color: 'var(--color-black)' }}>positive</strong> feedback.</p>
            </div>
          </CometCard>

        {/* Detailed Analytics */}
          <CometCard>
            <div className="border-2 border-white bg-gradient-to-b from-[#f5f5f5] to-[#ffffff] rounded-2xl p-6 shadow-sm w-[280px] h-[200px] sm:w-[200px] sm:h-[200px] transform rotate-[8deg] flex flex-col justify-between" style={{ color: 'var(--color-dark-blue)' }}>
              <div className="w-12 h-12 bg-blue/10 rounded-full flex items-center justify-center mb-6">
                <ChartColumnBig className="size-10" style={{ color: 'var(--color-dark-blue)' }} />
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: 'var(--color-black)' }} >Detailed Analytics</h3>
              <p className="font-bold mb-4 text-sm" style={{ color: 'var(--color-gray)' }}><strong style={{ color: 'var(--color-black)' }}>Visualize</strong> your journey and <strong style={{ color: 'var(--color-black)' }}>spot patterns</strong> to improve every day.</p>
            </div>
          </CometCard>
        </div>
      </section>

      {/* Instant Onboarding Section */}
      <section className="w-full max-w-6xl mx-auto py-20 px-4 text-center mt-20">
        <h2 className="text-xl font-bold mb-6 text-black">Instant Onboarding</h2>
        <p className="text-center max-w-4xl mx-auto mb-16 text-l leading-relaxed" style={{ color: 'var(--color-black)' }}>
          &quot;No more endless forms or complex dashboards. Begin tracking<br />
          and improving your habits right away, with a platform that works<br />
          as intuitively as you do.&quot;
        </p>
        
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto justify-items-center">
          {/* Step 1: Create Account */}
          <div className="border-2 border-white bg-gradient-to-b from-[#f5f5f5] to-[#ffffff] rounded-2xl p-6 shadow-sm w-[280px] h-[170px] sm:w-[200px] sm:h-[170px] flex flex-col text-left justify-end" style={{ color: 'var(--color-dark-blue)' }}>
            <div className="w-12 h-12 bg-blue/10 rounded-full flex items-center justify-center mb-6">
              <User className="size-10" style={{ color: 'var(--color-black)' }} />
            </div>
            <p className="text-base font-bold mb-2" style={{ color: 'var(--color-gray)' }}>Step-1:</p>
            <h3 className="text-base font-bold" style={{ color: 'var(--color-blue)' }}>Create Account</h3>
          </div>

          {/* Step 2: Add Habits */}
          <div className="border-2 border-white bg-gradient-to-b from-[#f5f5f5] to-[#ffffff] rounded-2xl p-6 shadow-sm w-[280px] h-[170px] sm:w-[200px] sm:h-[170px] flex flex-col text-left justify-end" style={{ color: 'var(--color-dark-blue)' }}>
              <div className="w-12 h-12 bg-blue/10 rounded-full flex items-center justify-center mb-6">
              <CircleFadingPlus className="size-10" style={{ color: 'var(--color-black)' }} />
            </div>
            <p className="text-base font-bold mb-2" style={{ color: 'var(--color-gray)' }}>Step-2:</p>
            <h3 className="text-base font-bold" style={{ color: 'var(--color-blue)' }}>Add Habits</h3>
          </div>

          {/* Step 3: Track & Improve */}
          <div className="border-2 border-white bg-gradient-to-b from-[#f5f5f5] to-[#ffffff] rounded-2xl p-6 shadow-sm w-[280px] h-[170px] sm:w-[200px] sm:h-[170px] flex flex-col text-left justify-end" style={{ color: 'var(--color-dark-blue)' }}>
            <div className="w-12 h-12 bg-blue/10 rounded-full flex items-center justify-center mb-6">
              <CircleFadingArrowUp className="size-10" style={{ color: 'var(--color-black)' }} />
            </div>
            <p className="text-base font-bold mb-2" style={{ color: 'var(--color-gray)' }}>Step-3:</p>
            <h3 className="text-base font-bold" style={{ color: 'var(--color-blue)' }}>Track & Improve</h3>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full max-w-6xl mx-auto text-center py-20 px-4 mt-20">
        <h2 className="text-xl font-bold mb-16 text-black">Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Streak Calendar */}
          <WobbleCard containerClassName="bg-gradient-to-b from-[#f5f5f5] to-[#ffffff] h-[280px]">
                    <div className="h-full flex flex-col text-left relative z-10">
          <div className="flex-1 flex items-start justify-center">
            <img 
              src="/image/features/calendar.png" 
              alt="Streak Calendar" 
              className="w-48 h-48 object-contain"
            />
          </div>
          <div className="pb-6">
            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-black)' }}>
              Streak Calendar
            </h3>
            <p className="text-base font-bold" style={{ color: 'var(--color-gray)' }}>
              Track your daily <strong className="font-bold" style={{ color: 'var(--color-dark-blue)' }}>streaks</strong> and <strong className="font-bold" style={{ color: 'var(--color-dark-blue)' }}>never miss</strong> a habit.
            </p>
          </div>
        </div>
          </WobbleCard>

          {/* AI-powered Tips */}
          <WobbleCard containerClassName="bg-gradient-to-b from-[#f5f5f5] to-[#ffffff] h-[300px]">
            <div className="h-full flex flex-col text-left relative z-10">
              <div className="flex-1 flex items-center justify-center">
                <img 
                  src="/image/features/idea.png" 
                  alt="AI-powered Tips" 
                  className="w-48 h-48 object-contain"
                />
              </div>
              <div className="pb-6">
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-black)' }}>
                  AI-powered Tips
                </h3>
                <p className="text-base font-bold" style={{ color: 'var(--color-gray)' }}>
                  Get <strong className="font-bold" style={{ color: 'var(--color-dark-blue)' }}>personalized suggestions</strong> to boost your progress.
                </p>
              </div>
            </div>
          </WobbleCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Analytics Dashboard */}
          <WobbleCard containerClassName="bg-gradient-to-b from-[#f5f5f5] to-[#ffffff] h-[300px]">
            <div className="h-full flex flex-col text-left relative z-10">
              <div className="flex-1 flex items-center justify-center">
                <img 
                  src="/image/features/analitics.png" 
                  alt="Analytics Dashboard" 
                  className="w-48 h-48 object-contain"
                />
              </div>
              <div className="pb-6">
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-black)' }}>
                  Analytics Dashboard
                </h3>
                <p className="text-base font-bold" style={{ color: 'var(--color-gray)' }}>
                  Visualize your improvement with <strong className="font-bold" style={{ color: 'var(--color-dark-blue)' }}>clear, beautiful charts</strong>.
                </p>
              </div>
            </div>
          </WobbleCard>

          {/* Motivation Reminders */}
          <WobbleCard containerClassName="bg-gradient-to-b from-[#f5f5f5] to-[#ffffff] h-[300px]">
            <div className="h-full flex flex-col text-left relative z-10">
              <div className="flex-1 flex items-center justify-center">
                <img 
                  src="/image/features/reminders.png" 
                  alt="Motivation Reminders" 
                  className="w-48 h-48 object-contain"
                />
              </div>
              <div className="pb-6">
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-black)' }}>
                  Motivation Reminders
                </h3>
                <p className="text-base font-bold" style={{ color: 'var(--color-gray)' }}>
                  Stay inspired with <strong className="font-bold" style={{ color: 'var(--color-dark-blue)' }}>smart notifications</strong> and <strong className="font-bold" style={{ color: 'var(--color-dark-blue)' }}>milestone rewards</strong>.
                </p>
              </div>
            </div>
          </WobbleCard>
        </div>

        {/* Flexible Habit Tracking - Full Width */}
        <WobbleCard containerClassName="bg-gradient-to-b from-[#f5f5f5] to-[#ffffff] h-[300px]">
          <div className="h-full flex flex-col text-left relative z-10">
            <div className="flex-1 flex items-center justify-end">
              <img 
                src="/image/features/tracking.png" 
                alt="Flexible Habit Tracking" 
                className="w-56 h-56 object-contain"
              />
            </div>
            <div className="pb-6">
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-black)' }}>
                Flexible Habit Tracking
              </h3>
              <p className="text-base font-bold max-w-md" style={{ color: 'var(--color-gray)' }}>
                Adapt your habits <strong className="font-bold" style={{ color: 'var(--color-dark-blue)' }}>easily</strong>, however you want.
              </p>
            </div>
          </div>
        </WobbleCard>
      </section>

      <section className="w-full max-w-6xl mx-auto text-center py-20 px-4 mt-10 flex justify-center">
        <Button className="w-[300px] h-[60px] rounded-full font-extrabold text-lg shadow bg-black text-white flex items-center justify-center gap-2 border-2 border-transparent transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black" style={{ '--hover-border-color': 'var(--color-blue)' } as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-blue)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}>
            <Sparkles className="size-6 relative z-10 transition-colors duration-300 group-hover:text-black" />
            <span className="relative z-10 transition-colors duration-300">Start Building Your Habits Today</span>
          </Button>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full max-w-7xl mx-auto text-center py-20 px-4 mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          pauseOnHover={true}
          className="mb-20"
        />
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