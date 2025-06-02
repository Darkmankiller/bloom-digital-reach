
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in text-center lg:text-left">
            <header>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Build a Professional{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Website
                </span>{" "}
                for Your Business
              </h1>
            </header>
            
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We create modern, responsive websites to help you stand out online. 
              From design to SEO optimization, we've got everything you need to grow your business.
            </p>

            <nav aria-label="Call to action buttons">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg transition-all duration-200 hover:scale-105 touch-manipulation"
                  onClick={() => navigate("/contact")}
                  aria-label="Book a free consultation with PixelBloom"
                >
                  Book a Free Consultation
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-white hover:bg-slate-800 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg transition-all duration-200 touch-manipulation"
                  onClick={() => navigate("/contact")}
                  aria-label="Get a quote for your website project"
                >
                  Get a Quote
                </Button>
              </div>
            </nav>
          </div>

          {/* Visual Elements */}
          <div className="relative animate-fade-in order-first lg:order-last" role="img" aria-label="Website development illustration">
            <div className="relative">
              {/* Main card */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-700 shadow-2xl">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4" aria-label="Browser window controls">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" aria-label="Close button"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" aria-label="Minimize button"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" aria-label="Maximize button"></div>
                  </div>
                </div>
                <div className="space-y-2 sm:space-y-3" aria-label="Website content preview">
                  <div className="h-2 sm:h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded w-3/4"></div>
                  <div className="h-1.5 sm:h-2 bg-slate-600 rounded w-1/2"></div>
                  <div className="h-1.5 sm:h-2 bg-slate-600 rounded w-2/3"></div>
                </div>
              </div>

              {/* Floating SEO badge */}
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg sm:rounded-xl p-2 sm:p-4 shadow-xl border border-purple-500/20">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <TrendingUp className="w-4 h-4 sm:w-6 sm:h-6 text-white" aria-hidden="true" />
                  <span className="text-white font-semibold text-xs sm:text-base">SEO</span>
                </div>
              </div>

              {/* Floating analytics badge */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg sm:rounded-xl p-2 sm:p-4 shadow-xl border border-blue-500/20">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <Zap className="w-4 h-4 sm:w-6 sm:h-6 text-white" aria-hidden="true" />
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
