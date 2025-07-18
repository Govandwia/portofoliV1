'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Users, Wrench, Brain, Trophy, Zap } from 'lucide-react';
import Image from 'next/image';

// Component for skill icon with fallback
function SkillIcon({ src, alt, fallback }: { src: string; alt: string; fallback: string }) {
  const [hasError, setHasError] = useState(false);

  // If it's an emoji (fallback), just return it
  if (typeof src === 'string' && !src.startsWith('/')) {
    return <span className="text-xl">{src}</span>;
  }

  if (hasError) {
    return <span className="text-xl">{fallback}</span>;
  }

  return (
    <div className="w-6 h-6 relative">
      <Image
        src={src}
        alt={alt}
        width={24}
        height={24}
        className="object-contain"
        onError={() => setHasError(true)}
      />
    </div>
  );
}

export function InteractiveSkills() {
  const [selectedCategory, setSelectedCategory] = useState('programming');

  const skillCategories = [
    {
      id: 'programming',
      title: 'Programming Languages',
      icon: <Code className="w-5 h-5" />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      barColor: 'bg-blue-600',
      skills: [
        { name: 'Python', level: 90, icon: '/icons/skills/python.png', fallback: '🐍' },
        { name: 'Java', level: 85, icon: '/icons/skills/java.png', fallback: '☕' },
        { name: 'JavaScript', level: 88, icon: '/icons/skills/javascript.png', fallback: '🟨' },
        { name: 'PHP', level: 80, icon: '/icons/skills/php.png', fallback: '🐘' },
        { name: 'Kotlin', level: 75, icon: '/icons/skills/kotlin.png', fallback: '🎯' },
        { name: 'SQL', level: 85, icon: '/icons/skills/sql.png', fallback: '🗃️' },
        { name: 'HTML/CSS', level: 92, icon: '/icons/skills/htmlcss.png', fallback: '🌐' }
      ]
    },
    {
      id: 'frameworks',
      title: 'Frameworks & Libraries',
      icon: <Wrench className="w-5 h-5" />,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      barColor: 'bg-green-600',
      skills: [
        { name: 'Laravel', level: 85, icon: '/icons/skills/laravel.png', fallback: '🔥' },
        { name: 'Next.js', level: 88, icon: '/icons/skills/nextjs.png', fallback: '⚛️' },
        { name: 'TensorFlow', level: 75, icon: '/icons/skills/tensorflow.png', fallback: '🧠' },
        { name: 'Pandas', level: 85, icon: '/icons/skills/pandas.png', fallback: '🐼' }
      ]
    },
    {
      id: 'soft-skills',
      title: 'Soft Skills',
      icon: <Users className="w-5 h-5" />,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      barColor: 'bg-purple-600',
      skills: [
        { name: 'Leadership', level: 95, icon: '👥', fallback: '👥' },
        { name: 'Project Management', level: 90, icon: '📊', fallback: '📊' },
        { name: 'Problem Solving', level: 92, icon: '🧩', fallback: '🧩' },
        { name: 'Communication', level: 88, icon: '🗣️', fallback: '🗣️' },
        { name: 'Collaboration', level: 90, icon: '🤝', fallback: '🤝' },
        { name: 'Analytical Thinking', level: 85, icon: '🔍', fallback: '🔍' }
      ]
    },
    {
      id: 'tools',
      title: 'Tools & Technologies',
      icon: <Brain className="w-5 h-5" />,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      barColor: 'bg-orange-600',
      skills: [
        { name: 'VS Code', level: 95, icon: '/icons/skills/vscode.png', fallback: '💻' },
        { name: 'IntelliJ', level: 85, icon: '/icons/skills/intellij.png', fallback: '🔧' },
        { name: 'Android Studio', level: 80, icon: '/icons/skills/android-studio.png', fallback: '🤖' },
        { name: 'Figma', level: 88, icon: '/icons/skills/figma.png', fallback: '🎨' },
        { name: 'Git', level: 90, icon: '/icons/skills/git.png', fallback: '🔀' },
        { name: 'Adobe Suite', level: 75, icon: '/icons/skills/adobe.png', fallback: '🎭' }
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
                  <SkillIcon 
                    src={skill.icon} 
                    alt={skill.name} 
                    fallback={skill.fallback || skill.icon} 
                  />
                  <span className="font-medium text-gray-900 dark:text-white">
                    {skill.name}
                  </span>
                </div>
                <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">{skill.level}%</Badge>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <motion.div
                  className={`h-2 rounded-full ${selectedCategoryData.barColor}`}
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