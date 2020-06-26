import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import {FaTwitter, FaGithub, FaLinkedin, FaPhone} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Home = (props) => {

  return (
    <div className="container" >
      <Jumbotron style={{background:'white'}} >
        <h5 className="display-4">LOOKING FOR A WEB DEVELOPER?</h5>
        <p className="lead" style={{padding:'10px'}} >Hi, I'M A WEB APPLICATION DEVELOPER AND PROGRAMMER BASED IN NAIROBI, KENYA.</p>
        <p style={{padding:'10px'}} >You can contact me anytime for any enquiries.</p>
        <p className="lead">
          <Link to="/Contact" ><Button color="success" style={{padding:'10px'}} >CONTACT ME</Button></Link>
        </p>
      </Jumbotron>
      <ul className='container' style={iconStyle} >
  <a href="https://twitter.com/_MbuguaGeorge" ><FaTwitter size="20px" color="black" /></a><ul></ul>
      <a href="https://github.com/MbuguaGeorge"><FaGithub size="20px" color="black" /></a><ul></ul>
      <a href="https://www.linkedin.com/in/george-mbugua-a03b531a7/"><FaLinkedin size="20px" color="black" /></a><ul></ul>
      <FaPhone size="20px" />
      </ul>
    </div>
  );
};

const iconStyle ={
  justifyContent:'center',
  alignItems:'center',
  display:'flex',
  color: 'black',
  fontSize: '30px',
}


export default Home;