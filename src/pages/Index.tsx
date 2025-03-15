import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import PortfolioSlider from '@/components/PortfolioSlider';
import TestimonialSlider from '@/components/TestimonialSlider';
import StatisticsSection from '@/components/StatisticsSection';
import { Card } from '@/components/ui/card';
import { Code, Briefcase, Users, Mail, ExternalLink } from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Software Development",
      description: "Tailored solutions to meet your specific business needs",
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Web Development",
      description: "Modern and responsive websites that drive results",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Augmentation",
      description: "Skilled developers to strengthen your team",
    },
  ];

  const portfolioItems = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online shopping platform",
      link: "#",
    },
    {
      title: "Healthcare App",
      description: "Patient management system",
      link: "#",
    },
    {
      title: "Financial Dashboard",
      description: "Real-time financial data visualization",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-agency-gray">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-28 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`space-y-6 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-agency-blue">
              Elevate Your Digital Presence
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We transform your ideas into powerful software solutions that drive growth and innovation.
            </p>
            <Button className="bg-agency-blue hover:bg-agency-blue/90 text-lg px-8 py-6">
              Get Started <ChevronRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-agency-blue">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-agency-blue mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <StatisticsSection />

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-agency-blue">Our Portfolio</h2>
          <PortfolioSlider />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-agency-blue">What Our Clients Say</h2>
          <TestimonialSlider />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-agency-blue mb-4">Get in Touch</h2>
            <p className="text-gray-600">Reach out to us for a free consultation</p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-agency-blue text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TheCodeSoars</h3>
              <p className="text-gray-300">
                Transforming ideas into powerful software solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-300">Email: contact@thecodesoars.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
                <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-300 hover:text-white">GitHub</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} TheCodeSoars. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
