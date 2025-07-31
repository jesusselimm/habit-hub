"use client";
import RotatingText from "@/components/ui/rotatingText";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
            className="inline-flex items-center justify-center bg-[#0466c8] text-black rounded-full px-5 py-1"
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

        <p className="text-center text-black max-w-3xl mb-10 text-xl leading-relaxed">
          A modern, intelligent platform that helps you build sustainable habits<br />
          and stay motivated on your journey to success.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="px-8 py-3 rounded-full font-semibold shadow bg-black hover:bg-dark-blue text-white flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
            Get Early Access
          </Button>
          <Button variant="outline" className="px-8 py-3 rounded-full font-semibold border-gray text-black hover:bg-light-gray flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Contact Us
          </Button>
        </div>

        

      </section>

      {/* Feature Cards */}
      <section className="w-full max-w-6xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* AI Suggestion */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="w-12 h-12 bg-blue/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">AI Suggestion</h3>
            <p className="text-gray mb-4">Get <strong>personalized</strong> habit tips and reminders, powered by <strong>smart AI</strong>.</p>
          </div>

          {/* Easy Tracking */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="w-12 h-12 bg-blue/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">Easy Tracking</h3>
            <p className="text-gray mb-4">Track your habits <strong>effortlessly</strong> with our clean, <strong>intuitive interface</strong>.</p>
          </div>

          {/* Detailed Analytics */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="w-12 h-12 bg-blue/10 rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">Detailed Analytics</h3>
            <p className="text-gray mb-4"><strong>Visualize</strong> your journey and <strong>spot patterns</strong> to improve every day.</p>
          </div>
        </div>
      </section>

      {/* Motivation Boost Section */}
      <section className="w-full max-w-4xl mx-auto py-16 px-4 text-center">
        <div className="bg-white rounded-2xl p-12 shadow-sm">
          <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4 text-black">Motivation Boost</h2>
          <p className="text-gray text-lg">
            Get <strong>inspired</strong> with daily <strong>streaks, progress charts,</strong> and <strong>positive feedback</strong>.
          </p>
        </div>
      </section>
    </main>
  );
}