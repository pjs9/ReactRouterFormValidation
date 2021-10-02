import React from 'react';
// import Login from './Login';
// import LoginSuccess from './LoginSuccess';
// import { Link } from 'react-router-dom';

const emailPattern = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

let LoginForm = ({ users, setUsers, formErrors, setFormErrors }) => {
    //handle functions
    const handleSubmit = (e) => {
        e.preventDefault();
        if(formErrors.email.length > 0 || formErrors.password.length > 0){
            console.error("INVALID FORM SUBMITTED!!!");
        }else if(users.email === undefined || users.password === undefined){
            alert("Please don't leave the input field empty!");
        }else{
            console.log(`
                ------ SUCCESSFUL LOGIN FORM SUBMITION ------
                Email: ${users.email}
                Password: ${users.password}
            `);
        }
    }
    
    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setUsers({
            ...users,
            [name]: value
        });
        switch(name){
            case "email":
                formErrors.email = emailPattern.test(value) && value.length > 0 ? "" : "Please Enter Valid Email";
                break;
            case "password":
                formErrors.password = value.length > 0 && value.length < 6 ? "Atleast 6 character is required!" : "";
                break;
            default:
                break;
        }
        setFormErrors(formErrors);
    }
    return(
        <div className="wrapper">
            <div className="info">
                <p>Hi There,</p>
                <h1>React Wants Your Information</h1>
                <p>Feel free to introduce yourself and thank you, for your attention, in advance.</p>
            </div>
            <div className="form-wrapper">
                <div className="title">
                    <h1>Login To Account</h1>
                </div>
                <div className="form-field">
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="input-field">
                            <div className="nameField email">
                                <input type="email" name="email" className={formErrors.email.length > 0 ? "error " : null} onChange={handleChange} noValidate />
                                <label htmlFor="email">Email</label>
                                {formErrors.email.length > 0 && <span className="errorMessage">{formErrors.email}</span>}
                            </div>
                            <div className="nameField password">
                                <input type="password" name="password" className={formErrors.password.length > 0 ? "error " : null} onChange={handleChange} noValidate />
                                <label htmlFor="password">Password</label>
                                {formErrors.password.length > 0 && <span className="errorMessage">{formErrors.password}</span>}
                            </div>
                        </div>
                        <div className="btn log">
                            <input type="submit" value="Login" className="submit" />
                        </div>
                    </form>
                </div>
                
                    {/* <div className="btn log"> 
                            <Link to="/home"><input type="button" value="Login" className="submit" /></Link> 
                            <input type="button" value="Login" className="submit" />
                    </div> */}
                    
            </div>
        </div>
    );
}


export default LoginForm;