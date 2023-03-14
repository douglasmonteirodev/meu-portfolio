import React from "react";
import "./hero.css";
import CTA from "./CTA";
import { BsMouse2 } from "react-icons/bs";
import Me from "../../assets/perfil-com-fundo.png";
import HeroSocials from "./HeroSocials";

const Hero = () => {
  return (
    <div className="hero--container">
      <div className="hero--infos">
        <div className="hero--socials">
          <HeroSocials />
        </div>

        <div className="hero--subs">
          <div className="hero--intro">
            <h4>Olá, meu nome é</h4>
            <h1>Douglas Monteiro</h1>
          </div>

          <div className="hero--title">
            <div className="hero--title-wrapper">
              <div className="hero--wrapper-item">Desenvoldedor Web</div>
              <div className="hero--wrapper-item">Desenvoldedor Web</div>
              <div className="hero--wrapper-item">Desenvoldedor Web</div>
              <div className="hero--wrapper-item">Desenvoldedor Web</div>
            </div>
          </div>

          <div className="hero--button">
            <CTA />
          </div>
        </div>

        <div className="hero--scroll">
          <a href="#contact" className="scroll--down">
            Scrool Down <BsMouse2 />
          </a>
        </div>
      </div>

      <div className="hero--container-gif">
        <div className="hero--bg">
          <div className="hero--gif">
            <img src={Me} alt="me" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
