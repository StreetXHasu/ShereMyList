import React, { FunctionComponent } from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import { Routes } from '../routes';
import { useAuthCheck } from '../hooks/useAuthCheck';
import { Loader } from '../../components/Loader';

export const PrivateRoute: FunctionComponent<RouteProps> = (
    props: RouteProps
) => {
    const { authenticated, checkingAuth } = useAuthCheck();

    if (checkingAuth) {
        return (
            <div className="layout-loading-overlay">
                <div>
                    <Loader />
                    <span className="layout-loading-overlay-text">
                        Initializing your workspace...
                    </span>
                </div>
            </div>
        );
    }

    const { component: Component, ...rest } = props;
    return (
        <Route
            {...rest}
            render={(props) =>
                authenticated ? (
                    //@ts-ignore
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: Routes.SignIn }} />
                )
            }
        />
    );
};

export default PrivateRoute;
