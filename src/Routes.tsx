import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Elves from './components/Elves';
import Hobbits from './components/Hobbits';
import Dwarves from './components/Dwarves';
import MenAtanatari from './components/MenAtanatari';
import MenAtani from './components/MenAtani';
import All from './components/All';

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
            <Route component={Home} />
        </Switch>
    );
}