import React from "react";

import "aos/dist/aos.css";

const MyProjects = () => {
  const projects = [
    {
      img: "https://i.ibb.co/7jCryNg/Doctors-portal.jpg",
      name: "Doctors Portal",
      technology: "React, Nodejs, Express, MongoDB, Firebase, JWT etc.",
      liveLink: "https://doctors-portal-254e6.web.app/",
    },
    {
      img: "https://i.ibb.co/SVxDYZq/Recycle-Clothes.jpg",
      name: "Recycle Clothes",
      technology: "React, Nodejs, Express, MongoDB, Firebase, JWT etc.",
      liveLink: "https://recycle-clothe.web.app/",
    },
    {
      img: "https://i.ibb.co/Jj7MJrS/Smile-Photography.jpg",
      name: "Smile Photography",
      technology: "React, Nodejs, Express, MongoDB, Firebase, JWT etc.",
      liveLink: "https://smile-photography-df416.web.app/",
    },
  ];
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
              <div className="card-actions justify-center">
                <a href={project.liveLink} className="btn btn-primary">
                  Live Link
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
