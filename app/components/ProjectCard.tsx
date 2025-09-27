"use client"

import React from 'react';
import { ProjectType } from '@/app/utils/types';
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';

export const ProjectCard = ({ project, index }: { project: ProjectType; index: number }) => {
  return (
    <div 
      className="project-card-hover group text-white relative overflow-hidden bg-card hover:border-primary transition-colors"
      style={{ 
        animationDelay: `${index * 150}ms`,
      }}
    >
      <div className="p-4 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        
        <h3 className="text-xl font-bold font-base text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="min-h-48 text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex gap-3">
          {project.live ? (
          <button
            suppressHydrationWarning={true}
            className="rounded-2xl flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
          >
            {project.live && (
            <Link href={project.live} target="_blank" rel="noopener noreferrer"
            className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            Live Demo
            </Link>
            )}
          </button>
          )
          : (
            <button
            suppressHydrationWarning={true}
            className="flex-1 items-center group/btn border-border/50 hover:border-primary/50 hover:bg-gradient-hover transition-all duration-300"
          >
            {project.github && (
            <Link href={project.github} target="_blank" rel="noopener noreferrer" className='flex items-center justify-center'>
              <FaGithub className="w-4 h-4 mr-2 transition-transform duration-300 group-hover/btn:rotate-12" />
              Code
            </Link> )}
          </button>
          )}  
        </div>
      </div>
    </div>
  );
};