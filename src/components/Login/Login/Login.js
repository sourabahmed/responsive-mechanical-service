import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const{signInUsingGoogle, logOut, user} = useAuth();
    return (
        <div className="mt-5 p-4">
            <h2>Please log in</h2>
            <button onClick={signInUsingGoogle} className="btn btn-danger">Google sign in</button>
        </div>
    );
};

export default Login;