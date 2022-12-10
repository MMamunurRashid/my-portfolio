import React from "react";
import Typical from "react-typical";
import bg from "../../assets/photo-1480506132288-68f7705954bd.jpg";
import img from "../../assets/WhatsApp_Image_2022-04-20_at_11.52.28_PM-removebg-preview (2).png";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const HomeBanner = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="mt-5">
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center text-white lg:text-left ">
            <h1 className="text-5xl font-bold font-serif">
              Hi, <br /> This is <span>Md Mamunur Rashid</span>
            </h1>
            <h2 className="text-5xl font-bold font-serif text-[#ecdd9a]">
              <Typical
                steps={[
                  "Junior Web Developer.",
                  1500,
                  "Front-End Web Developer.",
                  1500,
                  "MERN Stack Developer.",
                  1500,
                ]}
                loop={Infinity}
                wrapper="p"
              />
            </h2>
            <p className="py-6 text-xl">
              Highly motivated with a Basic understanding of web development,
              also doing Bachelor of Science in Computer Science and
              Engineering. Who is ready to take challenges. I believe that
              working smart is more important than working hard for gaining
              success, and consistency is the key to success.
            </p>
            <div>
              <h1 className="text-3xl text-center font-serif my-5">Find Me</h1>

              <div className="text-center">
                <button className="btn bg-white hover:btn-warning w-20 h-16 ml-3">
                  <BsGithub className="text-black w-7 h-7" />
                </button>
                <button className="btn bg-white hover:btn-warning w-20 h-16 ml-3">
                  <BsLinkedin className="text-black w-7 h-7" />
                </button>
                <button className="btn bg-white hover:btn-warning w-20 h-16 ml-3 ">
                  <MdEmail className="text-black w-7 h-7" />
                </button>
              </div>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm ml-14 bg-base-200 shadow-2xl ">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;