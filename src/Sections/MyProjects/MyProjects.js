import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
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
            <figure className="transition-transform duration-500 transform ease-in-out hover:scale-110 hover:opacity-40">
              <img className="h-[200px]" src={project.img} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.name}</h2>
              <p className="text-xl">Technology: {project.technology}</p>
              <div className="flex justify-between">
                <div className="">
                  <a
                    className="btn btn-outline btn-xs px-1 transition-transform duration-500 transform ease-in-out hover:scale-110"
                    href={project.liveLink}
                  >
                    <BiLinkExternal className="mr-1 w-5 h-5 " /> Live Link
                  </a>
                </div>
                <div>
                  <a
                    className=" btn btn-outline btn-xs px-1 transition-transform duration-500 transform ease-in-out hover:scale-110 "
                    href={project.client}
                  >
                    <BsGithub className="mr-1 w-5 h-5 " />
                    Client
                  </a>
                </div>
                {project.server ? (
                  <div>
                    <a
                      className=" btn btn-outline btn-xs px-1 transition-transform duration-500 transform ease-in-out hover:scale-110"
                      href={project.server}
                    >
                      <BsGithub className="mr-1 w-5 h-5 " /> Server
                    </a>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
