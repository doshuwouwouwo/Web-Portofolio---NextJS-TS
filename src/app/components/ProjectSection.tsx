import React from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  const projects = [
    {
      id: 1,
      imgUrl: "/images/project1.png",
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quis!",
    },
    {
      id: 2,
      imgUrl: "/images/project2.png",
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quis!",
    },
    {
      id: 3,
      imgUrl: "/images/project3.png",
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quis!",
    },
    {
      id: 4,
      imgUrl: "/images/project4.png",
      title: "Project 4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quis!",
    },
    {
      id: 5,
      imgUrl: "/images/project5.png",
      title: "Project 5",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quis!",
    },
  ];
  return (
    <div>
      <h2>My Project</h2>
      <div>
        {projects.map((project) => (
          <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.imgUrl} />
        ))}
      </div>
    </div>
  );
}
