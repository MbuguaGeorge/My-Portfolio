import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact'

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Projects" component={Projects} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
    </Switch>
)


export default Main;