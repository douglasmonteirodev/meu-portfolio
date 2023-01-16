import React from "react";
import Hero from "./pages/hero/Hero";
import Nav from "./pages/nav/Nav";
import Footer from "./pages/footer/Footer";
import Contact from "./pages/contact/Contact";
import Portfolio from "./pages/portfolio/Portfolio";
import Experience from "./pages/experience/Experience";

export default function App() {
  return (
    <>
      <Hero />
      <Nav />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
