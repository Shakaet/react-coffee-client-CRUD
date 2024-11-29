import React, { useContext } from 'react';
import { AuthProvider } from './Provider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    let {users,loader}= useContext(AuthProvider)

    let location= useLocation()


    if(loader){
        return <h2>loading</h2>
    }
    
    if(users){
        return children
    }


    return <Navigate  state={{from:location.pathname}} to="/login"></Navigate>

        
    
};

export default PrivateRoute;