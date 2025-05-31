
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonial = {
    quote: "PixelBloom transformed our online presence. Our website looks amazing and we've seen a significant increase in traffic.",
    author: "John Smith",
    title: "Owner, Smith & Co.",
    rating: 5
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Clients Are Saying</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-slate-900/50 border-slate-700">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl text-gray-300 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div>
                <div className="font-semibold text-white text-lg">{testimonial.author}</div>
                <div className="text-gray-400">{testimonial.title}</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
