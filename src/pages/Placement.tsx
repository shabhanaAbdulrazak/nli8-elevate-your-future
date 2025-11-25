import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Target,
  Briefcase,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
  Building2,
  ArrowRight,
} from "lucide-react";

const Placement = () => {
  const services = [
    {
      icon: Target,
      title: "Interview Preparation",
      description:
        "Comprehensive training covering technical interviews, HR rounds, and group discussions with mock sessions.",
      features: [
        "Mock interviews with industry experts",
        "Real-time feedback and improvement tips",
        "Common interview questions database",
        "Body language and communication coaching",
      ],
    },
    {
      icon: Users,
      title: "Soft Skills Training",
      description:
        "Master essential workplace skills including communication, teamwork, leadership, and professional etiquette.",
      features: [
        "Professional communication workshops",
        "Leadership development programs",
        "Team collaboration exercises",
        "Business etiquette training",
      ],
    },
    {
      icon: Award,
      title: "Resume Building",
      description:
        "Craft ATS-optimized resumes that stand out to recruiters and highlight your unique strengths effectively.",
      features: [
        "ATS-friendly resume templates",
        "Professional writing guidance",
        "Achievement highlighting techniques",
        "Cover letter preparation",
      ],
    },
    {
      icon: TrendingUp,
      title: "Aptitude & Technical Tests",
      description:
        "Regular practice sessions for quantitative, reasoning, and technical assessments used in recruitment.",
      features: [
        "Weekly mock tests and assessments",
        "Detailed performance analytics",
        "Customized improvement plans",
        "Company-specific test preparation",
      ],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Skills Assessment",
      description: "We evaluate your current skills, strengths, and areas for improvement.",
    },
    {
      step: "02",
      title: "Training Program",
      description: "Customized training based on your career goals and target companies.",
    },
    {
      step: "03",
      title: "Mock Interviews",
      description: "Practice with industry experts and receive detailed feedback.",
    },
    {
      step: "04",
      title: "Company Connections",
      description: "Get matched with relevant opportunities from our partner network.",
    },
    {
      step: "05",
      title: "Interview Support",
      description: "Ongoing guidance and support throughout your interview process.",
    },
    {
      step: "06",
      title: "Offer Negotiation",
      description: "Assistance with salary negotiation and offer evaluation.",
    },
  ];

  const companies = [
    "TCS", "Infosys", "Wipro", "Cognizant", "Accenture",
    "HCL", "Tech Mahindra", "Amazon", "Microsoft", "Google"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-hero text-white">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold animate-fade-in">
            Placement Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
            100% Placement Support - Your Gateway to Career Success
          </p>
          <div className="pt-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-none shadow-lg text-center">
              <CardContent className="pt-8 pb-6">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-4xl font-bold mb-2 text-primary">87%</div>
                <div className="text-muted-foreground font-medium">
                  Placement Success Rate
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg text-center">
              <CardContent className="pt-8 pb-6">
                <Building2 className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <div className="text-4xl font-bold mb-2 text-secondary">20+</div>
                <div className="text-muted-foreground font-medium">
                  Partner Companies
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg text-center">
              <CardContent className="pt-8 pb-6">
                <Users className="h-12 w-12 mx-auto mb-4 text-accent" />
                <div className="text-4xl font-bold mb-2 text-accent">1000+</div>
                <div className="text-muted-foreground font-medium">
                  Students Placed
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Comprehensive{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Placement Training
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to ace your interviews and land your dream job
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="pt-8 pb-6 space-y-4">
                    <Icon className="h-12 w-12 text-primary" />
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                    <ul className="space-y-2 pt-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Placement Process
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A structured approach to ensure your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="pt-8 pb-6 space-y-4">
                  <div className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Companies */}
    {/* Partner Companies */}
<section className="py-20 px-4">
  <div className="container mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Our{" "}
        <span className="bg-gradient-hero bg-clip-text text-transparent">
          Hiring Partners
        </span>
      </h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        We work with leading companies across industries
      </p>
    </div>

    {/* Sliding Logo Carousel */}
    <div className="overflow-hidden py-4">
      <div className="flex space-x-6 animate-slide">

        {[...companies, ...companies].map((company, index) => (
          <div
            key={index}
            className="min-w-[150px] px-6 py-4 bg-white shadow-md rounded-xl flex items-center justify-center"
          >
            <span className="text-lg font-semibold text-muted-foreground">
              {company}
            </span>
          </div>
        ))}

      </div>
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <Card className="border-none shadow-2xl bg-gradient-hero text-white">
            <CardContent className="py-16 px-8 text-center">
              <Briefcase className="h-16 w-16 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Launch Your Career?
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Join our placement program and get connected with top companies
                hiring right now.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Placement;
