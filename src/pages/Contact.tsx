
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { sendContactToTelegram, ContactFormData } from "@/utils/telegramBot";
import SEO from "@/components/SEO";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const contactData: ContactFormData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.service,
        budget: formData.budget,
        message: formData.message
      };

      await sendContactToTelegram(contactData, "7056495954");
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        message: ""
      });
    } catch (error) {
      console.error('Error sending to Telegram:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Email",
      info: "gouthamkrishnan991@gmail.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Phone",
      info: "+91 8589055868",
      description: "Call us during business hours"
    },
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Location",
      info: "Desam,Kerala",
      description: "Serving clients nationwide"
    },
    {
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Business Hours",
      info: "Mon-Fri 9AM-6PM",
      description: "EST timezone"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <SEO
        title="Contact PixelBloom - Get Your Free Website Consultation"
        description="Contact PixelBloom for professional website development and SEO services. Free consultation available. Get a quote for your project today."
        keywords="contact web developer, website consultation, get quote, web development contact, SEO consultation"
        canonical="https://pixelbloom.com/contact"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Get In{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            Ready to start your project? Let's discuss your needs and create something amazing together.
          </p>
        </div>
      </section>

      <section className="pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <Card className="bg-slate-900/50 border-slate-700 order-2 lg:order-1">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Send us a message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white text-sm sm:text-base">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="bg-slate-800 border-slate-600 text-white h-10 sm:h-11 text-sm sm:text-base"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white text-sm sm:text-base">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-slate-800 border-slate-600 text-white h-10 sm:h-11 text-sm sm:text-base"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white text-sm sm:text-base">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="bg-slate-800 border-slate-600 text-white h-10 sm:h-11 text-sm sm:text-base"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-white text-sm sm:text-base">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className="bg-slate-800 border-slate-600 text-white h-10 sm:h-11 text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-white text-sm sm:text-base">Service Needed</Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 h-10 sm:h-11 text-sm sm:text-base">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-600 z-50">
                          <SelectItem value="website" className="text-white hover:bg-purple-600 focus:bg-purple-600 focus:text-white text-sm sm:text-base">Website Development</SelectItem>
                          <SelectItem value="seo" className="text-white hover:bg-purple-600 focus:bg-purple-600 focus:text-white text-sm sm:text-base">SEO Optimization</SelectItem>
                          <SelectItem value="gmb" className="text-white hover:bg-purple-600 focus:bg-purple-600 focus:text-white text-sm sm:text-base">Google My Business</SelectItem>
                          <SelectItem value="maintenance" className="text-white hover:bg-purple-600 focus:bg-purple-600 focus:text-white text-sm sm:text-base">Website Maintenance</SelectItem>
                          <SelectItem value="multiple" className="text-white hover:bg-purple-600 focus:bg-purple-600 focus:text-white text-sm sm:text-base">Multiple Services</SelectItem>
                          <SelectItem value="consultation" className="text-white hover:bg-purple-600 focus:bg-purple-600 focus:text-white text-sm sm:text-base">Free Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="budget" className="text-white text-sm sm:text-base">Budget Range</Label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 h-10 sm:h-11 text-sm sm:text-base">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-600 z-50">
                          <SelectItem value="1k-3k" className="text-white hover:bg-pink-600 focus:bg-pink-600 focus:text-white text-sm sm:text-base">$1,000 - $3,000</SelectItem>
                          <SelectItem value="3k-5k" className="text-white hover:bg-pink-600 focus:bg-pink-600 focus:text-white text-sm sm:text-base">$3,000 - $5,000</SelectItem>
                          <SelectItem value="5k-10k" className="text-white hover:bg-pink-600 focus:bg-pink-600 focus:text-white text-sm sm:text-base">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10k+" className="text-white hover:bg-pink-600 focus:bg-pink-600 focus:text-white text-sm sm:text-base">$10,000+</SelectItem>
                          <SelectItem value="discuss" className="text-white hover:bg-pink-600 focus:bg-pink-600 focus:text-white text-sm sm:text-base">Let's discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white text-sm sm:text-base">Project Details *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="bg-slate-800 border-slate-600 text-white min-h-[100px] sm:min-h-[120px] text-sm sm:text-base"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 sm:py-6 text-base sm:text-lg transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Contact Information</h2>
                <div className="space-y-4 sm:space-y-6">
                  {contactInfo.map((item, index) => (
                    <Card key={index} className="bg-slate-900/50 border-slate-700">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-start space-x-3 sm:space-x-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                            {item.icon}
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="text-base sm:text-lg font-semibold text-white mb-1">{item.title}</h3>
                            <p className="text-purple-400 font-medium mb-1 text-sm sm:text-base break-words">{item.info}</p>
                            <p className="text-gray-300 text-xs sm:text-sm">{item.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-purple-500/30">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Why Choose PixelBloom?</h3>
                  <ul className="space-y-2 sm:space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base">Free consultation & project quote</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base">Fast response time (within 24 hours)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base">Transparent pricing with no hidden fees</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base">Ongoing support and maintenance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
