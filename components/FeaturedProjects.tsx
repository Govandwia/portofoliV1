'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Smartphone, Globe, Brain, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { ProjectShowcase } from './ProjectShowcase';
import { FunStats } from './FunStats';

export function FeaturedProjects() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="flex items-center justify-center gap-2 mb-4"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Sparkles className="w-8 h-8 text-yellow-500" />
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                Featured Projects
              </h2>
              <Sparkles className="w-8 h-8 text-yellow-500" />
            </motion.div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A showcase of my key projects demonstrating technical skills and leadership
            </p>
          </motion.div>

          {/* Interactive Project Showcase */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ProjectShowcase />
          </motion.div>

          {/* Fun Stats */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Fun Facts & Achievements
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Some interesting numbers about my journey
              </p>
            </div>
            <FunStats />
          </motion.div>

          {/* CTA */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href="/projects">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg">
                  View All Projects
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}