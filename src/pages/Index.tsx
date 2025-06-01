
import { ArrowRight, Code, Zap, TrendingUp, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <SEO
        title="PixelBloom - Professional Website Development & SEO Services"
        description="Build a professional website for your business. Modern, responsive websites and SEO optimization to help you stand out online. Free consultation available."
        keywords="website development, web design, SEO, digital marketing, responsive websites, professional websites, business websites"
        canonical="https://pixelbloom.com"
      />
      <Navigation />
      <Hero />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Index;
