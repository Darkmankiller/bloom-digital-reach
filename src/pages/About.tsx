
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, Clock, Target, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "100+", label: "Happy Clients" },
    { icon: <Award className="w-8 h-8" />, number: "200+", label: "Projects Completed" },
    { icon: <Clock className="w-8 h-8" />, number: "5+", label: "Years Experience" },
    { icon: <Target className="w-8 h-8" />, number: "98%", label: "Client Satisfaction" }
  ];

  const values = [
    {
      title: "Quality First",
      description: "We never compromise on quality. Every website we build is crafted with attention to detail and built to last."
    },
    {
      title: "Client Success",
      description: "Your success is our success. We work closely with you to understand your goals and deliver results that matter."
    },
    {
      title: "Innovation",
      description: "We stay ahead of the curve with the latest technologies and design trends to keep your business competitive."
    },
    {
      title: "Transparency",
      description: "Clear communication and honest pricing. You'll always know what you're getting and why it matters."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                About{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  PixelBloom
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                We're a passionate team of web developers and digital marketers dedicated to helping 
                local businesses, startups, and entrepreneurs establish a powerful online presence.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Since our founding, we've helped hundreds of businesses transform their digital presence 
                with modern, responsive websites and effective SEO strategies. We believe that every 
                business deserves a professional website that drives results.
              </p>

              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg transition-all duration-200 hover:scale-105"
                onClick={() => navigate("/contact")}
              >
                Work With Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <div className="text-white">
                          {stat.icon}
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="bg-slate-900/50 border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            To empower businesses of all sizes with professional, high-performing websites 
            that drive growth and success. We believe that great design and functionality 
            should be accessible to everyone, not just large corporations.
          </p>
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-slate-700">
            <p className="text-lg text-gray-300 leading-relaxed">
              "We don't just build websites – we create digital experiences that connect 
              businesses with their customers and help them achieve their goals."
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help you achieve your online goals.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg transition-all duration-200 hover:scale-105"
            onClick={() => navigate("/contact")}
          >
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
