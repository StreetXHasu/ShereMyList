import React from 'react';
import history from './history';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { Routes } from './routes';
import GuestRoute from './components/guest-route';
import { observer } from 'mobx-react-lite';
import { MainPage } from 'pages/MainPage';

const RouteList = observer(() => {
    return (
        <Router history={history}>
            <div className={'app-container'}>
                <Switch>
                    <GuestRoute path={Routes.MainPage} component={MainPage} />
                    <Redirect to={Routes.Default} />
                </Switch>
            </div>
        </Router>
    );
});

export { RouteList };
