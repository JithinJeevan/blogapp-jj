import React, { useEffect, useState } from 'react';
import Login from './Login';

import './Signup.css';
import validation from './validation';
import axios from 'axios';
import { Link,AppBar, Toolbar, Typography } from '@mui/material';





function Signup() {

    // Storing Form Field Values
    var [formValues, setFormValues] = useState({ username: "", email: "", password: "" });

    // Manage Form Error Values
    const [formErrorValues, setFormErrorValues] = useState({});
    var [Values, setValues] = useState([]);

    // Flag for Form Submission Status
    const [isSubmit, setIsSubmit] = useState(false); 

    

    // Manage Field Change
    const  handleChange = (event) => {
        // console.log(event.target);
        const { name, value } = event.target; //destructuring
        setFormValues({ ...formValues, [name]: value });
        // console.log(formValues);
    }

    // Manage Form Refresh
    const handleSubmit = (event) => {
        event.preventDefault();
        setFormErrorValues(validation(formValues));
        setIsSubmit(true);
        console.log(Values);
        
    }

    useEffect(() => {
         
            register();
        
    }, [formErrorValues]);

    function register(){

        
            axios.post('http://localhost:5001/api/register',formValues)
            .then((response)=>
            {
              console.log(response.data);
              
                setValues(response.data);
              
                
        
            })
        
    

    
}

    return (
        <div>
            <AppBar>
           <Toolbar>
                    <Typography><h2 >Meta Blogs</h2></Typography>
               </Toolbar>
           </AppBar>
            <div className="main">
                <input type="checkbox" id="chk" aria-hidden="true" />
                {Object.keys(formErrorValues).length === 0 && isSubmit && Values.password===formValues.password ? (<Login />) : (<pre className='pretext'>Provide</pre>)}
                {/* Signup */}
                <div className="signup">
                    <form onSubmit={handleSubmit}>
                        <label for="chk" aria-hidden="true">Sign up</label>
                        <input type="text" name="username" placeholder="User name" required="" value={formValues.username} onChange={handleChange} />
                        <p className='error'>{formErrorValues.username}</p>
                        <input type="email" name="email" placeholder="Email" required="" value={formValues.email} onChange={handleChange} />
                        <p className='error'>{formErrorValues.email}</p>
                        <input type="password" name="password" placeholder="Password" required="" value={formValues.password} onChange={handleChange} />
                        { Values==="Username or Email already exists" && isSubmit ? (<h4>Username or Email already exists</h4>) : (<h4></h4>)}
                        <p className='error'>{formErrorValues.password}</p>
                        <button>Sign up</button>

                    </form>
                </div>

                {/* Login */}
                
                
                
            </div>
               <Link href="/login" className='loginlink'>Login</Link>     
            
        </div>
    );
}

export default Signup;