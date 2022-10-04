import React from "react";
import "./portfolio.css";
import data from "./Data";

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>Meus projetos</h2>

      <div className='container portfolio--container'>
        {data.map(({ image, title, github }, index) => {
          return (
            <article key={index} className='portfolio--item'>
              <div className='portfolio--item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio--item-cta'>
                <a href={github} className='btn' rel='noreferrer' target='_blank'>
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
