import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  technologies: string[];
  roles: string[];
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            {project.icon}
            <div className="flex gap-2">
              {project.githubUrl && (
                <Button size="sm" variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button size="sm" variant="outline" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">
              {project.subtitle}
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>
          
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">
              My Role:
            </p>
            <div className="flex flex-wrap gap-1 mb-3">
              {project.roles.map((role) => (
                <Badge key={role} variant="secondary" className="text-xs">
                  {role}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">
              Technologies:
            </p>
            <div className="flex flex-wrap gap-1">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}