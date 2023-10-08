"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Eccomerse Website",
    description:
      "Explore products with the Products button, add items to your cart with Add to Cart, and easily track your cart's total price. To view your cart items, simply click the cart icon.",
    image: "/images/projects/img1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Raiden126/ecommerseWeb",
  },
  {
    id: 2,
    title: "Maze Game",
    description:
      "This is a maze game. To win, the user needs to guide the ball to the square box using 'w', 'd', 's', and 'a' keys.",
    image: "/images/projects/img4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Raiden126/mazeGame",
  },
  {
    id: 3,
    title: "Image Search",
    description:
      "It's an image search site. Search and view a wide range of images effortlessly.",
    image: "/images/projects/img5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Raiden126/imageSearch",
  },
  {
    id: 4,
    title: "Movie Battle",
    description:
      "Compare your favorite movies to determine which one boasts a superior box office collection and rating, among other details.",
    image: "/images/projects/img7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Raiden126/movieBattle",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVarients = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Responsive"
          isSelected={tag === "Responsive"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVarients}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration:0.3, delay: index* 0.4}}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
