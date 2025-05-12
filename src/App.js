import React from "react";
import "./App.css";
import { FaGears } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { GrCertificate } from "react-icons/gr";
import { FaSquareGithub } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa6";
import { FcPhone } from "react-icons/fc";
import { ImLinkedin } from "react-icons/im";
import { RiLinkUnlinkM } from "react-icons/ri";
import DownloadButton from './DownloadButton';
import SendButton from "./SendButton";
import profile from "./images/sumen.png"

function App() {
  return (
    <div>
      <Header />
      <About />
      <Experience />
      <Projects />
      <Certifications />

      <Contact />
    </div>
  );
}
//----------------------- Header----------------------//
const Header = () => (
  <div id="header">
    <div className="container">
      <nav>
        <ul>
          <li>
            <a href="#header">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#Certifications">Certifications</a>
          </li>
          
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="image">
      </div>
      <div className="header-text ">
        <h1 className="blur">
          Hi, I'm <span>Sumesh Aravind K</span>
        </h1>
        <p className="slide-in">
          <span
            className="react"
            style={{ color: "#62DEFC", fontWeight: "900" }}
          >
            React Js
          </span>{" "}
          Developer
        </p>
      </div>
    </div>
  </div>
);
//----------------------- Header----------------------//
//----------------------- About----------------------//
const About = () => {
  const openTab = (tabname) => {
    const tablinks = document.getElementsByClassName("tab-links");
    const tabcontents = document.getElementsByClassName("tab-contents");

    for (let tablink of tablinks) {
      tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
      tabcontent.classList.remove("active-tab");
    }

    document.getElementById(tabname).classList.add("active-tab");
    document.getElementById(`${tabname}-link`).classList.add("active-link");
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img
              src={profile}
              alt="About GIF"
            />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p>
              Hi, I'm Sumesh Aravind, a passionate and dedicated Frontend Developer with a strong focus on creating clean, responsive, and user-friendly web applications. I specialize in React.js, JavaScript, HTML, and CSS, and have hands-on experience in developing interactive interfaces that enhance the user experience.
            </p>
            <div className="tab-titles">
              <p
                id="skills-link"
                className="tab-links active-link"
                onClick={() => openTab("skills")}
              >
                Skills
              </p>
              <p
                id="education-link"
                className="tab-links"
                onClick={() => openTab("education")}
              >
                Education
              </p>
              <p
                id="languages-link"
                className="tab-links"
                onClick={() => openTab("languages")}
              >
                Languages known
              </p>
            </div>
            <div className="tab-contents active-tab" id="skills">
              <ul>
                <li>
                  <span>React Js</span>
                  <br />
                  Intermediate level
                </li>
                <li>
                  <span>HTML 5/CSS 3</span>
                  <br />
                  Intermediate level
                </li>
                <li>
                  <span>JavaScript</span>
                  <br />
                  Intermediate level
                </li>
                <li>
                  <span>Bootstrap</span>
                  <br />
                  Intermediate level
                </li>
                <li>
                  <span>MUI</span>
                  <br />
                  Intermediate level
                </li>
                <li>
                  <span>React Boostrap</span>
                  <br />
                  Intermediate level
                </li>
                <li>
                  <span>Power BI</span>
                  <br />
                  Intermediate level
                </li>
                </ul>
            </div>
            <div className="tab-contents" id="languages">
              <ul>
                <li>
                  <span>Tamil</span>
                  <br />
                  Speak, Read, Write
                </li>
                <li>
                  <span>English</span>
                  <br />
                  Speak, Read, Write
                </li>
              </ul>
            </div>
            <div className="tab-contents" id="education">
              <ul>
                <li>
                  <span>2018 - 2022</span>
                  <br />
                  Dhanalaksmi Srinivasan College of Engineering and Technology, Perambalur.
                  <br />
                  8.23 CGPA
                </li>
                <li>
                  <span>2017-2018 XII th</span>
                  <br />
                  N.C Hr Secondary School, Tenkasi
                  <br />
                  75.1%
                </li>
                <li>
                  <span>2015-2016  10th</span>
                  <br />
                  N.C Hr Secondary School, Tenkasi
                  <br />
                  90%
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
//----------------------- About----------------------//
//----------------------- CurriculumActivities----------------------/
const Experience = () => (
  <div id="experience">
    <div className="container">
      <h1 className="sub-title">Experience</h1>
      <div className="activities-list">
        <div>
          <FaGears style={{ fontSize: "2em", color:"orange"}} />
          <h2>SAVIC TECHNOLOGIES- (Oct 2023 - Present)</h2>
          <p>
          Developed and maintained interactive web applications using React.js, JavaScript, HTML, and CSS. 
Implemented responsive UI components and optimized web performance for smooth user 
experience. 
 Worked on content management systems (CMS) to enhance digital content delivery.  Collaborated with designers and backend teams to develop scalable and efficient web solutions.
            <br />
            <a href="#">Learn more</a>
          </p>
        </div>
        <div>
          <FaGears style={{ fontSize: "2em" ,color:"orange"}} />
          <h2>HURIX SYSTEMS - (April 2023 - Oct 2023)</h2>
          <p>
          Developing and maintaining React.js-based web applications integrated with Node.js and SQL. 
Working on SAP Analytical Cloud and Power BI dashboards for data visualization. 
Ensuring seamless API integration for real-time data updates and performance optimization. 
Leading UI development to enhance user experience and improve web accessibility. 

            <br />
            <a href="#">Learn more</a>
          </p>
        </div>
      </div>
    </div>
  </div>
);
//----------------------- s----------------------//
//----------------------- Projects----------------------//
const Projects = () => (
  <div id="projects">
    <div className="container">
      <h1 className="sub-title">Projects</h1>
      <div className="activities-list">
        <div>
          <GrProjects style={{ fontSize: "1.2em",color:"orange" }} />
          <h2>🍽️ Sharon Restaurant Web App</h2>
          <p>
           Developed a fully responsive restaurant web application named Sharon Restaurant that allows users to explore menus, manage cart items, and place food orders seamlessly. Integrated a dynamic login system and built a visually appealing UI with modern design principles to enhance user experience.
            <br />
            <a href="https://66793c58769ada5ef058e068--effervescent-paletas-b433c2.netlify.app/">View  Project</a>
          </p>
        </div>
        <div>
          <GrProjects style={{ fontSize: "1.2em",color:"orange" }} />
          <h2>💬 SAVI AI Chat Interface</h2>
          <p>
            Developed an interactive and responsive chat interface for SAVI AI, an intelligent enterprise co-pilot designed to enhance decision-making and operational efficiency. The chat interface facilitates seamless user interaction with AI agents, providing real-time insights and support within SAP-driven environments
            <br />
            <a href="https://saviai.savictech.com/chat">View Project</a>
          </p>
        </div>
         <div>
          <GrProjects style={{ fontSize: "1.2em",color:"orange" }} />
          <h2>Customer Portal (Admin & Client)</h2>
          <p>
            Developed a Customer Portal using React.js, Node.js, MongoDB, and MUI for managing customer interactions efficiently. The portal includes Admin and Client interfaces with seamless navigation and enhanced user experience.
            <br />
            <a href="https://mango-ground-07662d80f.4.azurestaticapps.net">View Project</a>
          </p>
        </div>
         
      </div>
    </div>
  </div>
  
);
//----------------------- Projects----------------------//
//----------------------- Certifications----------------------//

const Certifications = () => {
  const openPDF = (pdfPath) => {
    window.open(process.env.PUBLIC_URL + pdfPath, "_blank");
  };

  return (
    <div id="Certifications">
      <div className="container">
        <h1 className="sub-title">Certifications</h1>
        <div className="activities-list">
          <div>
            <GrCertificate style={{ fontSize: "1.2em", color: "orange" }} />
            <h2>Azure AI Engineer Associate</h2>
            <p>
              Completed a course of Microsoft Azure AI Engineer.
              <br />
              <button
                onClick={() => openPDF("/AI-102_2026.pdf")}
                style={{
                  background: "none",
                  border: "none",
                  color: "blue",
                  textDecoration: "underline",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                View Certificate
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

//----------------------- IndustrialExposure----------------------//
//----------------------- Contact----------------------//


const Contact = () => (
  <div id="contact">
    <div className="container">
      <div className="row">
        <div className="contact-left">
          <h1 className="sub-title">Contact Me</h1>
          <p>
            <FaPaperPlane  style={{ fontSize: "1.2em",color:"orange", marginRight:"10px"}}/>
            sumesharavind940@gmail.com
          </p>
          <p>
            <FcPhone style={{ fontSize: "1.2em", marginRight:"10px"}}/>
            6380841445
          </p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/sumesh-aravind-k-5b1a71269/">
              <ImLinkedin style={{ fontSize: "1.2em",color:"blue"}} />
            </a>
            <a href="https://github.com/sumesharavind">
              <FaSquareGithub style={{ fontSize: "1.3em",color:"white"}} />
            </a>
            
          </div>
          
            <DownloadButton/>
          
        </div>
        <div className="contact-right">
          <form>
            <input type="text" name="name" placeholder="Your name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
            ></textarea>
           <SendButton/>
          </form>
        </div>
      </div>
    </div>
  </div>
);
//----------------------- Contact----------------------//

export default App;
