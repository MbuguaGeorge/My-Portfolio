import React from 'react';
import {FaTwitter, FaGithub, FaLinkedin} from 'react-icons/fa'

const Home = (props) => {

  return (
      <div className="home" >
        <div>
          <h5>LOOKING FOR A WEB DEVELOPER?</h5>
          <p>Hi, I'M A WEB APPLICATION DEVELOPER AND PROGRAMMER BASED IN NAIROBI, KENYA.</p>
          <p>You can email me: <p style={{color: 'red', padding: '20px'}} >mbuguag026@gmail.com</p> or reach me through the handles.</p>
        </div>
        <div className="social">
          <ul>
            <a href="https://twitter.com/_MbuguaGeorge" ><FaTwitter size="25px" color="deepskyblue" /></a><ul></ul>
            <a href="https://github.com/MbuguaGeorge"><FaGithub size="25px" color="white" /></a><ul></ul>
            <a href="https://www.linkedin.com/in/george-mbugua-a03b531a7/"><FaLinkedin size="25px" color="dodgerblue" /></a><ul></ul>
          </ul>
        </div>
      </div>
  );
};

export default Home;