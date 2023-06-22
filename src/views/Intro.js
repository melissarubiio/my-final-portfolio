import React from 'react';
import 'animate.css';

function Intro() {
    return (
      <section className='back-style'>
        <div>
          <div className="intro-container">
            <img
              src="./images/floating.png"
              alt="melissa"
              className="melissa.style"
              style={{
                width: "800px",
                height: "580px",
                position: "absolute",
                top: "0",
              }}
            />
          </div>
        </div>
        <section>
          <div className="text-container">
            <h1 className="name-style">MELISSA RUBIO </h1>
            <p className="des-style">Aspiring Web Developer</p>
            <a
              href="https://www.linkedin.com/in/melissa-rubio-4341981b1/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./images/linkedin.png" alt="Clickable" id="style-logo" />
            </a>
            <a
              href="mailto:melirubio0603@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./images/gmail.png" alt="Clickable" id="style-logo" />
            </a>
            <a
              href="https://github.com/melissarubiio"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./images/github-pt2.png" alt="Clickable" id="style-logo" />
            </a>
            <p></p>
          </div>
        </section>
      </section>
    );
  }

export default Intro;