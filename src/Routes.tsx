import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Elves from './components/Elves';
import Hobbits from './components/Hobbits';
import Home from './components/Home';

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/elves" component={Elves} />
            <Route exact path="/hobbits" component={Hobbits} />
            <Route component={Home} />
        </Switch>
    );
}