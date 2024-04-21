interface Project {
  title: string;
  banner: string;
  description: string;
  category: string[];
  skills: string[];
}
import mala from "../public/Images/mala.jpg"

const projects: Project[] = [
  
  {
    title: "Misbah web",
    banner: '/Images/projects/misbahweb.webp',
    description: "This website for developed for showcasing my First app..",
    category: ["website",],
    skills: ["JavaScript", "HTML", "CSS", "Bootstrap"]
  },
  {
    title: "Short",
    banner: '/Images/projects/shwort.webp',
    description: "Find nearest shops, Me and my team developed a HYPERLOCAL MARKETPLACE APP using React Native.",
    category: ["app",],
    skills: ["React", "Team work",]
  },
  {
    title: "Movie App",
    banner: '/Images/projects/movieapp.png',
    description: "This is my first React Native App. its i build by watching a youtube tutorial",
    category: ["app",],
    skills: ["React native",]
  },
  {
    title: "Emash",
    banner: '/Images/projects/emash.webp',
    description: "Tutorial website, this project like a youtube and include a chat and community. its my first react project",
    category: ["website",],
    skills: ["React","Team work", "JavaScript", "Firebase", "Styled components", "Bootstrap"]
  },
];

export default projects;
