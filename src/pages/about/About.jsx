import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h2>Sobre mim</h2>

      <div className="container about--container">
        <div className="about--content">
          <p>
            Olá, meu nome é Douglas Monteiro tenho 25 anos e moro no Pará.{" "}
            <br />
            - Possuo carreira em desenvolvimento na área de TI, com capacidade
            de atuação no levantamento de requisitos técnicos e funcionais para
            desenvolvimento de aplicações, páginas web e aplicativos mobile,
            apresentando soluções focadas na experiência do cliente, utilizando
            metodologias ágeis e das melhores práticas da área. <br />
            - Construção de relacionamento com equipes técnicas, fornecedores de
            tecnologia, clientes, usuários e demais envolvidos, com alinhamento
            estratégico para cumprimento dos cronogramas de projeto. <br />- Me
            considero ágil e consistente em aprender uma nova tecnologia e me
            adaptar rapidamente a qualquer tipo de mudança, me vejo pronto para
            encarar novos desafios!
          </p>

          <div className="about--btn-message">
            <a href="#contact" className="btn btn-primary">
              Enviar mensagem
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
