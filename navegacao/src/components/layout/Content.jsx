import React from "react";
import { Switch, Route } from 'react-router-dom'

import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import './Content.css'

const Content = props => (
    <main className="Content">
    <Switch>
        <Route path="/about">
            <About />
        </Route>
        
        <Route exact path="/">
            <Home />
        </Route>
        
    </Switch>
</main>
)

export default Content