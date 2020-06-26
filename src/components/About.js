import React from 'react';
import { Jumbotron} from 'reactstrap';

const About = (props) => {
  return (
    <div>
      <Jumbotron style={{textAlign:'center', backgroundColor:'white' }} >
        <h1 className="display-3" >About me</h1>
        <p className="lead">Hello! My name is Mbugua George, and i am a freelancer based in Nairobi Kenya. Currently,</p>
        <p className='lead' > i'm pursuing a bachelors degree in Information Technology at Maseno University.</p>
        <p className='lead' >I'm very passionate about how web applications work, and so i ventured on this path of web development.</p>
        <p className='lead' >My skills range from web developing ( both frontend and backend), web designing and deployment.</p>
        <p className='lead'>In web developing, i use django, django rest-framework, Mysql and Sqllite for the backend, and reactjs as the frontend, </p>
        <p className='lead'>bootstrap4 and html5 for my web designing, heroku, firebase and github for the deployment of the application.</p>
        <p className='lead'>I am very comfortable working with the above mentioned frameworks, and picking up a new language or framework </p>
        <p className='lead'>is not that hard for me.</p>
      </Jumbotron>
    </div>
  );
};

export default About;