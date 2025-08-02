"use client";
import RotatingText from "@/components/ui/rotatingText";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, ChartColumnBig, ClipboardClock, CircleFadingPlus, Plus, Rocket, RotateCw, Sparkles, User, UserRound, CircleFadingArrowUp } from "lucide-react";
import { CometCard } from "@/components/ui/comet-card";

export default function LandingPage() {
  const rotatingWords = [
    "Coach",
    "Mentor",
    "Friend", 
    "Guide",
    "Partner"
  ];

  return (
    <main className="bg-light-gray min-h-screen">
      {/* Navigation */}
      <nav className="w-full flex justify-center pt-6 pb-4">
        <div className="bg-white rounded-full shadow-sm flex px-2 py-1 gap-2">
          <a
            href="#"
            className="text-sm font-medium px-4 py-2 rounded-full bg-black text-white"
          >
            Let's Start
          </a>
          <a
            href="#"
            className="text-sm font-medium px-4 py-2 rounded-full text-gray hover:bg-light-gray transition"
          >
            Benefits
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-20 px-4">
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

        <p className="text-center text-black max-w-3xl mb-10 text-xl leading-relaxed mt-4">
          A modern, intelligent platform that helps you build sustainable habits<br />
          and stay motivated on your journey to success.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="w-[222px] h-[60px] rounded-full font-extrabold text-xl shadow bg-black hover:bg-dark-blue text-white flex items-center justify-center gap-2">
            <Sparkles className="size-6" />
            Get Early Access
          </Button>
          <Button variant="outline" className="w-[182px] h-[60px] rounded-full font-extrabold text-xl border-gray text-black hover:bg-light-gray flex items-center justify-center gap-2">
            <UserRound className="size-6" />
            Contact Us
          </Button>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="w-full max-w-6xl mx-auto py-16 px-4 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Easy Tracking */}
        <CometCard>
          <div className="border-2 border-white bg-gradient-to-b from-[#f5f5f5] to-[#ffffff] rounded-2xl p-6 shadow-sm w-[200px] h-[200px] transform rotate-[-8deg] flex flex-col justify-between">
            <div className="w-12 h-12 bg-blue/10 rounded-full flex items-center justify-center mb-6">
              <ClipboardClock className="size-10" style={{ color: 'var(--color-dark-blue)' }} />
            </div>
            <h3 className="text-base font-bold mb-2" style={{ color: 'var(--color-black)' }}>Easy Tracking</h3>
            <p className="font-bold mb-4 text-sm" style={{ color: 'var(--color-gray)' }}>Track your habits <strong style={{ color: 'var(--color-black)' }}>effortlessly</strong> with our clean, <strong style={{ color: 'var(--color-black)' }}>intuitive interface</strong>.</p>
          </div>
        </CometCard>

        {/* AI Suggestion */}
          <CometCard>
            <div className="border-2 border-white bg-gradient-to-b from-[#f5f5f5] to-[#ffffff] rounded-2xl p-6 shadow-sm w-[200px] h-[200px] transform rotate-[4deg] flex flex-col justify-between" style={{ color: 'var(--color-dark-blue)' }}>
              <div className="w-12 h-12 bg-blue/10 rounded-full flex items-center justify-center mb-6">
                <Brain className="size-10" style={{ color: 'var(--color-dark-blue)' }} />
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: 'var(--color-black)' }} >AI Suggestion</h3>
              <p className="font-bold mb-4 text-sm" style={{ color: 'var(--color-gray)' }}>Get <strong style={{ color: 'var(--color-black)' }}>personalized</strong> habit tips and reminders, powered by <strong style={{ color: 'var(--color-black)' }}>smart AI</strong>.</p>
            </div>
          </CometCard>

        {/* Motivation Boost */}
          <CometCard>
            <div className="border-2 border-white bg-gradient-to-b from-[#f5f5f5] to-[#ffffff] rounded-2xl p-6 shadow-sm w-[200px] h-[200px] transform rotate-[-8deg] flex flex-col justify-between" style={{ color: 'var(--color-dark-blue)' }}>
              <div className="w-12 h-12 bg-blue/10 rounded-full flex items-center justify-center mb-6">
                <Rocket className="size-10" style={{ color: 'var(--color-dark-blue)' }} />
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: 'var(--color-black)' }} >Motivation Boost</h3>
              <p className="font-bold mb-4 text-sm" style={{ color: 'var(--color-gray)' }}>Stay <strong style={{ color: 'var(--color-black)' }}>inspired</strong> with daily <strong style={{ color: 'var(--color-black)' }}>streaks, progress charts,</strong> and <strong style={{ color: 'var(--color-black)' }}>positive</strong> feedback.</p>
            </div>
          </CometCard>

        {/* Detailed Analytics */}
          <CometCard>
            <div className="border-2 border-white bg-gradient-to-b from-[#f5f5f5] to-[#ffffff] rounded-2xl p-6 shadow-sm w-[200px] h-[200px] transform rotate-[8deg] flex flex-col justify-between" style={{ color: 'var(--color-dark-blue)' }}>
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
          "No more endless forms or complex dashboards. Begin tracking<br />
          and improving your habits right away, with a platform that works<br />
          as intuitively as you do."
        </p>
        
        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {/* Step 1: Create Account */}
          <div className="border-2 border-white bg-gradient-to-b from-[#f5f5f5] to-[#ffffff] rounded-2xl p-6 shadow-sm w-[200px] h-[170px] flex flex-col text-left justify-end" style={{ color: 'var(--color-dark-blue)' }}>
            <div className="w-12 h-12 bg-blue/10 rounded-full flex items-center justify-center mb-6">
              <User className="size-10" style={{ color: 'var(--color-black)' }} />
            </div>
            <p className="text-base font-bold mb-2" style={{ color: 'var(--color-gray)' }}>Step-1:</p>
            <h3 className="text-base font-bold" style={{ color: 'var(--color-blue)' }}>Create Account</h3>
          </div>

          {/* Step 2: Add Habits */}
          <div className="border-2 border-white bg-gradient-to-b from-[#f5f5f5] to-[#ffffff] rounded-2xl p-6 shadow-sm w-[200px] h-[170px] flex flex-col text-left justify-end" style={{ color: 'var(--color-dark-blue)' }}>
              <div className="w-12 h-12 bg-blue/10 rounded-full flex items-center justify-center mb-6">
              <CircleFadingPlus className="size-10" style={{ color: 'var(--color-black)' }} />
            </div>
            <p className="text-base font-bold mb-2" style={{ color: 'var(--color-gray)' }}>Step-2:</p>
            <h3 className="text-base font-bold" style={{ color: 'var(--color-blue)' }}>Add Habits</h3>
          </div>

          {/* Step 3: Track & Improve */}
          <div className="border-2 border-white bg-gradient-to-b from-[#f5f5f5] to-[#ffffff] rounded-2xl p-6 shadow-sm w-[200px] h-[170px] flex flex-col text-left justify-end" style={{ color: 'var(--color-dark-blue)' }}>
            <div className="w-12 h-12 bg-blue/10 rounded-full flex items-center justify-center mb-6">
              <CircleFadingArrowUp className="size-10" style={{ color: 'var(--color-black)' }} />
            </div>
            <p className="text-base font-bold mb-2" style={{ color: 'var(--color-gray)' }}>Step-3:</p>
            <h3 className="text-base font-bold" style={{ color: 'var(--color-blue)' }}>Track & Improve</h3>
          </div>
        </div>
      </section>
    </main>
  );
}