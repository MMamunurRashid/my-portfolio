import React from "react";
import redux from "../../assets/5848309bcef1014c0b5e4a9a.png";
import nextJs from "../../assets/800px-Nextjs-logo.svg.png";
import expressJs from "../../assets/Status_iucn_EX_icon.svg.png";
import materialUi from "../../assets/meterialui.png";
import react from "../../assets/React-icon.svg.png";
import JavaScript from "../../assets/javascript-logo-transparent-logo-javascript-images-3.png";
import nodeJs from "../../assets/nodejs-logo-FBE122E377-seeklogo.com.png";
import mongoDB from "../../assets/MongoDB_Logo.svg";
import Bootstrap from "../../assets/Bootstrap_logo.svg.png";
import Tailwind from "../../assets/Tailwind_CSS_Logo.svg.png";
import TypeScript from "../../assets/typescript-2.svg";
import css from "../../assets/CSS3_logo.svg.png";
import Html from "../../assets/html-1.svg";
import c from "../../assets/C_Logo.png";
import cpp from "../../assets/ISO_C++_Logo.svg.png";
import csharp from "../../assets/csharp.png";
import java from "../../assets/java.png";
import sql from "../../assets/sql.png";
import dsa from "../../assets/dsa.png";
import netlify from "../../assets/netlify-logo-png-transparent.png";
import vercel from "../../assets/vercel-icon-512x449-3422jidz.png";
import gitHub from "../../assets/github-logo.png";
import firebase from "../../assets/firebase.png";

