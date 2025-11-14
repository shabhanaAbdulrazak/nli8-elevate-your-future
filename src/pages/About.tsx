import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users, Zap, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our training and mentorship programs.",
    },
    {
      icon: Users,
      title: "Student-Centric",
      description: "Your success is our priority. We tailor our approach to meet individual needs.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously evolve our methods to stay ahead in the dynamic job market.",
    },
    {
      icon: Heart,
      title: "Commitment",
      description: "We're dedicated to transforming lives through quality education and career guidance.",
    },
  ];

  const journey = [
    {
      step: "01",
      title: "Enroll",
      description: "Choose your program and complete a simple registration process through our representatives.",
    },
    {
      step: "02",
      title: "Learn",
      description: "Engage with expert instructors, access cutting-edge resources, and build practical skills.",
    },
    {
      step: "03",
      title: "Practice",
      description: "Apply knowledge through live projects, internships, and comprehensive mock assessments.",
    },
    {
      step: "04",
      title: "Launch Your Career",
      description: "Leverage our placement network to secure positions with top companies in your field.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-hero text-white">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold animate-fade-in">
            About Ni8 Mentor
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
            Transforming Education into Career Success
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <Target className="h-10 w-10 text-primary" />
                <h2 className="text-4xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ni8 Mentor is revolutionizing how students transition from education
                to employment. We combine cutting-edge technology with personalized
                mentorship to deliver quality education, skill enhancement, and
                comprehensive career guidance.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through innovative learning platforms and hands-on training, we
                empower students to develop real-world skills that employers
                actively seek. Our approach ensures every learner is prepared not
                just academically, but professionally.
              </p>
            </div>
            <Card className="border-none shadow-2xl">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <Eye className="h-10 w-10 text-secondary" />
                  <h2 className="text-4xl font-bold">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To become India's leading edu-tech platform that bridges the gap
                  between academic learning and industry requirements, creating a
                  future where every student has access to quality career guidance
                  and placement opportunities.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We envision a world where students are equipped with the right
                  skills, mentorship, and opportunities to achieve their career
                  aspirations and contribute meaningfully to society.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Core{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Ni8 Mentor
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <CardContent className="pt-8 pb-6 text-center space-y-4">
                    <div className="h-16 w-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Your Journey to{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Success Starts Here
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A clear, structured path from enrollment to employment
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {journey.map((item, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="pt-8 pb-6 space-y-4">
                  <div className="text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Makes Us{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Different
              </span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  Real-World Experience
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We don't just teach theory – we provide opportunities to work on
                  actual business challenges from partner companies. Our students
                  build impressive portfolios that showcase their capabilities to
                  future employers, giving them a competitive edge in the job market.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-secondary">
                  Flexible Learning Options
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We understand that every student has unique circumstances. That's
                  why we offer flexible schedules that fit your life – whether
                  you're a full-time student, working professional, or balancing
                  multiple commitments. Learn at your own pace without compromising
                  on quality.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-accent">
                  Industry Connections
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our extensive network of 20+ partner companies across multiple
                  industries ensures that our students have access to diverse career
                  opportunities. We maintain strong relationships with recruiters and
                  hiring managers who actively seek out our graduates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
