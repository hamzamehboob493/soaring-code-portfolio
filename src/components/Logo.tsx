
import { Rocket } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
      <Rocket className="h-6 w-6 text-agency-blue animate-pulse" />
      <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-agency-blue to-agency-sky">
        TheCodeSoars
      </span>
    </div>
  );
};

export default Logo;
