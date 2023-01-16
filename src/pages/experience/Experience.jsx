import React from "react";
import "./experience.css";
import { RiShieldCheckFill } from "react-icons/ri";

const Experience = () => {
  return (
    <section id="experience">
      <h2>Minhas habilidades</h2>
      <div className="container experience--container">
        <div className="experience--frontend">
          <h3>Frontend</h3>
          <div className="experience--content">
            <article className="experience--details">
              <RiShieldCheckFill className="experience--details-icons" />
              <div>
                <h4>HTML</h4>
              </div>
            </article>

            <article className="experience--details">
              <RiShieldCheckFill className="experience--details-icons" />
              <div>
                <h4>CSS</h4>
              </div>
            </article>

            <article className="experience--details">
              <RiShieldCheckFill className="experience--details-icons" />
              <div>
                <h4>Javascript</h4>
              </div>
            </article>

            <article className="experience--details">
              <RiShieldCheckFill className="experience--details-icons" />
              <div>
                <h4>Typescript</h4>
              </div>
            </article>

            <article className="experience--details">
              <RiShieldCheckFill className="experience--details-icons" />
              <div>
                <h4>React JS</h4>
              </div>
            </article>

            <article className="experience--details">
              <RiShieldCheckFill className="experience--details-icons" />
              <div>
                <h4>Next JS</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="experience--backend">
          <h3>Backend / Mobile</h3>
          <div className="experience--content">
            <article className="experience--details">
              <RiShieldCheckFill className="experience--details-icons" />
              <div>
                <h4>Node JS</h4>
              </div>
            </article>
            <article className="experience--details">
              <RiShieldCheckFill className="experience--details-icons" />
              <div>
                <h4>React Native</h4>
              </div>
            </article>
            <article className="experience--details">
              <RiShieldCheckFill className="experience--details-icons" />
              <div>
                <h4>Firebase</h4>
              </div>
            </article>
            <article className="experience--details">
              <RiShieldCheckFill className="experience--details-icons" />
              <div>
                <h4>PostgresSQL</h4>
              </div>
            </article>

            <article className="experience--details">
              <RiShieldCheckFill className="experience--details-icons" />
              <div>
                <h4>MongoDb</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
