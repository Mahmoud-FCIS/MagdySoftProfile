
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const skills = [
    'React', 'TypeScript', 'Node.js', 'Python', 'JavaScript',
    'Tailwind CSS', 'MongoDB', 'Firebase', 'Flutter', 'Arduino', 'Git', 'AWS'
  ];

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Freelancer.',
      period: '2022 - Present',
      description: 'Lead development of web applications'
    },
    {
      title: 'AI and Vision application Developer',
      company: 'Freelancer.',
      period: '2022 - Present',
      description: 'Developed artificial intelligence applications and improved user experience'
    },
    {
      title: 'Embedded Systems and IOT application Developer',
      company: 'Freelancer.',
      period: '2015 - Present',
      description: 'Built and maintained various embedded and iot applications'
    },
    {
      title: 'Andorid & ios Developer',
      company: 'Freelancer.',
      period: '2022 - Present',
      description: 'Lead development of mobile applications'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-space font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate developer with a love for creating exceptional digital experiences
            </p>
          </div>

          {/* Bio Section */}
          <Card className="mb-12 animate-slide-in-left glass">
            <CardContent className="p-8">
              <h2 className="text-2xl font-space font-bold mb-4">My Story</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  I'm a passionate developer with over 8 years of experience in creating 
                  different applications that combine beautiful design with robust functionality. My journey 
                  began with a curiosity about how these digital applications work, which quickly evolved into a deep 
                  passion for building digital solutions.
                </p>
                <p className="mb-4">
                  I specialize in modern web, mobile, embedded, computer vision frameworks and have a strong background in both 
                  frontend and backend development. I believe in writing clean, maintainable code 
                  and always strive to stay updated with the latest technologies and best practices.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or sharing knowledge with the developer community through 
                  blog posts and mentoring.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Skills Section */}
          <Card className="mb-12 animate-slide-in-right glass">
            <CardContent className="p-8">
              <h2 className="text-2xl font-space font-bold mb-6">Skills & Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Experience Section */}
          <Card className="animate-fade-in glass">
            <CardContent className="p-8">
              <h2 className="text-2xl font-space font-bold mb-6">Experience</h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-2 border-primary/20 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