const MySkills = () => {
  return (
    <div className="font-serif my-5 md:mb-20 md:mx-32 mx-5" id="skills">
      <h1 className="text-5xl text-center">My Skills</h1>
      <h1 className="text-xl text-center">
        Here are some Skills and Tools what i know
      </h1>

      <div className=" ">
        <div
          className="grid md:grid-cols-4  grid-cols-3 gap-5 my-5 relative aos-init aos-animate"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <div className="flex justify-between items-center transition-transform duration-500 transform ease-in-out hover:scale-105 shadow-lg px-4 py-2 font-serif text-2xl rounded-xl">
            <img
              src={JavaScript}
              alt=""
              className="md:w-28 md:h-20 w-20 h-20 "
            />
            <h1>JavaScript</h1>
          </div>
          <div className="flex justify-between items-center transition-transform duration-500 transform ease-in-out hover:scale-105 shadow-lg px-4 py-2 font-serif text-2xl rounded-xl">
            <img src={react} alt="" className="md:w-20 md:h-20 w-20 h-20 " />
            <h1>React.Js</h1>
          </div>
          <div className="flex justify-between items-center transition-transform duration-500 transform ease-in-out hover:scale-105 shadow-lg px-4 py-2 font-serif text-2xl rounded-xl">
            <img src={nodeJs} alt="" className="md:w-20 md:h-20 w-20 h-20 " />
            <h1>Node.Js</h1>
          </div>
          <div className="flex justify-between items-center transition-transform duration-500 transform ease-in-out hover:scale-105 shadow-lg px-4 py-2 font-serif text-2xl rounded-xl">
            <img src={mongoDB} alt="" className="md:w-24 md:h-24 w-20 h-20 " />
            <h1>MongoDB</h1>
          </div>
          <div className="flex justify-between items-center transition-transform duration-500 transform ease-in-out hover:scale-105 shadow-lg px-4 py-2 font-serif text-2xl rounded-xl">
            <img
              src={TypeScript}
              alt=""
              className="md:w-24 md:h-24 w-20 h-20 "
            />
            <h1>TypeScript</h1>
          </div>
          <div className="flex justify-between items-center transition-transform duration-500 transform ease-in-out hover:scale-105 shadow-lg px-4 py-2 font-serif text-2xl rounded-xl">
            <img src={redux} alt="" className="md:w-24 md:h-24 w-20 h-20 " />
            <h1>Redux</h1>
          </div>
          <div className="flex justify-between items-center transition-transform duration-500 transform ease-in-out hover:scale-105 shadow-lg px-4 py-2 font-serif text-2xl rounded-xl">
            <img src={nextJs} alt="" className="md:w-24 md:h-24 w-20 h-20 " />
            <h1>Next.Js</h1>
          </div>
          <div className="flex justify-between items-center transition-transform duration-500 transform ease-in-out hover:scale-105 shadow-lg px-4 py-2 font-serif text-2xl rounded-xl">
            <img
              src={expressJs}
              alt=""
              className="md:w-24 md:h-24 w-20 h-20 "
            />
            <h1>Express.Js</h1>
          </div>
          <div className="flex justify-between items-center transition-transform duration-500 transform ease-in-out hover:scale-105 shadow-lg px-4 py-2 font-serif text-2xl rounded-xl">
            <img
              src={Bootstrap}
              alt=""
              className="md:w-20 md:h-20 w-20 h-20 "
            />
            <h1>Bootstrap</h1>
          </div>
          <div className="flex justify-between items-center transition-transform duration-500 transform ease-in-out hover:scale-105 shadow-lg px-4 py-2 font-serif text-2xl rounded-xl">
            <img src={Tailwind} alt="" className="md:w-20 md:h-20 w-20 h-20 " />
            <h1>Tailwind</h1>
          </div>
          <div className="flex justify-between items-center transition-transform duration-500 transform ease-in-out hover:scale-105 shadow-lg px-4 py-2 font-serif text-2xl rounded-xl">
            <img
              src={materialUi}
              alt=""
              className="md:w-20 md:h-20 w-20 h-20 "
            />
            <h1>Material UI</h1>
          </div>
          <div className="flex justify-between items-center transition-transform duration-500 transform ease-in-out hover:scale-105 shadow-lg px-4 py-2 font-serif text-2xl rounded-xl">
            <img src={css} alt="" className="md:w-20 md:h-20 w-20 h-20 " />
            <h1>CSS</h1>
          </div>
          <div className="flex justify-between items-center transition-transform duration-500 transform ease-in-out hover:scale-105 shadow-lg px-4 py-2 font-serif text-2xl rounded-xl">
            <img src={Html} alt="" className="md:w-20 md:h-20 w-20 h-20 " />
            <h1>HTML</h1>
          </div>
          <div className="flex justify-between items-center transition-transform duration-500 transform ease-in-out hover:scale-105 shadow-lg px-4 py-2 font-serif text-2xl rounded-xl">
            <img src={c} alt="" className="md:w-20 md:h-20 w-20 h-20 " />
            <h1>C</h1>
          </div>
          <div className="flex justify-between items-center transition-transform duration-500 transform ease-in-out hover:scale-105 shadow-lg px-4 py-2 font-serif text-2xl rounded-xl">
            <img src={cpp} alt="" className="md:w-20 md:h-20 w-20 h-20 " />
            <h1>C++</h1>
          </div>
          <div className="flex justify-between items-center transition-transform duration-500 transform ease-in-out hover:scale-105 shadow-lg px-4 py-2 font-serif text-2xl rounded-xl">
            <img src={csharp} alt="" className="md:w-20 md:h-20 w-20 h-20 " />
            <h1>C#</h1>
          </div>
          <div className="flex justify-between items-center transition-transform duration-500 transform ease-in-out hover:scale-105 shadow-lg px-4 py-2 font-serif text-2xl rounded-xl">
            <img src={java} alt="" className="md:w-20 md:h-20 w-20 h-20 " />
            <h1>Java</h1>
          </div>
          <div className="flex justify-between items-center transition-transform duration-500 transform ease-in-out hover:scale-105 shadow-lg px-4 py-2 font-serif text-2xl rounded-xl">
            <img src={sql} alt="" className="md:w-20 md:h-20 w-20 h-20 " />
            <h1>SQL</h1>
          </div>
          <div className="flex justify-between items-center transition-transform duration-500 transform ease-in-out hover:scale-105 shadow-lg px-4 py-2 font-serif text-2xl rounded-xl">
            <img src={dsa} alt="" className="md:w-20 md:h-20 w-20 h-20 " />
            <h1>Data Structure Algorithm</h1>
          </div>
          <div className="flex justify-between items-center transition-transform duration-500 transform ease-in-out hover:scale-105 shadow-lg px-4 py-2 font-serif text-2xl rounded-xl">
            <img src={firebase} alt="" className="md:w-20 md:h-20 w-20 h-20 " />
            <h1>Firebase</h1>
          </div>
          <div className="flex justify-between items-center transition-transform duration-500 transform ease-in-out hover:scale-105 shadow-lg px-4 py-2 font-serif text-2xl rounded-xl">
            <img src={netlify} alt="" className="md:w-20 md:h-20 w-20 h-20 " />
            <h1>Netlify</h1>
          </div>
          <div className="flex justify-between items-center transition-transform duration-500 transform ease-in-out hover:scale-105 shadow-lg px-4 py-2 font-serif text-2xl rounded-xl">
            <img src={vercel} alt="" className="md:w-20 md:h-20 w-20 h-20 " />
            <h1>Vercel</h1>
          </div>
          <div className="flex justify-between items-center transition-transform duration-500 transform ease-in-out hover:scale-105 shadow-lg px-4 py-2 font-serif text-2xl rounded-xl">
            <img src={gitHub} alt="" className="md:w-20 md:h-20 w-20 h-20 " />
            <h1>GitHub</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
