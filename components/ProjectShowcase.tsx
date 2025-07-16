'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Smartphone, 
  Globe, 
  Brain, 
  Heart, 
  ShoppingCart, 
  Gamepad2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github
} from 'lucide-react';

export function ProjectShowcase() {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 'foundation',
      title: 'FUNDation',
      subtitle: 'Connecting Event Organizers with Sponsors',
      description: 'A comprehensive mobile application built with Flutter that bridges the gap between event organizers seeking funding and industry partners looking for sponsorship opportunities.',
      icon: <Smartphone className="w-12 h-12" />,
      technologies: ['Flutter', 'Figma', 'Firebase', 'Dart'],
      roles: ['Project Manager', 'System Analyst', 'Quality Assurance'],
      gradient: 'from-blue-500 to-purple-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      id: 'calories-tracker',
      title: 'AI-Powered Calories Tracker',
      subtitle: 'Smart Nutrition Tracking with AI Recommendations',
      description: 'An interactive web application for daily calorie tracking that connects to the USDA Food API for accurate nutritional data and features a Gemini API-powered chatbot.',
      icon: <Globe className="w-12 h-12" />,
      technologies: ['Next.js', 'React', 'JavaScript', 'USDA Food API', 'Gemini API'],
      roles: ['Full-Stack Developer', 'API Integration Specialist'],
      gradient: 'from-green-500 to-teal-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      id: 'power-consumption',
      title: 'Power Consumption Projection Model',
      subtitle: 'AI Model for Energy Forecasting',
      description: 'A machine learning model developed in Python to analyze historical power consumption data and generate a 7-day forecast to aid in energy efficiency planning.',
      icon: <Brain className="w-12 h-12" />,
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'TensorFlow', 'Jupyter'],
      roles: ['Data Scientist', 'ML Engineer'],
      gradient: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentProject];

  return (
    <div className="relative">
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className={`${project.bgColor} p-8 relative overflow-hidden`}>
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-10`}
              animate={{ 
                background: [
                  `linear-gradient(45deg, ${project.gradient})`,
                  `linear-gradient(135deg, ${project.gradient})`,
                  `linear-gradient(225deg, ${project.gradient})`,
                  `linear-gradient(315deg, ${project.gradient})`,
                  `linear-gradient(45deg, ${project.gradient})`
                ]
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            
            <div className="relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid md:grid-cols-2 gap-8 items-center"
                >
                  <div className="space-y-6">
                    <motion.div
                      className={`w-20 h-20 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {project.icon}
                    </motion.div>
                    
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                        {project.subtitle}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        My Roles:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.roles.map((role, index) => (
                          <motion.div
                            key={role}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Badge variant="secondary" className="hover:scale-105 transition-transform">
                              {role}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                          >
                            <Badge variant="outline" className="hover:scale-105 transition-transform">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center justify-between p-6 bg-white dark:bg-gray-800">
            <Button
              variant="outline"
              size="sm"
              onClick={prevProject}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>
            
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentProject
                      ? 'bg-blue-600 scale-125'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={nextProject}
              className="flex items-center gap-2"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}