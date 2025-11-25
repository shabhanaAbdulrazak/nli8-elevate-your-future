import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star, Briefcase, GraduationCap, Building2 } from "lucide-react";
import Testimonial1 from "@/asset/Testimonial1.mp4";
import Testimonial2 from "@/asset/Testimonial2.mp4";
import Testimonial3 from "@/asset/Testimonial3.mp4";


const Testimonials = () => {
  const testimonials = [
    {
      name: "Nikhil",
      role: "Software Developer",
      company: "Tech Company",
      image: GraduationCap,
      rating: 5,
      text: "Nli8 Mentor's placement training transformed my interview skills completely. Within two months of completing the program, I landed my dream job at a top tech company. The mock interviews and personalized feedback were game-changers.",
    },
    {
      name: "Anjali",
      role: "AI Developer",
      company: "Leading Company",
      image: GraduationCap,
      rating: 5,
      text: "The career counseling helped me discover my true passion. The mentors guided me through every step, from choosing the right path to preparing for interviews. I'm now working as an AI developer at a leading company.",
    },
    {
      name: "Hiring Partner",
      role: "HR Manager",
      company: "Fortune 500 Company",
      image: Building2,
      rating: 5,
      text: "Nli8 Mentor students consistently demonstrate exceptional preparedness and professionalism. Their training programs produce graduates who are truly job-ready from day one. We've hired over 5+ Nli8 Mentor alumni.",
    },
    {
      name: "Priya Sharma",
      role: "Data Analyst",
      company: "Analytics Firm",
      image: GraduationCap,
      rating: 5,
      text: "The comprehensive semester courses helped me maintain excellent grades while building practical skills. The live projects were incredibly valuable in understanding real-world applications of what we learned in class.",
    },
    {
      name: "Rahul Kumar",
      role: "Full Stack Developer",
      company: "Startup",
      image: GraduationCap,
      rating: 5,
      text: "The internship program provided by Nli8 Mentor gave me hands-on experience that made all the difference. I learned more in those 3 months than I did in years of theoretical study. Highly recommended for serious learners.",
    },
    {
      name: "Sneha Patel",
      role: "Business Analyst",
      company: "Consulting Firm",
      image: GraduationCap,
      rating: 5,
      text: "The soft skills training and interview preparation were exceptional. I went from being nervous about interviews to confidently handling multiple rounds. Got placed in my dream company with an amazing package!",
    },
  ];

  const stats = [
    { number: "4.6/5", label: "Average Rating", sublabel: "Student Satisfaction" },
    { number: "1000+", label: "Success Stories", sublabel: "And Counting" },
    { number: "87%", label: "Placement Rate", sublabel: "Industry Leading" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-hero text-white">
        <div className="container mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold animate-fade-in">
            Student Testimonials
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
            Success Stories That Inspire
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={index} className="border-none shadow-lg text-center">
                <CardContent className="pt-8 pb-6">
                  <Star className="h-12 w-12 mx-auto mb-4 text-accent fill-accent" />
                  <div className="text-4xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-lg font-medium text-foreground">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.sublabel}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Students Say
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real experiences from students who transformed their careers with Nli8 Mentor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => {
              const Icon = testimonial.image;
              return (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-card"
                >
                  <CardContent className="pt-8 pb-6 space-y-4">
                    <Quote className="h-10 w-10 text-primary/30" />
                    
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-accent fill-accent"
                        />
                      ))}
                    </div>

                    <p className="text-muted-foreground leading-relaxed italic">
                      "{testimonial.text}"
                    </p>

                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center space-x-4">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <div className="font-bold text-foreground">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </div>
                          <div className="text-sm text-primary font-medium">
                            {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
   <section className="py-20 px-4 bg-muted/50">
  <div className="container mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        More{" "}
        <span className="bg-gradient-hero bg-clip-text text-transparent">
          Success Stories
        </span>
      </h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Join thousands of students who have transformed their careers
      </p>
    </div>

    {/* Video Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
      
      <Card className="border-none shadow-lg overflow-hidden">
        <CardContent className="p-0">
         <video className="w-full h-64 md:h-80 rounded-md" controls>
            <source src={Testimonial3} type="video/mp4" />
         </video>
        </CardContent>
      </Card>

      <Card className="border-none shadow-lg overflow-hidden">
        <CardContent className="p-0">
         <video className="w-full h-64 md:h-80 rounded-md" controls>
               <source src={Testimonial2} type="video/mp4" />
        </video>
        </CardContent>
      </Card>

      <Card className="border-none shadow-lg overflow-hidden">
        <CardContent className="p-0">
         <video className="w-full h-64 md:h-80 rounded-md" controls>
            <source src={Testimonial1} type="video/mp4" />
         </video>
        </CardContent>
      </Card>

    </div>

    {/* Info Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <Card className="border-none shadow-lg">
        <CardContent className="p-8 space-y-4">
          <Briefcase className="h-12 w-12 text-secondary" />
          <h3 className="text-2xl font-bold">From Campus to Corporate</h3>
          <p className="text-muted-foreground leading-relaxed">
            Watch how our students transition seamlessly from college campuses
            to corporate boardrooms, armed with the skills and confidence
            Nli8 Mentor builds.
          </p>
          <div className="text-sm text-primary font-medium">
            Average salary increase: 40%
          </div>
        </CardContent>
      </Card>

      <Card className="border-none shadow-lg">
        <CardContent className="p-8 space-y-4">
          <GraduationCap className="h-12 w-12 text-accent" />
          <h3 className="text-2xl font-bold">Career Transformation</h3>
          <p className="text-muted-foreground leading-relaxed">
            Real stories of students who switched careers successfully with
            our structured roadmap & expert guidance.
          </p>
          <div className="text-sm text-primary font-medium">
            Career switch success rate: 78%
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</section>


      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="border-none shadow-2xl bg-gradient-hero text-white">
            <CardContent className="py-16 px-8 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Join Nli8 Mentor today and become part of our growing community of
                successful professionals.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-md bg-white text-primary hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Journey
              </a>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
