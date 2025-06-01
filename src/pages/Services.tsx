
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Search, Smartphone, Zap, TrendingUp, Monitor, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "@/components/SEO";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Website Development",
      description: "Modern, responsive websites built with the latest technologies to ensure your business stands out online.",
      features: [
        "Responsive design for all devices",
        "Fast loading speeds",
        "SEO-friendly structure", 
        "Content management system",
        "E-commerce integration"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: "Search Engine Optimization",
      description: "Comprehensive SEO strategies to improve your website's visibility and drive organic traffic.",
      features: [
        "Keyword research & analysis",
        "On-page optimization",
        "Technical SEO audits",
        "Content strategy",
        "Performance tracking"
      ],
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Google My Business",
      description: "Optimize your local presence and help customers find your business with strategic local SEO.",
      features: [
        "Profile optimization",
        "Review management",
        "Local keyword targeting",
        "Citation building",
        "Performance analytics"
      ],
      color: "from-green-500 to-blue-500"
    },
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "Website Maintenance",
      description: "Keep your website secure, updated, and performing at its best with our maintenance services.",
      features: [
        "Regular security updates",
        "Performance monitoring",
        "Content updates",
        "Backup management",
        "Technical support"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Analytics & Reporting",
      description: "Track your website's performance and gain insights to make data-driven decisions.",
      features: [
        "Google Analytics setup",
        "Conversion tracking",
        "Monthly reports",
        "Performance insights",
        "Growth recommendations"
      ],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Performance Optimization",
      description: "Improve your website's speed and user experience to boost conversions and rankings.",
      features: [
        "Speed optimization",
        "Image compression",
        "Code minification",
        "CDN setup",
        "Performance monitoring"
      ],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <SEO
        title="Web Development & SEO Services - PixelBloom"
        description="Comprehensive web development and digital marketing solutions. Website development, SEO optimization, Google My Business, and website maintenance services."
        keywords="web development services, SEO services, website maintenance, Google My Business, digital marketing, responsive web design"
        canonical="https://pixelbloom.com/services"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive web development and digital marketing solutions to help your business thrive online.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="bg-slate-900/50 border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105 group h-full"
              >
                <CardContent className="p-6 h-full flex flex-col">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed flex-grow">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution that fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg transition-all duration-200 hover:scale-105"
              onClick={() => navigate("/contact")}
            >
              Book a Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-gray-600 text-white hover:bg-slate-800 px-8 py-6 text-lg transition-all duration-200"
              onClick={() => navigate("/contact")}
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
