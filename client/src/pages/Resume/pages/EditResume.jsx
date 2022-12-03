import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import Layout3 from "../components/Layout/Layout3";
import About from "../components/Sections/About";
import Herosection from "../components/Sections/Herosection";
import SectionHeading from "../components/Items/SectionHeading";
import Skills from "../components/Sections/Skills";
import Funfacts from "../components/Sections/Funfacts";
import Services from "../components/Sections/Services";
import Experiences from "../components/Sections/Experiences";
import Portfolios from "../components/Sections/Portfolios";
import Contact from "../components/Sections/Contact";

function EditResume() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [editTitle, setEditTitle] = useState(false);
  const [editURL, setEditURL] = useState(false);

  const toggleEditTitle = () => {
    setEditTitle(!editTitle);
  }

  const toggleEditURL = () => {
    setEditURL(!editURL);
  }

  return (
    <Layout3>
      <Element name="section-home">
        <Herosection />
      </Element>

      <Element name="section-about">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="About Me" />
          <About />
        </section>
      </Element>

      <Element name="section-experiences">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Experience" />
          <Experiences />
        </section>
      </Element>

      <Element name="section-experiences">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Experience" />
          <Experiences />
        </section>
      </Element>

      <Element name="section-skills">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="My skills" />
          <Skills />
        </section>
      </Element>

      <Element name="section-funfacts">
        <Funfacts />
      </Element>

      <Element name="section-services">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Services" />
          <Services />
        </section>
      </Element>


      <Element name="section-portfolios">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Portfolio" />
          <Portfolios />
        </section>
      </Element>

      <Element name="section-contact">
        <section className="shadow-blue white-bg padding">
          <SectionHeading title="Get in touch" />
          <Contact />
        </section>
      </Element>
    </Layout3>
  );
}

export default EditResume;
