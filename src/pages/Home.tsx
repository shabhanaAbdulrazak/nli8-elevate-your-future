import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  Users,
  Briefcase,
  Target,
  TrendingUp,
  Award,
  BookOpen,
  Laptop,
  ArrowRight,
} from "lucide-react";

const Home = () => {
  const stats = [
    { number: "1000+", label: "Students Trained", icon: GraduationCap },
    { number: "87%", label: "Placement Rate", icon: TrendingUp },
    { number: "20+", label: "Partner Companies", icon: Briefcase },
    { number: "4.6/5", label: "Student Satisfaction", icon: Award },
  ];

  const services = [
    {
      icon: Target,
      title: "Placement Training",
      description:
        "Master essential soft skills, ace interviews with expert guidance, excel in mock tests, and craft compelling resumes that stand out to recruiters.",
      color: "text-primary",
    },
    {
      icon: Briefcase,
      title: "Placement Assistance",
      description:
        "Direct connections with leading companies and recruiters across industries, opening doors to exciting career opportunities that match your skills.",
      color: "text-secondary",
    },
    {
      icon: BookOpen,
      title: "Semester Courses",
      description:
        "Comprehensive subject-wise academic support perfectly aligned with university curricula, ensuring you excel while building practical knowledge.",
      color: "text-accent",
    },
    {
      icon: Users,
      title: "Career Counseling",
      description:
        "One-on-one personalized mentorship and strategic career path guidance to help you navigate your professional journey with confidence.",
      color: "text-primary",
    },
    {
      icon: Laptop,
      title: "Live Projects",
      description:
        "Work on actual business challenges from partner companies, building a portfolio that demonstrates your capabilities to future employers.",
      color: "text-secondary",
    },
    {
      icon: Award,
      title: "Internship Programs",
      description:
        "Gain valuable hands-on experience through structured internships with our network of industry partners across multiple sectors.",
      color: "text-accent",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Empowering Students.
              <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Shaping Careers.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Nli8 Mentor bridges the gap between learning and employment,
              transforming education into meaningful career opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link to="/contact">
                  Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="text-center border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="pt-8 pb-6">
                    <Icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <div className="text-4xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Comprehensive Services for{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Complete Career Readiness
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer a complete suite of services designed to prepare you for
              success in today's competitive job market.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-card"
                >
                  <CardContent className="pt-8 pb-6 space-y-4">
                    <Icon className={`h-12 w-12 ${service.color}`} />
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Students & Partners{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Choose Nli8 Mentor
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-8 pb-6 text-center space-y-4">
                <div className="h-16 w-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Industry-Oriented Curriculum</h3>
                <p className="text-muted-foreground">
                  Courses designed with input from leading employers to match
                  current market demands and ensure job readiness.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="pt-8 pb-6 text-center space-y-4">
                <div className="h-16 w-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold">Expert Mentors & Trainers</h3>
                <p className="text-muted-foreground">
                  Learn from professionals with years of industry experience and
                  academic excellence in their fields.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="pt-8 pb-6 text-center space-y-4">
                <div className="h-16 w-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold">100% Placement Support</h3>
                <p className="text-muted-foreground">
                  Dedicated team committed to connecting you with the right career
                  opportunities throughout your journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="border-none shadow-2xl bg-gradient-hero text-white overflow-hidden relative">
            <CardContent className="py-16 px-8 text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Future?
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Join thousands of students who have launched successful careers
                with Nli8 Mentor. Our team is ready to guide you every step of the
                way.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8"
                asChild
              >
                <Link to="/contact">
                  Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
