import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Users,
  TrendingUp,
  Heart,
  Coffee,
} from "lucide-react";

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  const benefits = [
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear progression paths and continuous learning opportunities",
    },
    {
      icon: Users,
      title: "Great Team",
      description: "Work with passionate educators and industry experts",
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible schedules and remote work options",
    },
    {
      icon: Coffee,
      title: "Perks & Benefits",
      description: "Competitive salary, health insurance, and more",
    },
  ];

  const jobs = [
    {
      id: 1,
      title: "Senior Technical Trainer",
      department: "Training",
      location: "Tamil Nadu, India",
      type: "Full-time",
      experience: "5+ years",
      salary: "₹8-12 LPA",
      description:
        "We're looking for an experienced technical trainer to deliver high-quality training programs in programming, data science, and emerging technologies.",
      responsibilities: [
        "Develop and deliver comprehensive technical training programs",
        "Create engaging course materials and hands-on exercises",
        "Mentor students and provide career guidance",
        "Stay updated with latest industry trends and technologies",
        "Collaborate with placement team to align training with market needs",
      ],
      requirements: [
        "5+ years of industry experience in software development",
        "Strong knowledge of programming languages and frameworks",
        "Excellent communication and presentation skills",
        "Prior teaching or training experience preferred",
        "Bachelor's degree in Computer Science or related field",
      ],
    },
    {
      id: 2,
      title: "Career Counselor",
      department: "Student Services",
      location: "Tamil Nadu, India",
      type: "Full-time",
      experience: "3+ years",
      salary: "₹5-8 LPA",
      description:
        "Join our team as a career counselor to guide students in making informed career decisions and achieving their professional goals.",
      responsibilities: [
        "Provide one-on-one career counseling sessions",
        "Assess student skills, interests, and career goals",
        "Develop personalized career development plans",
        "Conduct workshops on career planning and job search strategies",
        "Maintain relationships with students and track their progress",
      ],
      requirements: [
        "3+ years of experience in career counseling or HR",
        "Strong understanding of various career paths and industries",
        "Excellent interpersonal and communication skills",
        "Master's degree in Psychology, Counseling, or related field preferred",
        "Certification in career counseling is a plus",
      ],
    },
    {
      id: 3,
      title: "Placement Coordinator",
      department: "Placement",
      location: "Tamil Nadu, India",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹4-6 LPA",
      description:
        "We need a dynamic placement coordinator to connect our students with leading companies and manage the entire placement process.",
      responsibilities: [
        "Build and maintain relationships with hiring partners",
        "Organize campus recruitment drives and placement events",
        "Coordinate interview schedules and follow-ups",
        "Track placement metrics and prepare reports",
        "Support students throughout the placement process",
      ],
      requirements: [
        "2-4 years of experience in campus placements or recruitment",
        "Strong network with companies and recruiters",
        "Excellent organizational and multitasking abilities",
        "Good knowledge of recruitment processes and trends",
        "Bachelor's degree in any field",
      ],
    },
    {
      id: 4,
      title: "Content Developer",
      department: "Curriculum",
      location: "Tamil Nadu, India / Remote",
      type: "Full-time",
      experience: "2-3 years",
      salary: "₹4-7 LPA",
      description:
        "Create engaging educational content and course materials for various technical and soft skills programs.",
      responsibilities: [
        "Design and develop course curricula and learning materials",
        "Create assessments, quizzes, and practical assignments",
        "Update content based on industry trends and feedback",
        "Collaborate with trainers to ensure content effectiveness",
        "Maintain consistency in quality and instructional design",
      ],
      requirements: [
        "2-3 years of experience in content development or instructional design",
        "Strong writing and editing skills",
        "Knowledge of learning management systems",
        "Understanding of technical subjects is a plus",
        "Bachelor's degree in Education, English, or related field",
      ],
    },
    {
      id: 5,
      title: "Sales Representative",
      department: "Sales",
      location: "Tamil Nadu, India",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹3-5 LPA + Incentives",
      description:
        "Join our sales team to promote Ni8 Mentor's programs to students and educational institutions.",
      responsibilities: [
        "Promote training programs to prospective students",
        "Conduct presentations at colleges and career fairs",
        "Achieve monthly and quarterly sales targets",
        "Build relationships with educational institutions",
        "Provide excellent customer service and support",
      ],
      requirements: [
        "1-3 years of experience in sales or business development",
        "Strong communication and persuasion skills",
        "Target-oriented mindset with proven track record",
        "Willingness to travel within the region",
        "Bachelor's degree in any field",
      ],
    },
    {
      id: 6,
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Tamil Nadu, India / Remote",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹4-7 LPA",
      description:
        "Lead our digital marketing efforts to attract students and build the Ni8 Mentor brand online.",
      responsibilities: [
        "Develop and execute digital marketing campaigns",
        "Manage social media channels and content calendar",
        "Optimize website for SEO and user experience",
        "Track and analyze campaign performance metrics",
        "Collaborate with content team for marketing materials",
      ],
      requirements: [
        "2-4 years of experience in digital marketing",
        "Proficiency in Google Ads, Facebook Ads, and analytics tools",
        "Strong understanding of SEO and content marketing",
        "Creative thinking and data-driven approach",
        "Bachelor's degree in Marketing or related field",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-hero text-white">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold animate-fade-in">
            Join Our Team
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
            Build Your Career While Empowering Others
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Work With Us?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join a mission-driven team that's transforming education and careers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="pt-8 pb-6 text-center space-y-4">
                    <div className="h-16 w-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Open{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Positions
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore exciting opportunities to make a difference
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {jobs.map((job) => (
              <Card
                key={job.id}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() =>
                  setSelectedJob(selectedJob === job.id ? null : job.id)
                }
              >
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <h3 className="text-2xl font-bold text-foreground">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {job.department}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          {job.salary}
                        </div>
                      </div>
                      <Badge variant="secondary">{job.experience}</Badge>
                    </div>
                    <Button>
                      {selectedJob === job.id ? "Hide Details" : "View Details"}
                    </Button>
                  </div>

                  {selectedJob === job.id && (
                    <div className="mt-8 space-y-6 animate-fade-in border-t border-border pt-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Description</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {job.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3">
                          Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-muted-foreground"
                            >
                              <span className="text-primary mt-1">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold mb-3">
                          Requirements
                        </h4>
                        <ul className="space-y-2">
                          {job.requirements.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-muted-foreground"
                            >
                              <span className="text-primary mt-1">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4">
                        <Button size="lg" asChild>
                          <a href="mailto:sales@ni8mentor.in?subject=Application for ${job.title}">
                            Apply Now
                          </a>
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <Card className="border-none shadow-2xl bg-gradient-hero text-white">
            <CardContent className="py-16 px-8 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Don't See the Right Role?
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume
                and let's talk about how you can contribute to our mission.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <a href="mailto:sales@ni8mentor.in">Send Your Resume</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Careers;
