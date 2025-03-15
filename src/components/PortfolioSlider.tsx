
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const PortfolioSlider = () => {
  const portfolioItems = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online shopping platform with advanced filtering and real-time inventory management.",
      image: "/placeholder.svg",
      link: "#",
    },
    {
      title: "Healthcare App",
      description: "Patient management system with integrated telehealth features and appointment scheduling.",
      image: "/placeholder.svg",
      link: "#",
    },
    {
      title: "Financial Dashboard",
      description: "Real-time financial data visualization platform with predictive analytics.",
      image: "/placeholder.svg",
      link: "#",
    },
    {
      title: "Educational Platform",
      description: "Interactive learning management system with video conferencing integration.",
      image: "/placeholder.svg",
      link: "#",
    },
  ];

  return (
    <Carousel className="max-w-5xl mx-auto">
      <CarouselContent>
        {portfolioItems.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-t-lg" />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <a
                    href={item.link}
                    className="text-agency-blue hover:text-agency-sky flex items-center gap-2 transition-colors"
                  >
                    View Project <ExternalLink className="h-4 w-4" />
                  </a>
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

export default PortfolioSlider;
