import React from 'react';
import { observer } from 'mobx-react-lite';
import history from './router/history';
import { RouteList } from './router/RouteList';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { MenuAppBar } from './components/MenuAppBar';

const App = observer(() => {
    return (
        <>
            <MenuAppBar />
            <Router history={history}>
                <RouteList />
                <ToastContainer
                    autoClose={5000}
                    hideProgressBar={true}
                    pauseOnHover={true}
                    closeOnClick={true}
                />
            </Router>
        </>
    );
});

export default App;
