import React, { useEffect, useState } from "react";

import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const MyProjects = () => {
  const [projects, setProjects] = useState([]);
  // console.log(projects);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="font-serif my-5 md:mb-20 md:mx-32" id="project">
      <h1 className="text-5xl text-center">My Projects</h1>
      <h1 className="text-xl text-center">
        Here are some projects, <br /> If you want see more please visit my
        GitHub
      </h1>

      <div className="grid md:grid-cols-3 mx-3 md:mx-0  gap-5 my-5 ">
        {projects.map((project) => (
          <div
            className="card md:w-96 bg-base-100 shadow-xl  relative aos-init aos-animate"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
          >
            <figure className="transition-transform duration-500 transform ease-in-out hover:scale-110">
              <img src={project.img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.name}</h2>
              <p className="text-xl">{project.technology}</p>
              <div className="flex justify-between">
                <div className="">
                  <a href={project.liveLink} className="btn btn-primary">
                    Live Link
                  </a>
                </div>
                <div className="">
                  <Link
                    to={`/project/${project.id}`}
                    className="btn btn-primary"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
