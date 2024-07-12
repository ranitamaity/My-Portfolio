import React from 'react';
import './intro.css';
import bg from '../../Assets1/image.png';
import btnImg from '../../Assets1/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
           <span className="hello">Hello,</span>
           <span className="introText">I'm <span className="introName">Ranita</span> <br /> Website Designer </span>
           <p className="introPara">I am a skilled web designer with experience in creating <br/> visually apealing and user friendly websites.</p>
           <Link><button className="btn"><img src={btnImg} alt="Hire" className="btnImg"/>Hire Me</button></Link>
        </div>
        <img src={bg} alt="Profile" className="bg"/>
    </section>
  );
}

export default Intro;