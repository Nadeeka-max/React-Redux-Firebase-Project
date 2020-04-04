import React, {useState } from 'react'

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    
    const handleEmailChange = (e) =>{
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) =>{
        setPassword(e.target.value);
      }
      const handleFirstNameChange = (e) =>{
        setFirstName(e.target.value);
      }
      const handleLastNameChange = (e) =>{
        setLastName(e.target.value);
      }
   const handleSubmit = (e) =>{
       e.preventDefault();
       console.log(email);
       console.log(password);
       console.log(firstName);
       console.log(lastName);

    }
    return(
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign Up</h5>

                <div className="input-field">
                    <label htmlFor="email">Email</label> 
                    <input value={email} type="email" id="email" onChange={handleEmailChange}/>
                </div>

                <div className="input-field">
                    <label htmlFor="password">Password</label> 
                    <input value= {password} type="password" id="password" onChange={handlePasswordChange}/>
                </div>

                <div className="input-field">
                    <label htmlFor="firstName">FirstName</label> 
                    <input value= {firstName} type="text" id="firstName" onChange={handleFirstNameChange}/>
                </div>

                <div className="input-field">
                    <label htmlFor="lastName">LastName</label> 
                    <input value= {lastName} type="text" id="lastName" onChange={handleLastNameChange}/>
                </div>

                <div className="input-field">
                    <button className="btn pink lighten-1 Z-depth-0">SIGN UP</button>
                </div>

            </form>

        </div>
    )

}

export default SignUp;