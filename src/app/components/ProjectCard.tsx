import React from "react";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
}

export default function ProjectCard({ imgUrl, title, description }: ProjectCardProps) {
  return (
    <div>
      <div className="h-52 md:h-72" style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
      <div>
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
}
