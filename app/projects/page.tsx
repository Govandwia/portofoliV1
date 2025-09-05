import { ProjectCard } from '@/components/ProjectCard';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Smartphone, Globe, Brain, ShoppingCart, Gamepad2, Heart } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 'foundation',
      title: 'FUNDation',
      subtitle: 'Connecting Event Organizers with Sponsors',
      description: 'A comprehensive mobile application built with Flutter that bridges the gap between event organizers seeking funding and industry partners looking for sponsorship opportunities.',
      icon: <Smartphone className="w-6 h-6" />,
      technologies: ['Flutter', 'Figma', 'Firebase', 'Dart'],
      roles: ['Project Manager', 'System Analyst', 'Quality Assurance'],
      isCaseStudy: true,
      details: {
        challenge: 'Event organizers struggled to find suitable sponsors while businesses had difficulty identifying relevant events for their marketing goals.',
        solution: 'Developed a mobile platform that matches events with sponsors based on criteria like audience demographics, event type, and budget requirements.',
        responsibilities: [
          'Led a team of 4 developers through the complete project lifecycle',
          'Analyzed stakeholder requirements and designed system architecture',
          'Managed project timeline and ensured on-schedule delivery'
        ],
        impact: 'Reduced sponsor-finding time by 70% and increased successful partnerships by 45%'
      }
    },
    {
      id: 'dashboard-keuangan-tdg',
      title: 'Dashboard Keuangan PT TDG',
      subtitle: 'Financial Management Dashboard',
      description: 'A comprehensive financial dashboard for PT TDG featuring real-time financial analytics, budget tracking, expense management, and interactive data visualizations for better financial decision making.',
      icon: <Brain className="w-6 h-6" />,
      technologies: ['Next.js', 'Laravel', 'MySQL', 'Chart.js', 'Tailwind CSS'],
      roles: ['System Analyst', 'Project Manager'],
      githubUrl: '#'
    },
    {
      id: 'appiks',
      title: 'APPIKS (Aplikasi Pencegahan Bullying dan Intoleransi)',
      subtitle: 'Student Mood Tracking & Anti-Bullying System',
      description: 'A comprehensive mobile application designed to prevent bullying and intolerance in high schools by tracking student moods, detecting behavioral patterns, and providing early intervention mechanisms for creating a safer school environment.',
      icon: <Smartphone className="w-6 h-6" />,
      technologies: ['Next.js', 'Laravel', 'MySQL', 'TypeScript', 'API Integration'],
      roles: ['System Analyst', 'Project Manager'],
      githubUrl: '#'
    },
    {
      id: 'crm-inviro',
      title: 'CRM Apps PT INVIRO',
      subtitle: 'Customer Relationship Management System',
      description: 'A powerful CRM application for PT INVIRO to manage customer relationships, track sales pipeline, automate marketing campaigns, and analyze customer data for improved business outcomes.',
      icon: <Heart className="w-6 h-6" />,
      technologies: ['Next.js', 'Laravel', 'MySQL', 'TypeScript', 'API Integration'],
      roles: ['System Analyst', 'Project Manager'],
      githubUrl: '#'
    },
    {
      id: 'portfolio-v1',
      title: 'Portfolio V1 ',
      subtitle: 'Modern Portfolio Website with Contact System',
      description: 'A responsive portfolio website built with Next.js showcasing my journey as a Software Engineering student, featuring interactive components, project showcases, and a functional contact form with email integration.',
      icon: <Globe className="w-6 h-6" />,
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Nodemailer'],
      roles: ['Full-Stack Developer', 'UI/UX Designer'],
      githubUrl: 'https://github.com/Govandwia/portofoliV1.git',
      liveUrl: '#'
    },
    {
      id: 'calories-tracker',
      title: 'AI-Powered Calories Tracker',
      subtitle: 'Smart Nutrition Tracking with AI Recommendations',
      description: 'An interactive web application for daily calorie tracking that connects to the USDA Food API for accurate nutritional data and features a Gemini API-powered chatbot for personalized meal recommendations.',
      icon: <Globe className="w-6 h-6" />,
      technologies: ['laravel', 'PHP', 'JavaScript', 'USDA Food API', 'Gemini API'],
      roles: ['Full-Stack Developer', 'API Integration Specialist'],
      githubUrl: 'https://github.com/Govandwia/frontend_calories_tracker.git',
      liveUrl: '#'
    },
    {
      id: 'power-consumption',
      title: 'Power Consumption Projection Model',
      subtitle: 'AI Model for Energy Forecasting',
      description: 'A machine learning model developed in Python to analyze historical power consumption data and generate a 7-day forecast to aid in energy efficiency planning.',
      icon: <Brain className="w-6 h-6" />,
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'TensorFlow', 'Jupyter'],
      roles: ['Data Scientist', 'ML Engineer'],
      githubUrl: 'https://colab.research.google.com/drive/1ESbVjYgYPeIzwoAiyIdyppJvzYcAABMl?usp=sharing'
    },
    {
      id: 'meli',
      title: 'MELI (Medical Literacy)',
      subtitle: 'A Social Media Approach to Medical Literacy',
      description: 'A "Twitter-like" social platform designed to combat health misinformation by allowing verified medical professionals and users to share and consume health information in a simple, digestible format.',
      icon: <Heart className="w-6 h-6" />,
      technologies: ['Next.js', 'Firebase', 'Tailwind CSS', 'TypeScript', 'Laravel'],
      roles: ['Project Manager'],
      githubUrl: '#'
    },
    {
      id: 'gg-labs',
      title: 'GG Labs',
      subtitle: 'E-commerce Website',
      description: 'An e-commerce website for a laptop store, featuring full CRUD (Create, Read, Update, Delete) functionality with admin panel and customer management.',
      icon: <ShoppingCart className="w-6 h-6" />,
      technologies: ['PHP', 'Laravel', 'MySQL', 'HTML/CSS', 'Bootstrap'],
      roles: ['full-stack developer'],
      githubUrl: 'https://github.com/Govandwia/TUGAS-AKHIR-PPW1.git'
    },
    {
      id: 'pirate-bros',
      title: 'Pirate Bros',
      subtitle: 'OOP Game Implementation',
      description: 'A simple game developed to implement and demonstrate core Object-Oriented Programming (OOP) concepts including inheritance, polymorphism, and encapsulation.',
      icon: <Gamepad2 className="w-6 h-6" />,
      technologies: ['Java', 'JavaFX', 'OOP Principles'],
      roles: ['Game Developer', 'Software Architect'],
      githubUrl: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A showcase of my technical skills and problem-solving abilities
            </p>
          </div>

          {/* Featured Case Study */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Featured Case Study
            </h2>
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Smartphone className="w-8 h-8 text-blue-600" />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          FUNDation
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Connecting Event Organizers with Sponsors
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                      A comprehensive mobile application that bridges the gap between event organizers seeking funding and industry partners looking for sponsorship opportunities.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          My Roles:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {projects[0].roles.map((role, index) => (
                            <Badge key={index} variant="secondary">
                              {role}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Technologies:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {projects[0].technologies.map((tech, index) => (
                            <Badge key={index} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        {projects[0].details?.responsibilities.map((resp, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-sm">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Impact:
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {projects[0].details?.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Other Projects */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Other Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.slice(1).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}