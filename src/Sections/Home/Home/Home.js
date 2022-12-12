import React from "react";
import AboutMe from "../../AboutMe/AboutMe";
import ContactMe from "../../ContactMe/ContactMe";
import MyProjects from "../../MyProjects/MyProjects";
import MySkills from "../../MySkills/MySkills";
import HomeBanner from "../HomeBanner";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <MyProjects></MyProjects>
      <MySkills></MySkills>
      <AboutMe></AboutMe>
      <ContactMe></ContactMe>
    </div>
  );
};

export default Home;
