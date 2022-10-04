import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id='about'>
      <h2>About me</h2>

      <div className='container about--container'>
        <div className='about--content'>
          <p>
            Meu nome é Douglas Monteiro, tenho 24 anos e sou de Altamira-PA, desde criança
            sempre fui amante de tecnologias, internet e jogos, mas devido a minha
            localização e falta de informações, não pude me dedicar nessa área antes, mas
            com os acontecimentos atuais dos últimos anos, consegui me comprometer e
            buscar conhecimento. Imediatamente me identifiquei com o desenvolvimento
            front-end, e é aí que tenho o maior foco de aprendizado, atualmente possuo
            foco em React JS, mas não me limitei apenas a isso, também tenho algum
            conhecimento em node e mongo db. Em questão profissionais ainda não tenho
            experiência, estou em busca da minha primeira oportunidade, mas continuo com o
            processo de aprendizado desenvolvendo projetos pessoais com o objetivo de
            mostrar um pouco do meu potencial e ganhar experiência.
          </p>
          <div className='about--btn-message'>
            <a href='#contact' className='btn btn-primary'>
              Enviar mensagem
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
