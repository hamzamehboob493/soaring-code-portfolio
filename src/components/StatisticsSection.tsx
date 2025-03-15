
import { useState, useEffect } from 'react';
import { Users, Trophy, Briefcase, Star } from 'lucide-react';
import { Card } from './ui/card';

const StatisticsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const stats = [
    { icon: <Users className="h-8 w-8" />, value: "100+", label: "Happy Clients" },
    { icon: <Trophy className="h-8 w-8" />, value: "150+", label: "Projects Completed" },
    { icon: <Briefcase className="h-8 w-8" />, value: "10+", label: "Industries Served" },
    { icon: <Star className="h-8 w-8" />, value: "5", label: "Years Experience" },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className={`p-6 text-center transform transition-all duration-500 delay-${index * 100} 
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <div className="text-agency-blue mx-auto mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-bold text-agency-blue mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
