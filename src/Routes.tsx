import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Elves from './components/views/Elves';
import Hobbits from './components/views/Hobbits';
import Dwarves from './components/views/Dwarves';
import MenAtanatari from './components/views/MenAtanatari';
import MenAtani from './components/views/MenAtani';
import All from './components/views/All';
import About from './components/About';

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/elves" component={Elves} />
            <Route exact path="/hobbits" component={Hobbits} />
            <Route exact path="/dwarves" component={Dwarves} />
            <Route exact path="/men/atanatari" component={MenAtanatari} />
            <Route exact path="/men/atani" component={MenAtani} />
            <Route exact path="/all" component={All} />
            <Route exact path="/about" component={About} />
            <Route component={Home} />
        </Switch>
    );
}