'use client';

import { MotionDiv, MotionH1 } from '@/components/motion-wrappers';
import { Education } from '@/components/Education';
import { InteractiveSkills } from '@/components/InteractiveSkills';
import { FunStats } from '@/components/FunStats';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, GraduationCap, User, Heart, Coffee } from 'lucide-react';

export default function AboutPageContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <MotionDiv 
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <MotionH1 
              className="text-4xl font-bold text-gray-900 dark:text-white"
              animate={{ 
                background: [
                  'linear-gradient(45deg, #3B82F6, #8B5CF6)',
                  'linear-gradient(135deg, #8B5CF6, #EC4899)',
                  'linear-gradient(225deg, #EC4899, #3B82F6)',
                  'linear-gradient(315deg, #3B82F6, #8B5CF6)'
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{ backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}
            >
              About Me
            </MotionH1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Get to know my journey and what drives me ✨
            </p>
          </MotionDiv>

          {/* Fun Stats */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FunStats />
          </MotionDiv>

          {/* Story Section */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
          <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 border-blue-100 dark:border-blue-800">
            <CardContent className="p-0">
              <div className="flex items-center gap-3 mb-6">
                <MotionDiv
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Heart className="w-6 h-6 text-red-500" />
                </MotionDiv>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  My Story
                </h2>
                <MotionDiv
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: 1 }}
                >
                  <Coffee className="w-6 h-6 text-amber-600" />
                </MotionDiv>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
                <p className="mb-4">
                  🚀 My journey in technology began with a passion for solving problems and leading teams. 
                  From my early days in high school leadership roles to my current position as a Software 
                  Engineering student at Universitas Gadjah Mada, I've consistently sought opportunities 
                  to combine technical excellence with effective leadership.
                </p>
                <p className="mb-4">
                  🎓 At UGM, I've maintained a strong academic performance with a 3.72 GPA while actively 
                  engaging in practical projects that bridge the gap between theory and real-world applications. 
                  My experience as a Project Manager and Lab Assistant has shaped my understanding of both 
                  technical implementation and team dynamics.
                </p>
                <p>
                  💡 What sets me apart is my ability to wear multiple hats in a project - from analyzing 
                  business requirements as a System Analyst to implementing solutions as a Full-Stack 
                  Developer, and ensuring quality as a QA specialist. This comprehensive approach allows 
                  me to deliver end-to-end solutions that truly meet user needs.
                </p>
              </div>
            </CardContent>
          </Card>
          </MotionDiv>

          {/* Education Section */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Education />
          </MotionDiv>

          {/* Skills Section */}
          <InteractiveSkills />

          {/* CTA Section */}
          <MotionDiv 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <MotionDiv
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
            </MotionDiv>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
}