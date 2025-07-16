import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
}

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {experience.title}
              </h3>
              <p className="text-lg text-blue-600 dark:text-blue-400">
                {experience.company}
              </p>
            </div>
            <Badge variant="secondary">
              {experience.type}
            </Badge>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{experience.period}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{experience.location}</span>
            </div>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300">
            {experience.description}
          </p>
          
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Key Achievements:
            </h4>
            <ul className="space-y-1">
              {experience.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Skills Developed:
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill) => (
                <Badge key={skill} variant="outline" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}