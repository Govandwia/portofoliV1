'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Play, BookOpen, Code, Database, Globe, Brain, Trophy, Clock, Target } from 'lucide-react';

export default function LearningPath() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Add custom styles for scrollbar
  const scrollbarStyles = `
    .custom-scrollbar::-webkit-scrollbar {
      width: 8px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 4px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.3);
      border-radius: 4px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: rgba(255, 255, 255, 0.5);
    }
    .custom-scrollbar {
      scrollbar-width: thin;
      scrollbar-color: rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.1);
    }
  `;

  const learningPaths = [
    {
      id: 'intro',
      title: 'Perjalanan Mahasiswa TRPL UGM',
      subtitle: 'Govan Dwi Aditya - Semester 5',
      content: 'Halo teman-teman angkatan 2025! Saya Govan, dan ini adalah cerita perjalanan saya selama berkuliah di D4 TRPL UGM. Semoga bisa memberikan gambaran dan inspirasi untuk kalian semua!',
      icon: <BookOpen className="w-12 h-12" />,
      type: 'intro',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 'semester1',
      title: 'Semester 1 - Fondasi Awal',
      subtitle: 'Gasal 2023/2024 • 9 Mata Kuliah',
      content: 'Awal yang menantang! Semester pertama adalah masa adaptasi dari SMA ke dunia programming. Algoritma dan Pemrograman jadi mata kuliah yang paling berkesan - di sini pertama kali saya benar-benar memahami logika programming.',
      skills: ['Algoritma dan Pemrograman', 'Logika Programming', 'Problem Solving', 'Adaptasi Kuliah'],
      duration: 'Sep 2023 - Jan 2024',
      projects: ['Tugas-tugas algoritma dasar', 'Program sederhana dengan flowchart'],
      icon: <Code className="w-12 h-12" />,
      type: 'path',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      id: 'semester2',
      title: 'Semester 2 - Eksplorasi Teknologi',
      subtitle: 'Genap 2023/2024 • 10 Mata Kuliah',
      content: 'Mulai berkenalan dengan dunia yang lebih luas! Praktikum Struktur Data membuka mata saya tentang efisiensi, sementara Basis Data mengajarkan cara mengorganisir informasi. OOP di sini jadi game changer!',
      skills: ['Struktur Data', 'Database Management', 'OOP', 'Java Programming', 'MySQL'],
      duration: 'Feb 2024 - Jun 2024',
      projects: ['Aplikasi CRUD sederhana', 'Implementasi struktur data', 'Database design'],
      icon: <Database className="w-12 h-12" />,
      type: 'path',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      id: 'semester3',
      title: 'Semester 3 - Mulai Berkembang',
      subtitle: 'Gasal 2024/2025 • 10 Mata Kuliah',
      content: 'Semester ini jadi turning point! Manajemen Proyek mengajarkan soft skills yang crucial, sementara Proyek Aplikasi Dasar 1 memberikan pengalaman hands-on pertama dalam project development yang sesungguhnya.',
      skills: ['Project Management', 'Software Development', 'Team Collaboration', 'System Analysis'],
      duration: 'Sep 2024 - Jan 2025',
      projects: ['Proyek Aplikasi Dasar 1', 'Group project management', 'Software documentation'],
      icon: <Target className="w-12 h-12" />,
      type: 'path',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      id: 'semester4',
      title: 'Semester 4 - Era Modern Tech',
      subtitle: 'Genap 2024/2025 • 10 Mata Kuliah',
      content: 'Masuk ke dunia AI dan teknologi immersive! Kecerdasan Artifisial membuka perspektif baru tentang kemungkinan teknologi, sementara Pengembangan Game mengajarkan aspek kreatif dari programming.',
      skills: ['Artificial Intelligence', 'Game Development', 'Immersive Technology', 'Advanced Programming'],
      duration: 'Feb 2025 - Jun 2025',
      projects: ['AI-based applications', 'Game prototypes', 'Immersive tech experiments'],
      icon: <Brain className="w-12 h-12" />,
      type: 'path',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      id: 'beyond-class',
      title: 'Pengalaman Organisasi',
      subtitle: 'Mengembangkan Leadership & Soft Skills',
      content: 'Bergabung dengan berbagai organisasi memberikan pengalaman berharga dalam leadership, teamwork, dan networking. Setiap organisasi punya karakteristik dan pembelajaran yang unik!',
      skills: ['Leadership', 'Team Management', 'Strategic Planning', 'Public Speaking', 'Networking'],
      duration: 'Ongoing',
      projects: ['Organizational Projects', 'Leadership Roles', 'Community Building'],
      icon: <Trophy className="w-12 h-12" />,
      type: 'organization',
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      id: 'committee-experience',
      title: 'Pengalaman Kepanitiaan',
      subtitle: 'Event Management & Project Execution',
      content: 'Kepanitiaan mengajarkan cara mengelola event dari planning hingga eksekusi. Pengalaman yang sangat valuable untuk project management dan problem solving di dunia nyata!',
      skills: ['Event Management', 'Project Coordination', 'Problem Solving', 'Time Management', 'Crisis Management'],
      duration: 'Various Events',
      projects: ['Large-scale Events', 'Cross-functional Collaboration', 'Stakeholder Management'],
      icon: <Globe className="w-12 h-12" />,
      type: 'committee',
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      id: 'assistant-lab',
      title: 'Asisten Laboratorium',
      subtitle: 'Teaching & Mentoring Experience',
      content: 'Menjadi AsLab adalah pengalaman yang sangat rewarding! Mengajarkan materi kepada adik-adik tingkat sambil terus belajar dan mengasah kemampuan komunikasi dan technical skills.',
      skills: ['Teaching', 'Mentoring', 'Technical Communication', 'Patience', 'Knowledge Transfer'],
      duration: 'Academic Terms',
      projects: ['Lab Sessions', 'Student Mentoring', 'Curriculum Support'],
      icon: <Brain className="w-12 h-12" />,
      type: 'teaching',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      id: 'project-experience',
      title: 'Project Experience',
      subtitle: 'Real-World Applications & Development',
      content: 'Dari project kuliah hingga real client, setiap project memberikan pembelajaran berbeda. Ini adalah portfolio nyata dari perjalanan coding saya selama kuliah!',
      skills: ['Full-Stack Development', 'Project Management', 'Client Communication', 'System Design', 'Problem Solving'],
      duration: 'Throughout College',
      projects: ['Academic & Professional Projects'],
      icon: <Code className="w-12 h-12" />,
      type: 'projects',
      gradient: 'from-teal-500 to-cyan-600'
    },
    {
      id: 'tips',
      title: 'Tips & Pesan untuk Kalian',
      subtitle: 'TRPL 2025',
      content: 'Berdasarkan pengalaman 4 semester di TRPL UGM, ini beberapa tips yang semoga bermanfaat untuk kalian! Remember: everyone has their own pace, jadi jangan compare diri kalian dengan orang lain.',
      skills: ['Growth Mindset', 'Continuous Learning', 'Networking', 'Work-Life Balance', 'Stay Curious'],
      duration: 'Life-long',
      projects: ['Your own unique journey awaits! 🚀'],
      icon: <Target className="w-12 h-12" />,
      type: 'tips',
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      id: 'qna',
      title: 'Q&A Session',
      subtitle: 'Tanya Jawab & Diskusi',
      content: 'Sekarang giliran kalian! Ada pertanyaan tentang kuliah di TRPL, organisasi, atau pengalaman lainnya? Jangan ragu untuk bertanya. Mari kita diskusi bersama! 🙋‍♂️🙋‍♀️',
      skills: ['Interactive Discussion', 'Sharing Experience', 'Q&A', 'Open Forum'],
      duration: 'Now',
      projects: ['Mari bertanya dan berbagi!'],
      icon: <Play className="w-12 h-12" />,
      type: 'qna',
      gradient: 'from-pink-500 to-rose-600'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % learningPaths.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + learningPaths.length) % learningPaths.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentPath = learningPaths[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      {/* Custom Scrollbar Styles */}
      <style dangerouslySetInnerHTML={{ __html: scrollbarStyles }} />
      
      {/* Presentation Container */}
      <div className="relative h-screen flex flex-col">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-10 p-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">Penyambutan Mahasiswa Baru TRPL UGM 2025</h1>
              <p className="text-sm opacity-80">Govan Dwi Aditya - Semester 5</p>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span className="text-sm">Slide {currentSlide + 1} of {learningPaths.length}</span>
            </div>
          </div>
        </div>

        {/* Main Slide Content */}
        <div className="flex-1 flex items-center justify-center p-8 pt-20 pb-32">
          <Card className={`w-full max-w-5xl h-[calc(100vh-200px)] bg-gradient-to-br ${currentPath.gradient} border-none shadow-2xl overflow-hidden`}>
            <CardContent className="h-full p-0 relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
              </div>

              {/* Scrollable Content Container */}
              <div className="relative h-full overflow-y-auto custom-scrollbar">
                <div className="p-12">
                  {/* Icon and Title */}
                  <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                        {currentPath.icon}
                      </div>
                    </div>
                    <h2 className="text-4xl font-bold mb-2">{currentPath.title}</h2>
                    <p className="text-xl opacity-90">{currentPath.subtitle}</p>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    {currentPath.type === 'intro' ? (
                      <div className="text-center w-full">
                        <p className="text-xl leading-relaxed mb-8">{currentPath.content}</p>
                        <Button 
                          onClick={nextSlide}
                          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30"
                        >
                          <Play className="w-4 h-4 mr-2" />
                          Start Presentation
                        </Button>
                      </div>
                    ) : (
                      <div className="grid md:grid-cols-2 gap-8 w-full">
                        {/* Left Column */}
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                              <Clock className="w-5 h-5" />
                              Duration: {currentPath.duration}
                            </h3>
                            <p className="text-lg leading-relaxed opacity-90">
                              {currentPath.content}
                            </p>
                          </div>

                        {currentPath.id === 'beyond-class' && (
                          <div className="space-y-3">
                            <div>
                              <h4 className="font-semibold mb-2">� Organisasi yang Pernah/Sedang Diikuti:</h4>
                              <ul className="space-y-1 text-sm">
                                <li>• <strong>GDGoC UGM</strong> - Google Developer Groups on Campus</li>
                                <li>• <strong>ASSETS TRPL UGM</strong> - Association of Software Engineering Students</li>
                                <li>• <strong>KOMATIK UGM</strong> - Komunitas Mahasiswa TIK UGM</li>
                                <li>• <strong>PALPOD UGM</strong> - podcase Mahasiswa TRPL</li>
                              </ul>

                            </div>
                          </div>
                        )}

                        {currentPath.id === 'committee-experience' && (
                          <div className="space-y-3">
                            <div>
                              <h4 className="font-semibold mb-2">🎪 Pengalaman Kepanitiaan:</h4>
                              <ul className="space-y-1 text-sm">
                                <li>• <strong>SERIES 2024</strong> - Event Coordinator</li>
                                <li>• <strong>LIGA TRPL 2024</strong> - Staf Divisi Humas & Publikasi</li>
                                <li>• <strong>TEDxUGM</strong> - Committee Member</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">💼 Project Management:</h4>
                              <ul className="space-y-1 text-sm">
                                <li>• <strong>FUNDation</strong> - Project Manager (Mobile App Development)</li>
                              </ul>
                            </div>
                          </div>
                        )}

                        {currentPath.id === 'project-experience' && (
                          <div className="space-y-3">
                            <div>
                              <h4 className="font-semibold mb-2">🚀 Major Projects:</h4>
                              <ul className="space-y-1 text-sm">
                                <li>• <strong>FUNDation</strong> - Mobile App (Project Manager)</li>
                                <li>• <strong>Dashboard Keuangan PT TDG</strong> - Financial Analytics</li>
                                <li>• <strong>APPIKS</strong> - Anti-bullying Prevention App</li>
                                <li>• <strong>CRM PT INVIRO</strong> - Customer Management System</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">💻 Academic Projects:</h4>
                              <ul className="space-y-1 text-sm">
                                <li>• <strong>Calories Tracker</strong> - AI-powered nutrition app</li>
                                <li>• <strong>MELI</strong> - Medical literacy social platform</li>
                                <li>• <strong>GG Labs</strong> - E-commerce website</li>
                                <li>• <strong>Pirate Bros</strong> - OOP-based game</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">🤖 AI/ML Projects:</h4>
                              <ul className="space-y-1 text-sm">
                                <li>• <strong>Power Consumption Model</strong> - 7-day forecasting</li>
                                <li>• <strong>Portfolio V1</strong> - This website you're seeing!</li>
                              </ul>
                            </div>
                          </div>
                        )}

                        {currentPath.id === 'tips' && (
                          <div className="space-y-3">
                            <div>
                              <h4 className="font-semibold mb-2">💡 Tips Akademik:</h4>
                              <ul className="space-y-1 text-sm">
                                <li>• Jangan takut bertanya ke dosen atau kakak tingkat</li>
                                <li>• Practice makes perfect - coding butuh latihan konsisten</li>
                                <li>• Join study group, belajar bareng lebih fun!</li>
                                <li>• Manfaatkan lab dan fasilitas kampus</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">🌟 Tips Non-Akademik:</h4>
                              <ul className="space-y-1 text-sm">
                                <li>• Ikut organisasi/kepanitiaan untuk networking</li>
                                <li>• Explore minat di luar kuliah</li>
                                <li>• Build portfolio sejak dini</li>
                                <li>• Jaga work-life balance</li>
                              </ul>
                            </div>
                          </div>
                        )}

                        {currentPath.id === 'assistant-lab' && (
                          <div className="space-y-3">
                            <div>
                              <h4 className="font-semibold mb-2">👨‍🏫 Mata Kuliah yang Diampu:</h4>
                              <ul className="space-y-1 text-sm">
                                <li>• <strong>Algoritma dan Struktur Data</strong> - Teaching Assistant</li>
                                <li>• <strong>Pemrograman Komputer</strong> - Teaching Assistant</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">📚 Tanggung Jawab:</h4>
                              <ul className="space-y-1 text-sm">
                                <li>• Membantu mahasiswa dalam praktikum</li>
                                <li>• Menjelaskan konsep programming</li>
                                <li>• Grading dan feedback tugas</li>
                              </ul>
                            </div>
                          </div>
                        )}

                        {currentPath.projects && currentPath.id !== 'beyond-class' && (
                          <div>
                            <h4 className="font-semibold mb-2">Key Projects:</h4>
                            <ul className="space-y-1">
                              {currentPath.projects.map((project, index) => (
                                <li key={index} className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-white rounded-full"></div>
                                  {project}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                        {/* Right Column */}
                        <div>
                          <h4 className="font-semibold mb-4">Technologies & Skills:</h4>
                          <div className="flex flex-wrap gap-2">
                            {currentPath.skills?.map((skill, index) => (
                              <Badge 
                                key={index} 
                                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Scroll Indicator */}
                  <div className="absolute bottom-4 right-4 opacity-60">
                    <div className="text-xs flex items-center gap-1">
                      <div className="w-3 h-3 border-2 border-white/60 rounded-full animate-pulse"></div>
                      Scroll untuk melihat lebih
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex justify-between items-center">
            {/* Previous Button */}
            <Button
              onClick={prevSlide}
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            {/* Slide Indicators */}
            <div className="flex gap-2">
              {learningPaths.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide 
                      ? 'bg-white scale-125' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <Button
              onClick={nextSlide}
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Keyboard Navigation Hint */}
        <div className="absolute top-20 right-6 text-sm opacity-60">
          <p>Use ← → keys to navigate</p>
          <p className="text-xs mt-1">Scroll down for more content ↓</p>
        </div>
      </div>

      {/* Keyboard Navigation */}
      <div className="hidden">
        <input
          autoFocus
          onKeyDown={(e) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
              nextSlide();
            } else if (e.key === 'ArrowLeft') {
              prevSlide();
            }
          }}
          className="opacity-0 absolute"
        />
      </div>
    </div>
  );
}
