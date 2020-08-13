import React from 'react';

const About = (props) => {
  return (
    <div>
      <div className="item" style={{textAlign:'center', backgroundColor:'#deaa86', padding:'60px' }} >
        <h1 className="" >About me</h1>
        <p className="lead">Hello! My name is Mbugua George, and i am a freelancer based in Nairobi Kenya. Currently,</p>
        <p className='lead' > i'm pursuing a bachelors degree in Information Technology at Maseno University.</p>
        <p className='lead' >I'm very passionate about how web applications work, and so i ventured on this path of web development.</p>
      </div>
      <div className="about">
        <h3>Skills</h3>
        <div className="about-left">
          <h2>Frontend Development</h2>
          <ul>
            <li>ReactJs</li>
            <li>Html</li>
            <li>Css</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="about-center">
          <h2>Backend Development</h2>
          <ul>
            <li>Django</li>
            <li>Django Rest-Framework</li>
            <li>MySql</li>
            <li>Sqllite</li>
          </ul>
        </div>
        <div className="about-right">
          <h2>Version Control & Deployment</h2>
          <ul>
            <li>Git</li>
            <li>Github</li>
            <li>Heroku</li>
            <li>Stack</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;