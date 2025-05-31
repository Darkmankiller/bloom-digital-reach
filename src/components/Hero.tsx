
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Build a Professional{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Website
              </span>{" "}
              for Your Business
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              We create modern, responsive websites to help you stand out online. 
              From design to SEO optimization, we've got everything you need to grow your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
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

          {/* Visual Elements */}
          <div className="relative animate-fade-in">
            <div className="relative">
              {/* Main card */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 shadow-2xl">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded w-3/4"></div>
                  <div className="h-2 bg-slate-600 rounded w-1/2"></div>
                  <div className="h-2 bg-slate-600 rounded w-2/3"></div>
                </div>
              </div>

              {/* Floating SEO badge */}
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-4 shadow-xl border border-purple-500/20">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-6 h-6 text-white" />
                  <span className="text-white font-semibold">SEO</span>
                </div>
              </div>

              {/* Floating analytics badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 shadow-xl border border-blue-500/20">
                <div className="flex items-center space-x-2">
                  <Zap className="w-6 h-6 text-white" />
                  <div className="text-white">
                    <div className="text-xs">Performance</div>
                    <div className="text-sm font-bold">95%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
