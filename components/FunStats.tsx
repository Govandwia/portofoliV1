'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedCounter } from './AnimatedCounter';
import { Coffee, Code, Trophy, Users, Clock, Star } from 'lucide-react';

export function FunStats() {
  const stats = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      value: 6,
      suffix: '',
      label: 'Projects Completed',
      color: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: <Coffee className="w-8 h-8 text-amber-600" />,
      value: 1247,
      suffix: '+',
      label: 'Cups of Coffee',
      color: 'bg-amber-50 dark:bg-amber-900/20'
    },
    {
      icon: <Trophy className="w-8 h-8 text-yellow-600" />,
      value: 3,
      suffix: '',
      label: 'Years Leadership',
      color: 'bg-yellow-50 dark:bg-yellow-900/20'
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      value: 50,
      suffix: '+',
      label: 'Students Mentored',
      color: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-600" />,
      value: 2000,
      suffix: '+',
      label: 'Hours Coding',
      color: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      icon: <Star className="w-8 h-8 text-pink-600" />,
      value: 372,
      suffix: '',
      label: 'Current GPA x100',
      color: 'bg-pink-50 dark:bg-pink-900/20'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-4 text-center">
              <motion.div
                className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-3`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {stat.icon}
              </motion.div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {stat.label}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}