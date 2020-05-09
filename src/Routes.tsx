import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import Elves from './components/Elves';
import Hobbits from './components/Hobbits';

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/elves" component={Elves} />
            <Route exact path="/hobbits" component={Hobbits} />
            <Route component={App} />
        </Switch>
    );
}