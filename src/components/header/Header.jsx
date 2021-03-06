import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import { gsap } from "gsap";

const { useEffect, useRef } = React;
function Header() {
  const tl = useRef();
  useEffect(() => {
    tl.current = gsap
      .timeline()
      .to(".header__container", { opacity: 1, y: "0px", duration: 1.5 });
  });
  return (
    <header>
      <div className="container header__container">
        <h5>Cześć jestem</h5>
        <h1>Marcin</h1>
        <h5 className="text-light">Junior Frontend Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="MeImage" />
        </div>
        <a href="#contact" className="scroll__down">
          Przewiń
        </a>
      </div>
    </header>
  );
}

export default Header;
