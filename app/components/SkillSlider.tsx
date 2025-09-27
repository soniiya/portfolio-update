"use client"

import React from 'react';
import Image from 'next/image';
import { SkillSliderProps } from '@/app/utils/types';

export const SkillSlider = (props: SkillSliderProps) => {
  const animationClass = props.direction === 'left-to-right' ? 'animate-scroll-infinite' : 'animate-scroll-infinite-reverse';
  const opacityGradient = props.direction === 'left-to-right'
    ? 'bg-gradient-to-r from-background to-transparent'
    : 'bg-gradient-to-l from-background to-transparent';


    return (
    <div>
      <h3 className="text-white text-xl font-semibold font-cursive text-center mb-6 text-foreground">
        {props.title}
      </h3>
      <div className="relative overflow-hidden">
         <div className={`flex ${animationClass}`}>
          {/* Map through the skills array twice to create the seamless loop */}
          {props.skills.concat(props.skills).map((skill, index) => (
            <div
              key={`skill-${index}`}
              className="flex-shrink-0 mx-4"
            >
              <div className="text-lg font-medium border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:scale-105 bg-card/80 backdrop-blur-sm">
                <div className="w-[200px] h-[100px] overflow-hidden">
                  <Image
                    className="object-cover w-full h-full"
                    src={skill.icon}
                    alt={skill.name}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Gradient overlays for smooth edges */}
        <div className={`absolute left-0 top-0 w-20 h-full ${opacityGradient} z-10 pointer-events-none`}></div>
        <div className={`absolute right-0 top-0 w-20 h-full ${props.direction === 'left-to-right' ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-background to-transparent z-10 pointer-events-none`}></div>
      </div>
    </div>
    )
}
