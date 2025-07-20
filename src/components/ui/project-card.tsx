
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Project } from '@/types/project';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onEdit?: () => void;
  onDelete?: () => void;
  showActions?: boolean;
}

const ProjectCard = ({ project, onEdit, onDelete, showActions = false }: ProjectCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 glass">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={project.images[0] || '/placeholder.svg'}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {project.featured && (
          <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
            Featured
          </Badge>
        )}
      </div>
      
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-space">{project.title}</CardTitle>
            <CardDescription className="mt-1">{project.description}</CardDescription>
          </div>
          <Badge variant="outline" className="capitalize">
            {project.category}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between items-center">
        <div className="flex space-x-2">
          {project.liveUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-1" />
                Live
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-1" />
                Code
              </a>
            </Button>
          )}
        </div>
        
        {showActions && (
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" onClick={onEdit}>
              Edit
            </Button>
            <Button variant="destructive" size="sm" onClick={onDelete}>
              Delete
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
