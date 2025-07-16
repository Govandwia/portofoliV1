import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Calendar } from 'lucide-react';

export function Education() {
  const education = [
    {
      id: 'ugm',
      institution: 'Universitas Gadjah Mada',
      degree: 'Software Engineering Technology',
      period: '2023 - Present',
      gpa: '3.72/4.00',
      status: 'Current',
      achievements: [
        'Maintained Dean\'s List standing',
        'Active in software development projects',
        'Leadership roles in academic organizations'
      ]
    },
    {
      id: 'high-school',
      institution: 'SMA Unggulan CT ARSA Foundation',
      degree: 'High School Diploma',
      period: '2020 - 2023',
      gpa: '92/100',
      status: 'Graduated',
      achievements: [
        'Valedictorian with highest GPA',
        'Head of Class for 3 consecutive years',
        'Outstanding leadership and academic performance'
      ]
    }
  ];

  return (
    <Card className="p-8">
      <CardContent className="p-0">
        <div className="flex items-center gap-3 mb-6">
          <GraduationCap className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Education
          </h2>
        </div>
        
        <div className="space-y-6">
          {education.map((edu) => (
            <div key={edu.id} className="border-l-4 border-blue-600 pl-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {edu.institution}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {edu.degree}
                  </p>
                </div>
                <div className="text-right">
                  <Badge variant={edu.status === 'Current' ? 'default' : 'secondary'}>
                    {edu.status}
                  </Badge>
                </div>
              </div>
              
              <div className="flex items-center gap-6 mb-3 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="w-4 h-4" />
                  <span>GPA: {edu.gpa}</span>
                </div>
              </div>
              
              <ul className="space-y-1">
                {edu.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}