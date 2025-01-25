import React from "react";
import "./About.css"; // Ensure you have About.css in the same folder

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQEJX-OeezU7yQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715312491460?e=1743033600&v=beta&t=V86fXHPdPG8BZDoyIn8IWRL9m29fEsAmFZHkDUzZeSw"
          alt="Preeti Jha"
          className="about-photo"
        />
        <div className="about-info">
          <h1>About Me</h1>
          <p>
            Hi, I'm <strong>Preeti Jha</strong>. I have completed my Bachelor's in
            Electronics and Communication Engineering from Nepal Engineering
            College. I am a passionate <strong>Full Stack Web Developer</strong> with
            expertise in HTML, CSS, JavaScript, React, and C Programming.
          </p>
          <p>
            I enjoy creating web applications and have good communication skills to
            collaborate effectively in teams.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
