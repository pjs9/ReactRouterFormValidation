import React from 'react';

const emailPattern = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const SignupForm = ({ users, setUsers, formErrors, setFormErrors }) => {
    
    //handle functions
    const handleSubmit = (e) => {
        e.preventDefault();
        if(formErrors.firstName.length > 0 || formErrors.lastName.length > 0 || formErrors.email.length > 0 || formErrors.password.length > 0){
            console.error("INVALID FORM SUBMITTED!!!");
        }else if(users.firstName === undefined || users.lastName === undefined  || users.email === undefined || users.password === undefined || users.password2 === undefined){
            alert("Please don't leave the input field empty!");
        }else if(users.password !== users.password2){
            alert("Password Doesn't Match!");
        }else{
            console.log(`
                ------ SUCCESSFUL FORM SUBMITION ------
                First Name: ${users.firstName}
                Last Name: ${users.lastName}
                Email: ${users.email}
                Password: ${users.password}
                Password2: ${users.password2}
            `);
        }
    }
    
    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setUsers({
            ...users,
            [name]: value
        })
        switch(name){
            case "firstName":
                formErrors.firstName = value.length < 3 && value.length > 0 ? "First name should have atleast 3 characters!" : "";
                break;
            case "lastName":
                formErrors.lastName = value.length < 3 && value.length > 0 ? "Last name should have atleast 3 characters!" : "";
                break;
            case "email":
                formErrors.email = emailPattern.test(value) && value.length > 0 ? "" : "Please Enter Valid Email";
                break;
            case "password":
                formErrors.password = value.length > 0 && value.length < 6 ? "Atleast 6 character is required!" : "";
                break;
            case "password2":
                formErrors.password2 = value === users.password ? "" : "Password should match!";
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
                    <h1>Create An Account</h1>
                </div>
                <div className="form-field">
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="input-field">
                            <div className="nameField firstName">
                                <input type="text" className={formErrors.firstName.length > 0 ? "error " : null} name="firstName" onChange={handleChange} noValidate />
                                <label htmlFor="firstName">First Name</label>
                                {formErrors.firstName.length > 0 && <span className="errorMessage">{formErrors.firstName}</span>}
                            </div>
                            <div className="nameField lastName">
                                <input type="text" name="lastName" className={formErrors.lastName.length > 0 ? "error " : null} onChange={handleChange} noValidate />
                                <label htmlFor="lastName">Last Name</label>
                                {formErrors.lastName.length > 0 && <span className="errorMessage">{formErrors.lastName}</span>}
                            </div>
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
                            <div className="nameField password2">
                                <input type="password" name="password2" className={formErrors.password2.length > 0 ? "error " : null} onChange={handleChange} noValidate />
                                <label htmlFor="password2">Confirm Password</label>
                                {formErrors.password2.length > 0 && <span className="errorMessage">{formErrors.password2}</span>}
                            </div>
                        </div>
                        <div className="btn">
                            <input type="submit" value="Signup" className="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignupForm;