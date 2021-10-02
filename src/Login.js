import React, { useState } from 'react';
import LoginForm from './LoginForm';

const Login = () => {
    // useStates
    const [users, setUsers] = useState({});
    const [formErrors, setFormErrors] = useState({
        email: "",
        password: ""
    });
    const [isLogin, setIsLogin] = useState(false);
    
    return(
        <div>
            <LoginForm users = {users} setUsers = {setUsers} formErrors = {formErrors} setFormErrors = {setFormErrors} isLogin = {isLogin} setIsLogin = {setIsLogin} />
        </div>
    );
}

export default Login;