

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useProjectStore } from '@/store/projectStore';
import { useThemeStore } from '@/store/themeStore';
import ProjectCard from '@/components/ui/project-card';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowDown, Smartphone, Eye, Computer, Gamepad, Wifi, User, Palette, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/pages/logo.png';

const Index = () => {
  const { getFeaturedProjects } = useProjectStore();
  const { setTheme, isDark } = useThemeStore();
  const featuredProjects = getFeaturedProjects();

  useEffect(() => {
    // Initialize theme
    setTheme(isDark);
  }, []);

  return (
    <div className="min-h-screen bg-background text-dark-green">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-yellow-20/20 to-gold-50/20 animate-gradient"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            {/* Profile Picture */}
            <div className="flex justify-center mb-8">
              <Avatar className="w-64 h-64 border-4 border-primary/20 shadow-lg animate-scale-in">
                <AvatarImage 
                  src={logo}
                  alt="Profile" 
                  className="object-cover"
                />

              </Avatar>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-space font-bold mb-6">
              <span className="gradient-text">Creative Developer</span>
              <br />
              <span className="text-foreground">& Digital Craftsman</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              I build exceptional digital experiences that combine beautiful design with powerful functionality. 
              Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/projects">
                <Button size="lg" className="animate-scale-in">
                  View My Work
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="animate-scale-in">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-space font-bold mb-4">
              What I Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I specialize in creating innovative solutions across multiple platforms and technologies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Smartphone,
                title: 'Mobile Applications',
                description: 'Native Android and iOS applications with modern frameworks and seamless user experiences'
              },
              {
                icon: Computer,
                title: 'Dataset Collection',
                description: 'Efficient data gathering and processing systems for machine learning and analytics'
              },
              {
                icon: Eye,
                title: 'Computer Vision',
                description: 'Advanced image processing and AI-powered visual recognition applications'
              },
              {
                icon: Computer,
                title: 'Embedded Systems',
                description: 'Low-level programming for microcontrollers and hardware integration solutions'
              },
              {
                icon: Wifi,
                title: 'IoT Applications',
                description: 'Connected devices and smart systems for automation and monitoring'
              },
              {
                icon: User,
                title: 'Portfolio Creator',
                description: 'Custom portfolio websites and digital showcases for professionals and businesses'
              },
              {
                icon: Gamepad,
                title: 'Game Development',
                description: 'Interactive games and entertainment applications across multiple platforms'
              },
              {
                icon: Computer,
                title: 'Smart Applications',
                description: 'AI-powered applications with intelligent features and automated decision making'
              },
              {
                icon: Palette,
                title: 'UI/UX Designs',
                description: 'User-centered design solutions with intuitive interfaces and engaging user experiences'
              },
              {
                icon: Monitor,
                title: 'Responsive Web Development',
                description: 'Modern, responsive websites optimized for all devices and screen sizes'
              }
            ].map((skill, index) => (
              <div
                key={skill.title}
                className={`glass p-6 rounded-lg text-center hover:scale-105 transition-transform duration-300 ${
                  index % 3 === 0 ? 'animate-slide-in-left' : 
                  index % 3 === 1 ? 'animate-fade-in' : 'animate-slide-in-right'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <skill.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-space font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work showcasing different technologies and approaches
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          
          {featuredProjects.length > 0 && (
            <div className="text-center mt-12">
              <Link to="/projects">
                <Button variant="outline" size="lg">
                  View All Projects
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-space font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss your ideas and bring them to life
            </p>
            <Link to="/contact">
              <Button size="lg" className="animate-float">
                Start a Conversation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

