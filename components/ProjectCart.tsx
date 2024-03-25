import React from 'react';
import Image from 'next/image'; // Assuming you're using Next.js Image component
import mala from "../public/Images/mala.jpg"

interface Project {
  title: string;
  banner: string;
  description: string;
  skills: string[];
}

interface ProjectProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  const { title, banner, description, skills } = project;
  const aspectRatio = 16 / 9; // Assuming a 16:9 aspect ratio
  const width = 380; // Desired width
  const height = width / aspectRatio;
  return (
    <div className='flex-initial mt-5 w-[90%] sm:w-[250px] p-2 bg-background rounded-md '>
      <Image width={width} height={height} className='h-[150px] w-[100%] rounded-md' src={banner} alt='bgImg1' />
      <span className='text-xl font-semibold font-sans'>{title}</span><br />
      <span className='text-gray-400 my-3 text-lg'>{description}</span>
      <p className='text-gray-500'>Skills: {skills.join(', ')}</p>
    </div>
  );
};

export default ProjectCard;
