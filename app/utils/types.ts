// type StaticImageData = {
//   src: string;
//   height: number;
//   width: number;
//   placeholder?: string;
// };

import { StaticImageData } from 'next/image';

export type ProjectType = {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
  live?: string;
  github?: string;
}

export type Skill = {
  name: string;
  icon: StaticImageData;
}

export type SkillSliderProps = {
  title: string;
  skills: Skill[];
  direction: 'left-to-right' | 'right-to-left';
}