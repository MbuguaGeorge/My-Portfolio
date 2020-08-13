import React from 'react';
import {
  Card, Button, CardImg, CardText, CardDeck,
   CardBody
} from 'reactstrap';

const Projects = (props) => {
  return (
    <div className="container" >
      <h3 className="container" style={{color:'#deaa86'}} >Projects</h3>
      <p className="container" >From Web Components and Design to Django backend implementation and RestFul Apis. Check out my latest Projects .</p>
    <CardDeck className="container" style={{padding:'20px'}} >
      <Card>
        <CardImg top width="50%" src="/images/pic1.png" alt="Card image cap1" />
        <CardBody>
          <CardText>A django backend based movie website with bootsrap frontend.</CardText>
          <a href="https://github.com/MbuguaGeorge/A-django-movie-website" ><Button style={{backgroundColor:'black'}} >View Repository</Button></a>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/images/0.jpg" alt="Card image cap" />
        <CardBody>
          <CardText>I created a rest api for the movie website using django rest-framework.</CardText>
          <a href="https://github.com/MbuguaGeorge/Rest_API" ><Button style={{backgroundColor:'black'}} >View Repository</Button></a>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/images/blog.jpg" alt="Card image cap" />
        <CardBody>
          <CardText>I created a twitter scraping python script which extracts tweets, saves them and gets a sentimental analysis about a particular topic of choice.</CardText>
          <a href="https://github.com/MbuguaGeorge/Twitter_Scraping" ><Button style={{backgroundColor:'black'}} >View Repository</Button></a>
        </CardBody>
      </Card>
    </CardDeck>
    <CardDeck className="container" style={{padding:'20px'}} >
    <Card>
        <CardImg top width="50%" src="/images/banner6.jpg" alt="Card image cap1" />
        <CardBody>
          <CardText>My first react project, a simple todo list.</CardText>
          <a href="https://github.com/MbuguaGeorge/Todolist" ><Button style={{backgroundColor:'black'}} >View Repository</Button></a>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/images/portfolio.png" alt="Card image cap1" />
        <CardBody>
          <CardText>Created my portfolio using react skills.</CardText>
          <a href="https://github.com/MbuguaGeorge/My_React_Portfolio" ><Button style={{backgroundColor:'black'}} >View Repository</Button></a>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/images/sale.png" alt="Card image cap1" />
        <CardBody>
          <CardText>Made a Responsive website using Html, Css and Js</CardText>
          <a href="https://github.com/MbuguaGeorge/"><Button style={{backgroundColor:'black'}} >View Repository</Button></a>
        </CardBody>
      </Card>
      </CardDeck>
    </div>
  );
};

export default Projects;