import React from 'react'

function SignIn() {
    /*state = {

    }
    handleChange = (e) =>{
        console.log(e)
    }
    handleSubmit = (e) =>{
        console.log(e)
    }*/
    return(
        <div className="container">
            <form onSubmit={'o'} className="white">
                <h5 className="grey-text text-darken-3">Sign In</h5>

                <div className="input-field">
                    <label htmlFor="email">Email</label> 
                    <input type="email" id="email" onChange={'3'}/>
                </div>

                <div className="input-field">
                    <label htmlFor="password">Password</label> 
                    <input type="password" id="password" onChange={'3'}/>
                </div>

                <div className="input-field">
                    <button className="btn pink lighten-1 Z-depth-0">Login</button>
                </div>

            </form>

        </div>
    )

}

export default SignIn;