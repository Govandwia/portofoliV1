import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Users, Wrench, Brain } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      id: 'programming',
      title: 'Programming Languages',
      icon: <Code className="w-5 h-5 text-blue-600" />,
      skills: ['Python', 'Java', 'PHP', 'JavaScript', 'Kotlin', 'SQL', 'HTML/CSS', 'Dart']
    },
    {
      id: 'frameworks',
      title: 'Frameworks & Libraries',
      icon: <Wrench className="w-5 h-5 text-green-600" />,
      skills: ['Laravel', 'Next.js', 'Flutter', 'TensorFlow', 'Scikit-learn', 'Pandas']
    },
    {
      id: 'soft-skills',
      title: 'Soft Skills',
      icon: <Users className="w-5 h-5 text-purple-600" />,
      skills: ['Leadership', 'Project Management', 'Problem Solving', 'Communication', 'Collaboration', 'Analytical Thinking']
    },
    {
      id: 'tools',
      title: 'Tools & Technologies',
      icon: <Brain className="w-5 h-5 text-orange-600" />,
      skills: ['VS Code', 'IntelliJ', 'Android Studio', 'Figma', 'Git', 'SQL Developer', 'Adobe Suite']
    }
  ];

  return (
    <Card className="p-8">
      <CardContent className="p-0">
        <div className="flex items-center gap-3 mb-6">
          <Code className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Skills & Expertise
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              <div className="flex items-center gap-2">
                {category.icon}
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="hover:bg-blue-50 hover:border-blue-200 dark:hover:bg-blue-900/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}