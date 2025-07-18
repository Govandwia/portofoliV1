'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Download, Mail, MapPin, GraduationCap, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { TypewriterText } from './TypewriterText';
import { FloatingElements } from './FloatingElements';
import { ParticleBackground } from './ParticleBackground';
import Confetti from 'react-confetti';

export function Hero() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window;
    setWindowDimensions({ width, height });
  }, []);

  const handleCelebration = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16 relative overflow-hidden">
      <ParticleBackground />
      <FloatingElements />
      
      {showConfetti && (
        <Confetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          recycle={false}
          numberOfPieces={200}
        />
      )}
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Badge variant="secondary" className="w-fit animate-pulse">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Available for opportunities
                  </Badge>
                </motion.div>
                
                <motion.h1 
                  className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Hi, I'm{' '}
                  <TypewriterText 
                    texts={[
                      'Govan Dwi Aditya',
                      'a Problem Solver',
                      'a Team Leader',
                      'a Full-Stack Developer'
                    ]}
                  />
                </motion.h1>
                
                <motion.p 
                  className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  Software Engineering Student with End-to-End Project Experience as a 
                  <motion.span 
                    className="text-blue-600 dark:text-blue-400 font-medium"
                    whileHover={{ scale: 1.05 }}
                  > Project Manager</motion.span>, 
                  <motion.span 
                    className="text-green-600 dark:text-green-400 font-medium"
                    whileHover={{ scale: 1.05 }}
                  > System Analyst</motion.span>, and 
                  <motion.span 
                    className="text-purple-600 dark:text-purple-400 font-medium"
                    whileHover={{ scale: 1.05 }}
                  > Full-Stack Developer</motion.span>
                </motion.p>
                
                <motion.p 
                  className="text-lg text-gray-600 dark:text-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  A problem-solving leader with 3 years of experience in leadership roles. 
                  I combine my background in project management and organizational leadership 
                  with technical skills in web/mobile development to build effective and impactful solutions.
                </motion.p>
                
                <motion.div 
                  className="flex items-center gap-4 text-gray-600 dark:text-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                >
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <GraduationCap className="w-5 h-5" />
                    <span>Universitas Gadjah Mada</span>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <MapPin className="w-5 h-5" />
                    <span>Yogyakarta, Indonesia</span>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-blue-800 dark:text-blue-200 font-medium">
                    🎯 Current GPA: 3.72/4.00
                  </p>
                </motion.div>
              </div>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
              >
                <Link href="/projects">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg">
                      View My Projects
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </motion.div>
                </Link>
                <Link href="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" variant="outline" className="border-2 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                      <Mail className="w-4 h-4 mr-2" />
                      Get in Touch
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Content - Profile Card */}
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="w-full max-w-md shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-blue-100 dark:border-blue-800">
                <CardContent className="p-8 text-center">
                  <motion.div 
                    className="mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                  >
                    <motion.div 
                      className="relative w-40 h-40 mx-auto mb-4 cursor-pointer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleCelebration}
                    >
                      {/* Glowing border ring - smaller, behind the photo */}
                      <motion.div
                        className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 z-0"
                        animate={{ 
                          boxShadow: [
                            "0 0 20px rgba(59, 130, 246, 0.3)",
                            "0 0 30px rgba(147, 51, 234, 0.4)",
                            "0 0 20px rgba(59, 130, 246, 0.3)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      
                      {/* Photo that extends over the border */}
                      <div className="relative z-10 w-full h-full">
                        <Image
                          src="/images/20231011_150711.png"
                          alt="Govan Dwi Aditya"
                          width={160}
                          height={160}
                          className="w-full h-full object-cover rounded-full shadow-xl border-4 border-white dark:border-gray-800"
                          priority
                        />
                      </div>
                    </motion.div>
                    <motion.h3 
                      className="text-xl font-bold text-gray-900 dark:text-white mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.0 }}
                    >
                      Govan Dwi Aditya
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600 dark:text-gray-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                    >
                      Software Engineering Student
                    </motion.p>
                  </motion.div>
                  
                  <div className="space-y-4">
                    {[
                      { label: 'Education', value: 'UGM', delay: 1.4 },
                      { label: 'GPA', value: '3.72/4.00', delay: 1.6 },
                      { label: 'Experience', value: '2+ Years', delay: 1.8 }
                    ].map((item, index) => (
                      <motion.div 
                        key={item.label}
                        className="flex justify-between items-center p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: item.delay }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <span className="text-gray-600 dark:text-gray-300">{item.label}</span>
                        <span className="font-medium text-gray-900 dark:text-white">{item.value}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.0 }}
                  >
                    <Button 
                      className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white" 
                      onClick={() => {
                        handleCelebration();
                        window.open('https://drive.google.com/file/d/1j8PkbRKtlQ09MqKxwOs9FqvZpE8srNbF/view?usp=sharing', '_blank');
                      }}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Resume
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}