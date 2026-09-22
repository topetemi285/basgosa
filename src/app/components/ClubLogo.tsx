'use client';

import React from 'react';
import Link from 'next/link';

interface ClubLogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'hero';
  isLightMode?: boolean;
}

export default function ClubLogo({
  className = '',
  showText = true,
  size = 'lg',
  isLightMode = true,
}: ClubLogoProps) {
  const sizeMap = {
    sm: { icon: 'w-14 h-14', text: 'text-base', sub: 'text-[11px]' },
    md: { icon: 'w-20 h-20', text: 'text-xl', sub: 'text-xs' },
    lg: { icon: 'w-28 h-28', text: 'text-2xl', sub: 'text-sm' },
    xl: { icon: 'w-36 h-36', text: 'text-3xl', sub: 'text-base' },
    '2xl': { icon: 'w-48 h-48', text: 'text-4xl', sub: 'text-lg' },
    hero: { icon: 'w-56 h-56 sm:w-64 sm:h-64', text: 'text-4xl sm:text-5xl', sub: 'text-base sm:text-lg' },
  };

  const currentSize = sizeMap[size];

  return (
    <Link href="/" className={`inline-flex items-center gap-4 group focus:outline-none ${className}`}>
      {/* Exact Official BKFA Large Badge Crest SVG */}
      <div className={`relative ${currentSize.icon} flex-shrink-0 transition-transform duration-300 group-hover:scale-105 filter drop-shadow-xl`}>
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Curved Path for Top Text */}
            <path
              id="topTextPath"
              d="M 28 100 A 72 72 0 0 1 172 100"
              fill="none"
            />
            {/* Curved Path for Bottom Text */}
            <path
              id="bottomTextPath"
              d="M 172 100 A 72 72 0 0 1 28 100"
              fill="none"
            />
            {/* Gradients */}
            <linearGradient id="wingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFA040" />
              <stop offset="50%" stopColor="#FF6B00" />
              <stop offset="100%" stopColor="#D94B00" />
            </linearGradient>
            <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#559910" />
              <stop offset="50%" stopColor="#76C816" />
              <stop offset="100%" stopColor="#559910" />
            </linearGradient>
          </defs>

          {/* Outermost Ring (Black) */}
          <circle cx="100" cy="100" r="98" fill="#0A0E1A" stroke="#000000" strokeWidth="2.5" />

          {/* Orange Ring Border */}
          <circle cx="100" cy="100" r="94" fill="none" stroke="#FF6B00" strokeWidth="6.5" />

          {/* White Outer Band */}
          <circle cx="100" cy="100" r="88" fill="#FFFFFF" stroke="#0A0E1A" strokeWidth="2.5" />

          {/* Inner Circle (Black Backdrop) */}
          <circle cx="100" cy="100" r="62" fill="#0A0E1A" stroke="#0A0E1A" strokeWidth="2" />

          {/* Outer Ring Text: Top: BLESSED KAA FOOTBALL ACADEMY */}
          <text fill="#0A0E1A" fontSize="11" fontWeight="900" letterSpacing="0.8" fontFamily="'Outfit', sans-serif">
            <textPath href="#topTextPath" startOffset="50%" textAnchor="middle">
              BLESSED KAA FOOTBALL ACADEMY
            </textPath>
          </text>

          {/* Outer Ring Text: Bottom: THE LIGHT THAT CAN NOT BE HIDDEN */}
          <text fill="#0A0E1A" fontSize="7.5" fontWeight="800" letterSpacing="1" fontFamily="'Outfit', sans-serif">
            <textPath href="#bottomTextPath" startOffset="50%" textAnchor="middle">
              • THE LIGHT THAT CAN NOT BE HIDDEN •
            </textPath>
          </text>

          {/* Top Text Inside Circle: BKFA in Lemon Green */}
          <text
            x="100"
            y="65"
            textAnchor="middle"
            fill="#76C816"
            fontSize="22"
            fontWeight="900"
            fontFamily="'Outfit', sans-serif"
            letterSpacing="1"
          >
            BKFA
          </text>

          {/* Orange Wings Left */}
          <g fill="url(#wingGrad)">
            {/* Wing Feather 1 */}
            <path d="M 68 100 C 50 85 45 68 55 65 C 62 65 65 80 72 94 Z" />
            {/* Wing Feather 2 */}
            <path d="M 66 106 C 45 95 40 82 48 78 C 55 78 60 90 68 102 Z" />
            {/* Wing Feather 3 */}
            <path d="M 68 114 C 48 108 45 98 52 94 C 58 94 62 104 70 110 Z" />
          </g>

          {/* Orange Wings Right */}
          <g fill="url(#wingGrad)">
            {/* Wing Feather 1 */}
            <path d="M 132 100 C 150 85 155 68 145 65 C 138 65 135 80 128 94 Z" />
            {/* Wing Feather 2 */}
            <path d="M 134 106 C 155 95 160 82 152 78 C 145 78 140 90 132 102 Z" />
            {/* Wing Feather 3 */}
            <path d="M 132 114 C 152 108 155 98 148 94 C 142 94 138 104 130 110 Z" />
          </g>

          {/* Center Football Ball */}
          <g>
            <circle cx="100" cy="102" r="22" fill="#FFFFFF" stroke="#000000" strokeWidth="2.5" />
            {/* Center Pentagon */}
            <polygon points="100,92 110,99 106,110 94,110 90,99" fill="#0A0E1A" />
            {/* Seams */}
            <line x1="100" y1="92" x2="100" y2="81" stroke="#0A0E1A" strokeWidth="2" />
            <line x1="110" y1="99" x2="119" y2="94" stroke="#0A0E1A" strokeWidth="2" />
            <line x1="106" y1="110" x2="114" y2="120" stroke="#0A0E1A" strokeWidth="2" />
            <line x1="94" y1="110" x2="86" y2="120" stroke="#0A0E1A" strokeWidth="2" />
            <line x1="90" y1="99" x2="81" y2="94" stroke="#0A0E1A" strokeWidth="2" />
          </g>

          {/* Green Ribbon / Banner with "THE CONQUERORS" */}
          <path
            d="M 64 130 Q 100 138 136 130 L 140 138 Q 100 146 60 138 Z"
            fill="url(#ribbonGrad)"
            stroke="#4D7C0F"
            strokeWidth="0.8"
          />
          {/* Ribbon Ends */}
          <polygon points="60,138 52,132 55,144 64,136" fill="#4D7C0F" />
          <polygon points="140,138 148,132 145,144 136,136" fill="#4D7C0F" />

          {/* Slogan on Ribbon */}
          <text
            x="100"
            y="136"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="6"
            fontWeight="900"
            letterSpacing="0.8"
            fontFamily="'Outfit', sans-serif"
          >
            THE CONQUERORS
          </text>

          {/* Bottom Text: SINCE 2014 */}
          <text
            x="100"
            y="152"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="8"
            fontWeight="800"
            letterSpacing="1"
            fontFamily="'Outfit', sans-serif"
          >
            SINCE 2014
          </text>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span
              className={`font-display font-black tracking-tight ${
                isLightMode ? 'text-bkfa-navy' : 'text-white'
              } leading-none ${currentSize.text} group-hover:text-bkfa-orange transition-colors`}
            >
              BLESSED KAA
            </span>
            <span className="bg-bkfa-lemon text-bkfa-navy font-black text-xs sm:text-sm px-2 py-0.5 rounded-md tracking-wider font-display uppercase shadow-xs">
              FA
            </span>
          </div>
          <span className={`font-sans tracking-wider text-slate-500 uppercase font-bold mt-1 ${currentSize.sub}`}>
            The Conquerors • Est. 2014
          </span>
        </div>
      )}
    </Link>
  );
}
