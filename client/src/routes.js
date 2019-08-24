import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Form from './Form';
import Results from './Results';

const Routes = () => (
    <Switch>
            <Route exact path="/" component={Form} />
            <Route path="/Results" component={Results} />
    </Switch>
);

export default Routes;