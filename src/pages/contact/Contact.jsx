import React from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xy1bk4c",
        "template_dp0te55",
        form.current,
        "SKVWBq3oTq_Hegd-v"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h2>Contate-me</h2>
      <div className="container contact--container">
        <div className="contact--options">
          <article className="contact--option">
            <AiOutlineMail className="contact--option-icon" />
            <h4>Email</h4>
            <h5>douglasmonteiro071@gmail.com</h5>
            <a
              href="mailto:douglasmonteiro071@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              Enviar mensagem
            </a>
          </article>
          <article className="contact--option">
            <RiMessengerLine className="contact--option-icon" />
            <h4>Messenger</h4>
            <h5>Douglas Monteiro</h5>
            <a
              href="https://m.me/douglas.monteiro.5220/"
              rel="noreferrer"
              target="_blank"
            >
              Enviar mensagem
            </a>
          </article>
          <article className="contact--option">
            <BsWhatsapp className="contact--option-icon" />
            <h4>WhatsApp</h4>
            <h5>+5593992206317</h5>
            <a
              href="https://wa.me/5593992206317"
              rel="noreferrer"
              target="_blank"
            >
              Enviar mensagem
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Seu nome completo"
            required
          />
          <input type="email" name="email" placeholder="Seu email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Escreva sua mensagem"
            required
          ></textarea>
          <input
            type="submit"
            className="btn btn-primary"
            value="Enviar mensagem"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
