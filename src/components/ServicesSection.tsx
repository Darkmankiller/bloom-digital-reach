
import { Card, CardContent } from "@/components/ui/card";
import { Code, Search, Smartphone } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Website Development",
      description: "Modern, responsive websites built to help you stand out online.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Search Engine Optimization", 
      description: "Help you stand out online with proven SEO strategies.",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Google My Business",
      description: "Optimize your local presence with strategic local SEO.",
      color: "from-green-500 to-blue-500"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to establish a strong online presence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-slate-900/50 border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105 group"
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
