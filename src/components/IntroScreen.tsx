'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const phases = [
    "Initializing F.A.I.T.H. Platform...",
    "Loading AI Intelligence Hub...", 
    "Connecting to $900M+ Portfolio...",
    "Synchronizing Investment Data...",
    "Establishing Secure Connection...",
    "Welcome to Houston 100"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15 + 5;
        
        if (newProgress >= 100) {
          setIsComplete(true);
          setTimeout(() => onComplete(), 1000);
          clearInterval(interval);
          return 100;
        }
        
        // Update phase based on progress
        const phaseIndex = Math.floor((newProgress / 100) * (phases.length - 1));
        setCurrentPhase(phaseIndex);
        
        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete, phases.length]);

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Background Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -100, -200],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Neural Network Animation */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full">
            <defs>
              <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="1"/>
                <stop offset="100%" stopColor="#1E40AF" stopOpacity="0"/>
              </radialGradient>
            </defs>
            {[...Array(20)].map((_, i) => (
              <motion.circle
                key={i}
                cx={`${Math.random() * 100}%`}
                cy={`${Math.random() * 100}%`}
                r="3"
                fill="url(#nodeGradient)"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </svg>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center text-white px-8 max-w-2xl">
          {/* Houston 100 Logo Animation */}
          <motion.div 
            className="mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
          >
            <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
              Hou<span className="relative">
                1
                <span className="absolute -top-2 -right-1 text-2xl italic text-cyan-300">00</span>
              </span>ston
            </div>
            <div className="text-sm tracking-[0.3em] text-blue-300 mt-2">
              INVESTMENT GROUP LLC
            </div>
          </motion.div>

          {/* F.A.I.T.H. Platform Indicator */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="text-2xl font-light tracking-wide text-cyan-300">
              F.A.I.T.H. Platform
            </div>
            <div className="text-sm text-blue-200 mt-1">
              Financial Analytics Intelligence Technology Hub
            </div>
          </motion.div>

          {/* Loading Phase Text */}
          <motion.div 
            className="mb-8 h-6"
            key={currentPhase}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-lg text-blue-100">
              {phases[currentPhase]}
            </div>
          </motion.div>

          {/* Progress Bar */}
          <div className="w-full max-w-md mx-auto mb-6">
            <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="text-sm text-blue-300 mt-2">
              {Math.round(progress)}% Complete
            </div>
          </div>

          {/* AUM Display */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="text-sm text-blue-200 mb-1">
              Assets Under Management
            </div>
            <motion.div 
              className="text-3xl font-bold text-yellow-400"
              animate={{ 
                textShadow: [
                  "0 0 10px rgba(255, 255, 0, 0.5)",
                  "0 0 20px rgba(255, 255, 0, 0.8)",
                  "0 0 10px rgba(255, 255, 0, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              $900M+
            </motion.div>
          </motion.div>

          {/* Completion Animation */}
          {isComplete && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl font-bold text-green-400">
                ✓ System Ready
              </div>
            </motion.div>
          )}
        </div>

        {/* Corner Tech Elements */}
        <div className="absolute top-4 left-4 text-xs text-blue-400 font-mono">
          <div>FAITH.SYS v2.1.0</div>
          <div>SECURE CONNECTION</div>
          <div>STATUS: ENCRYPTED</div>
        </div>
        
        <div className="absolute bottom-4 right-4 text-xs text-blue-400 font-mono">
          <div>ENTERPRISE GRADE</div>
          <div>SOC 2 COMPLIANT</div>
          <div>99.9% UPTIME</div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
