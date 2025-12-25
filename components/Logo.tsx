
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`${className} relative flex items-center justify-center`}>
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Hexagonal Background Frame */}
        <path 
          d="M50 5L89.5 27.5V72.5L50 95L10.5 72.5V27.5L50 5Z" 
          stroke="url(#logo-gradient)" 
          strokeWidth="8" 
          strokeLinejoin="round"
          className="opacity-20"
        />
        
        {/* Main Hexagonal Brand Mark */}
        <path 
          d="M50 15L80.5 32.5V67.5L50 85L19.5 67.5V32.5L50 15Z" 
          fill="white"
          className="drop-shadow-sm"
        />
        
        {/* Stylized 'J' Path */}
        <path 
          d="M55 30V65C55 70.5228 50.5228 75 45 75C39.4772 75 35 70.5228 35 65" 
          stroke="url(#logo-gradient)" 
          strokeWidth="10" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          filter="url(#glow)"
        />
        
        <path 
          d="M45 30H65" 
          stroke="url(#logo-gradient)" 
          strokeWidth="10" 
          strokeLinecap="round"
          filter="url(#glow)"
        />

        {/* Tech Accents */}
        <circle cx="65" cy="30" r="4" fill="#06b6d4" />
        <circle cx="35" cy="65" r="4" fill="#2563eb" />
      </svg>
    </div>
  );
};

export default Logo;
