import React from "react";
import img from "../../assets/WhatsApp_Image_2022-04-20_at_11.52.28_PM-removebg-preview (2).png";
import bg from "../../assets/frontend_webdeveloper.jpg";
import { FcPhone, FcHome } from "react-icons/fc";
import { FaUserGraduate, FaGraduationCap } from "react-icons/fa";
import { BsBookHalf } from "react-icons/bs";
import { RiMailAddFill } from "react-icons/ri";
import resume from "../../assets/Resume of Md Mamunur Rashid.pdf";

const AboutMe = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="font-serif text-white mt-5  md:px-32 px-5 "
      id="aboutMe"
    >
      <div
        className="hero min-h-screen "
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        <div className="hero-content flex-col lg:flex-row justify-between">
          <div className="text-center lg:text-left relative aos-init aos-animate">
            <h1 className="text-5xl text-center">About Me</h1>
            <h1 className="text-xl text-center">
              Here are some Skills and Tools what i know
            </h1>
            <h1 className="text-4xl md:mt-12">Front-End Developer</h1>
            <p className="text-xl font-mono md:mt-3">
              I am a self-motivated mainly Front-End Web Developer with
              knowledge in React.js, Node.js, Express.js, Google Authentication,
              MongoDB, JavaScript, HTML, CSS, Bootstrap, Tailwind and mobile
              responsive web development. Also i have some knowledge about C,
              C++, C# with .NET core, Data Structure and Algorithm.
            </p>
            <div className="md:mt-3">
              <p className="flex items-center mt-2">
                <FaUserGraduate className="w-7 h-7" />
                <span className="text-xl ml-3">
                  International University of Business Agriculture and
                  Technology
                </span>
              </p>
              <p className="flex items-center mt-2">
                <BsBookHalf className="w-7 h-7" />
                <span className="text-xl ml-3">
                  Bachelor of Science in Computer Science and Engineering
                </span>
              </p>
              <p className="flex items-center mt-2">
                <FaGraduationCap className="w-7 h-7" />
                <span className="text-xl ml-3">
                  Expected Graduation in January, 2024
                </span>
              </p>
              <p className="flex items-center mt-2">
                <FcPhone className="w-7 h-7" />
                <span className="text-xl ml-3"> +8801703898622</span>
              </p>
              <p className="flex items-center mt-2">
                <RiMailAddFill className="w-7 h-7" />
                <span className="text-xl ml-3">mdmaun.iubat.m@gmail.com</span>
              </p>
              <p className="flex items-center mt-2">
                <FcHome className="w-7 h-7" />
                <span className="text-xl ml-3">
                  Uttara-10, Dhaka, Bangladesh
                </span>
              </p>

              <a
                href={resume}
                target="_black"
                className="btn btn-outline btn-accent hover:btn-primary mt-5"
              >
                Download My Resume
              </a>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm md:ml-14 bg-base-200 shadow-2xl relative aos-init aos-animate">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
