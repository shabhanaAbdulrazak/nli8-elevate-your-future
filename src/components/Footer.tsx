import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Nli8 Mentor
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering Students. Shaping Careers. Where education meets opportunity,
              and potential becomes success.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/placement"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Placement Services
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Placement Training</li>
              <li>Placement Assistance</li>
              <li>Semester Courses</li>
              <li>Career Counseling</li>
              <li>Live Projects</li>
              <li>Internship Programs</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <a
                  href="mailto:sales@nli8mentor.in"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  sales@nli8mentor.in
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <a
                  href="tel:+919876543210"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 63790 88867
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-muted-foreground">No : 8/13, PILLAYAR KOIL STREET, Pammal, Chennai,
Chengalpattu, Tamil Nadu, 600075</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Nli8 Mentor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
