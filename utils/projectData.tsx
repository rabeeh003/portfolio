interface Project {
  title: string;
  banner: string;
  description: string;
  skills: string[];
}
import mala from "../public/Images/mala.jpg"

const projects: Project[] = [
  {
    title: "emash",
    banner: '/Images/projects/emash.webp',
    description: "Learning app ( video totorial app )",
    skills: ["React", "JavaScript", "HTML", "CSS"]
  },
  {
    title: "Project 1",
    banner: '/Images/projects/movieapp.png',
    description: "Description of Project 1. This is a sample project.",
    skills: ["React", "JavaScript", "HTML", "CSS"]
  },{
    title: "Project 1",
    banner: '/Images/projects/misbahweb.webp',
    description: "Description of Project 1. This is a sample project.",
    skills: ["React", "JavaScript", "HTML", "CSS"]
  },{
    title: "Project 1",
    banner: '/Images/projects/shwort.webp',
    description: "Description of Project 1. This is a sample project.",
    skills: ["React", "JavaScript", "HTML", "CSS"]
  }
];

export default projects;
