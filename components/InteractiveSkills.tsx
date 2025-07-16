'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Users, Wrench, Brain, Trophy, Zap } from 'lucide-react';

export function InteractiveSkills() {
  const [selectedCategory, setSelectedCategory] = useState('programming');

  const skillCategories = [
    {
      id: 'programming',
      title: 'Programming Languages',
      icon: <Code className="w-5 h-5" />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      skills: [
        { name: 'Python', level: 90, icon: '🐍' },
        { name: 'Java', level: 85, icon: '☕' },
        { name: 'JavaScript', level: 88, icon: '🟨' },
        { name: 'PHP', level: 80, icon: '🐘' },
        { name: 'Kotlin', level: 75, icon: '🤖' },
        { name: 'SQL', level: 85, icon: '🗃️' },
        { name: 'Dart', level: 82, icon: '🎯' },
        { name: 'HTML/CSS', level: 92, icon: '🎨' }
      ]
    },
    {
      id: 'frameworks',
      title: 'Frameworks & Libraries',
      icon: <Wrench className="w-5 h-5" />,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      skills: [
        { name: 'Laravel', level: 85, icon: '🔴' },
        { name: 'Next.js', level: 88, icon: '⚫' },
        { name: 'React', level: 90, icon: '⚛️' },
        { name: 'Flutter', level: 82, icon: '💙' },
        { name: 'TensorFlow', level: 75, icon: '🧠' },
        { name: 'Scikit-learn', level: 80, icon: '📊' },
        { name: 'Pandas', level: 85, icon: '🐼' }
      ]
    },
    {
      id: 'soft-skills',
      title: 'Soft Skills',
      icon: <Users className="w-5 h-5" />,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      skills: [
        { name: 'Leadership', level: 95, icon: '👑' },
        { name: 'Project Management', level: 90, icon: '📋' },
        { name: 'Problem Solving', level: 92, icon: '🧩' },
        { name: 'Communication', level: 88, icon: '💬' },
        { name: 'Collaboration', level: 90, icon: '🤝' },
        { name: 'Analytical Thinking', level: 85, icon: '🔍' }
      ]
    },
    {
      id: 'tools',
      title: 'Tools & Technologies',
      icon: <Brain className="w-5 h-5" />,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      skills: [
        { name: 'VS Code', level: 95, icon: '💻' },
        { name: 'IntelliJ', level: 85, icon: '🔧' },
        { name: 'Android Studio', level: 80, icon: '📱' },
        { name: 'Figma', level: 88, icon: '🎨' },
        { name: 'Git', level: 90, icon: '🌿' },
        { name: 'Adobe Suite', level: 75, icon: '🎭' }
      ]
    }
  ];

  const selectedCategoryData = skillCategories.find(cat => cat.id === selectedCategory);

  return (
    <Card className="p-8">
      <CardContent className="p-0">
        <div className="flex items-center gap-3 mb-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Zap className="w-6 h-6 text-blue-600" />
          </motion.div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Interactive Skills Showcase
          </h2>
        </div>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {skillCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                selectedCategory === category.id
                  ? `${category.bgColor} ${category.color} font-medium`
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              <span>{category.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Skills Display */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 gap-4"
        >
          {selectedCategoryData?.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg border hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{skill.icon}</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {skill.name}
                  </span>
                </div>
                <Badge variant="secondary">{skill.level}%</Badge>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <motion.div
                  className={`h-2 rounded-full ${selectedCategoryData.color.replace('text-', 'bg-')}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  );
}