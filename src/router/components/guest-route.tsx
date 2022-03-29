import React, { FunctionComponent } from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import { Routes } from '../routes';
import { useAuthCheck } from '../hooks/useAuthCheck';
import { Loader } from '../../components/Loader';

export const GuestRoute: FunctionComponent<RouteProps> = (
    props: RouteProps
) => {
    const { authenticated, checkingAuth } = useAuthCheck();

    if (checkingAuth) {
        return (
            <div className="layout-loading-overlay">
                <div>
                    <Loader />
                    <span className="layout-loading-overlay-text">
                        Приложение загружается, пожалуйста подождите...
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
                false ? (
                    <Redirect to={{ pathname: Routes.Default }} />
                ) : (
                    //@ts-ignore
                    <Component {...props} />
                )
            }
        />
    );
};

export default GuestRoute;
