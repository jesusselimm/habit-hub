"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Menu, X } from "lucide-react";
import { useState } from "react";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const steps = [
    { number: 1, title: "Create your account" },
    { number: 2, title: "Choose your first habits" },
    { number: 3, title: "Personalize your experience" },
    { number: 4, title: "Unlock your AI assistant" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

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
              style={{ color: '#B5B5B5' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-blue)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = '#B5B5B5')}
            >
              Pricing
            </a>
            <a
              href="/signup"
              className="text-sm font-bold transition-colors duration-200"
              style={{ color: 'var(--color-blue)' }}
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
              style={{ color: 'var(--color-black)' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="/signup"
              className="block text-sm font-bold py-2 transition-colors duration-200"
              style={{ color: 'var(--color-blue)' }}
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </a>
          </div>
        </motion.div>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] p-4 lg:p-8">
        {/* Big Container Frame */}
        <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="flex flex-col lg:flex-row min-h-[600px]">
            {/* Left Panel - Steps Frame */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12" style={{ background: 'linear-gradient(135deg, #0466C8 0%, #f5f5f5 100%)' }}>
              <div className="w-full max-w-md flex flex-col items-center text-center">
                {/* Logo Section */}
                <motion.div 
                  className="mb-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                    <img 
                      src="/image/HabitHub-Logo.svg" 
                      alt="HabitHub Logo" 
                      className="w-12 h-12"
                    />
                  </div>
                </motion.div>

                {/* Title */}
                <motion.div 
                  className="mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                  <h2 className="text-3xl font-bold text-black mb-4">
                    Get Started with Us
                  </h2>
                  <p className="text-gray-700 font-medium text-lg">
                    Complete these easy steps to<br />
                    register your account
                  </p>
                </motion.div>

                {/* Steps */}
                <motion.div 
                  className="space-y-4 w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {steps.map((step, index) => (
                    <motion.div
                      key={step.number}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.5, ease: "easeOut" }}
                      className="bg-white/30 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4"
                    >
                      <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg bg-blue-600 text-white">
                        {step.number}
                      </div>
                      <span className="font-semibold text-blue-600">
                        {step.title}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Right Panel - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12 bg-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md"
          >
            {/* Form Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-black mb-2">
                Create Your Account
              </h3>
              <p className="text-gray-600 font-medium">
                Enter your personal data to create<br />
                your account
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder=""
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder=""
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder=""
                />
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 pr-12"
                    placeholder=""
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Divider with OR */}
              <div className="flex items-center my-6">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="mx-4 text-gray-500 font-medium">or</span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>

              {/* Social Login Buttons */}
              <div className="space-y-3">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full h-12 rounded-xl border-gray-200 hover:bg-gray-50 flex items-center justify-center gap-3 font-medium"
                >
                  <img 
                    src="https://developers.google.com/identity/images/g-logo.png" 
                    alt="Google" 
                    className="w-5 h-5"
                  />
                  Google
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer 
        className="w-full bg-white py-6 md:py-8 px-4 mt-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
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
              <Link href="/pricing" className="text-sm font-medium text-black hover:text-blue transition-colors">
                Pricing
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
                <Link href="/pricing" className="text-base font-medium text-black hover:text-blue transition-colors">
                  Pricing
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
