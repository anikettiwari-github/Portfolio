import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, I'm Aniket</h2>
        <div className="prompt">
          <p>
            A software developer with a strong passion for learning and building
            user-friendly web applications. I enjoy turning ideas into clean,
            functional, and responsive designs.
          </p>


          <a
            href="https://www.linkedin.com/in/aniket-tiwari-63b93119b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>

          <a href="mailto:anikettiwari7455@gmail.com">
            <EmailIcon />
          </a>

          <a
            href="https://github.com/anikettiwari-github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </a>
        </div>
      </div>

      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              HTML, CSS, ReactJS, Next.js, TailwindCSS, Styled Components,
              Material UI, NPM
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>MongoDB, Express.js, Node.js (MERN stack), MySQL</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
