// ProtectedRoute.tsx

import React from 'react';
import { Route,Link, Routes } from 'react-router-dom';

const ProtectedRoute: React.FC<any> = ({
    isAuthenticated = false,
    component: Component,
    ...rest
}) => {
    console.log(isAuthenticated,'isAuthenticsted');
    return (
        <React.Fragment>
        <Route
            {...rest}
            render={(props:any) =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Link to="/signin" />
                )
            }
        />
        </React.Fragment>
    );
};

export default ProtectedRoute;
