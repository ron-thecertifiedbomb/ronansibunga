import React, { useState, useRef } from "react";
import "../Project/Project.css";
import { ProjectList } from "../../Data/ProjectList/ProjectList.js";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";

const Project = () => {
  const [project, setProject] = useState(ProjectList);
  const [completed, setCompleted] = useState(false);
  const [ongoing, setOnGoing] = useState(false);

  const toggleCompleted = () => {
    setCompleted(true);
    setOnGoing(false);
  };

  const toggleOnGoing = () => {
    setOnGoing(true);
    setCompleted(false);
  };

  const filterType = (status) => {
    setProject(
      ProjectList.filter((item) => {
        return item.status === status;
      })
    );
  };

  const toggleAll = () => {
    setProject(ProjectList);
    setOnGoing(false);
    setCompleted(false);
  };

  return (
    <div className="section-project-cards" id="portfolio">
      <div className="project-heading">
        <h1> My Projects</h1>
      </div>

      <div className="project-filter-buttons">
        <div className="column-box">  
        <h1
          className={project === ProjectList ? "filter-buttons-active" : "filter-buttons"}
          onClick={toggleAll}>All </h1>
          </div>

          <div className="column-box-middle">  
        <h1
          className={completed ? "filter-buttons-active" : "filter-buttons"}
          onClick={() => {
            filterType("completed");
            toggleCompleted();
          }}
        >
          Completed
        </h1>
        </div>

        <div className="column-box">  
        <h1
          className={ongoing ? "filter-buttons-active" : "filter-buttons"}
          onClick={() => {
            filterType("on-going");
            toggleOnGoing();
          }}
        >
          On-going
        </h1>
        </div>

      </div>

      <div className="projectList">
        {project.map((item, index) => {
          return (
            <ProjectCard key={index} name={item.name} image={item.image} />
          );
        })}
      </div>
    </div>
  );
};

export default Project;
