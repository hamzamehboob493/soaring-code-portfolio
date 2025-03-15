
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialSlider = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "TheCodeSoars transformed our business with their innovative solutions. Their team's expertise and dedication were outstanding.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CTO, HealthTech",
      content: "Working with TheCodeSoars was a game-changer. They delivered our healthcare platform ahead of schedule.",
      rating: 5,
    },
    {
      name: "Emma Davis",
      role: "Founder, EduLearn",
      content: "The team's attention to detail and technical expertise helped us create an exceptional learning platform.",
      rating: 5,
    },
  ];

  return (
    <Carousel className="max-w-5xl mx-auto">
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2">
            <div className="p-1">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-agency-sky text-agency-sky" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default TestimonialSlider;
