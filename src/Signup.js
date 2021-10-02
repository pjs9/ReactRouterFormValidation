import React, { useState } from 'react';
import SignupForm from './SignupForm';
// import { Link } from 'react-router-dom';


const Signup = () => {
    // useStates
    const [users, setUsers] = useState({});
    const [formErrors, setFormErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        password2: ""
    });
    
    return(
        <div>
            <SignupForm users = {users} setUsers = {setUsers} formErrors = {formErrors} setFormErrors = {setFormErrors} />
        </div>
    );
}

export default Signup;