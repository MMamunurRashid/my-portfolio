import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import img from "../assets/favicon (2) (1).ico";

const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content md:px-32 px-5">
      <div className="items-center grid-flow-col">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} alt="" />
          </div>
        </div>
        <p>Copyright © 2022 - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://github.com/MMamunurRashid">
          <BsGithub className="text-white w-7 h-7" />
        </a>
        <a href="https://www.linkedin.com/in/md-mamunur-rashid-web/">
          <BsLinkedin className="text-white w-7 h-7" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
