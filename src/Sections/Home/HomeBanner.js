import React from "react";
import bg from "../../assets/photo-1480506132288-68f7705954bd.jpg";
import img1 from "../../assets/mamun.png";
import "./HomeBanner.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import expressJs from "../../assets/Status_iucn_EX_icon.svg.png";
import react from "../../assets/React-icon.svg.png";
import JavaScript from "../../assets/javascript-logo-transparent-logo-javascript-images-3.png";
import nodeJs from "../../assets/nodejs-logo-FBE122E377-seeklogo.com.png";
import mongoDB from "../../assets/mongodb.png";
import Bootstrap from "../../assets/Bootstrap_logo.svg.png";
import Tailwind from "../../assets/Tailwind_CSS_Logo.svg.png";
import gitHub from "../../assets/github-logo.png";

const HomeBanner = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="pt-5 ">
      <div className="hero min-h-screen mt-20 md:mb-20 md:mt-0">
        <div className="hero-content flex-col lg:flex-row ">
          <div className="md:text-center text-justify text-white lg:text-left  md:w-1/2">
            <h1 className="md:text-5xl text-2xl font-bold font-serif">
              Hi, <br />{" "}
              <span className="md:text-3xl">This is Md Mamunur Rashid</span>
            </h1>
            <h2 className="md:text-5xl text-2xl font-bold font-serif text-[#ecdd9a]">
              <TypeAnimation
                sequence={[
                  "Junior Web Developer",
                  1000,
                  "Front-End Developer",
                  1000,
                  "MERN Stack Developer",
                  1000,
                ]}
                speed={40}
                wrapper="h2"
                repeat={Infinity}
              />
            </h2>
            <p className="py-6 text-xl font-mono">
              Highly motivated with a Basic understanding of web development,
              also doing Bachelor of Science in Computer Science and
              Engineering. Who is ready to take challenges. I believe that
              working smart is more important than working hard for gaining
              success, and consistency is the key to success.
            </p>
            <div>
              <h1 className="text-3xl text-center font-serif my-5">Find Me</h1>

              <div className="text-center">
                <a
                  href="https://github.com/MMamunurRashid"
                  className="btn bg-white hover:btn-warning w-20 h-16 ml-3"
                >
                  <BsGithub className="text-black w-7 h-7" />
                </a>
                <a
                  href="https://www.linkedin.com/in/md-mamunur-rashid-web/"
                  className="btn bg-white hover:btn-warning w-20 h-16 ml-3"
                >
                  <BsLinkedin className="text-black w-7 h-7" />
                </a>
                <a
                  href="mailto:mdmamun.iubat.m@gmail.com"
                  className="btn bg-white hover:btn-warning w-20 h-16 ml-3 "
                >
                  <MdEmail className="text-black w-7 h-7" />
                </a>
              </div>
            </div>
          </div>
          <section class="main-container md:w-1/2">
            <div class="main">
              <div class="big-circle">
                <div class="icon-block">
                  <img src={Bootstrap} alt="web design icon" />
                </div>
                <div class="icon-block">
                  <img src={expressJs} alt="game design icon" />
                </div>
                <div class="icon-block">
                  <img src={react} alt="game dev icon" />
                </div>
                <div class="icon-block">
                  <img src={nodeJs} alt="ui-ux icon" />
                </div>
              </div>
              <div class="circle">
                <div class="icon-block">
                  <img src={mongoDB} alt="app icon" />
                </div>
                <div class="icon-block">
                  <img src={JavaScript} alt="blockchain icon" />
                </div>
                <div class="icon-block">
                  <img src={Tailwind} alt="ar-vr icon" />
                </div>
                <div class="icon-block">
                  <img src={gitHub} alt="artificial intelligence icon" />
                </div>
              </div>
              <div class="center-logo ">
                <img src={img1} alt="logo" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
