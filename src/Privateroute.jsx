import React, { useContext } from 'react';
import { Authcontext } from './components/providers/Authprovider';
import { Navigate } from 'react-router-dom';

const Privateroute = ({children}) => {

    const {user}=useContext(Authcontext)

    if(user){
        return children
    }


    return (
        <Navigate to={'/login'}></Navigate>
    );
};

export default Privateroute;