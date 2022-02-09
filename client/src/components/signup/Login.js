import React, { useEffect, useState } from 'react';
// import './Login.css';

import axios from 'axios';

import {Link, AppBar, Toolbar, Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import '../header/Header.css';

function Login(props) {

    let [loginValues,setloginValues] = useState([]);

// Storing Form Field Values
var [formValues, setFormValues] = useState({ username: "", email: "", password: "" });

// Manage Form Error Values
const navigate = useNavigate();

// Flag for Form Submission Status
var [isSubmit, setIsSubmit] = useState(false); 


 






// Manage Field Change
  const  handleChange = (event) => {
    // console.log(event.target);
    const { name, value } = event.target; //destructuring
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
}

useEffect(()=>{
    fetch();

},[formValues])
// Manage Form Refresh
 const handleSubmit =  (event) => {
    event.preventDefault();
    
    setIsSubmit(true);
    
    redirected();
    setFormValues({ username: "", email: "", password: "" });
    
}

async function redirected(){

     var chk =  loginValues[0]._id;
     var username =  loginValues[0].username;
     var password = loginValues[0].password;
    console.log(chk);
    console.log(formValues.username);
    console.log(username);
    console.log(password);
    if( chk==="6203f78e46d339a4d8c5733a") {
        
       navigate("/header",{replace:true});
    }
  else  if(  formValues.username===username && formValues.password===password) {
        
        navigate("/header/second",{replace:true});
     }
 
    
    else
    {  navigate("/login",{replace:true});
}
}

 function  fetch(){
    axios.post('http://localhost:5001/api/login',formValues).then((response)=>{

        setloginValues(response.data);

        console.log("login",loginValues);

    })
  }

  

      
        
     
            
     




   

        
      
     
    

    
        
        
            


  

    



// async   function  login(){

//         axios.post('http://localhost:5001/api/login',formValues)
//         .  then((response)=>
//         {
//             console.log(response.data);
//              setloginValues(response.data);
            
            
//         })

        
    
//     }




    
    return (
        <div>
             <AppBar>
           <Toolbar>
                    <Typography><h2 >Meta Blogs</h2></Typography>
               </Toolbar>
           </AppBar>
            {/* { (isSubmit &&  isAuth) ?(<Header Values={loginValues}/>):<pre className='pretext'>Invalid Login Credentials</pre>} */}
            
            <div className="">
                <form onSubmit={handleSubmit}>
                <label for="chk" aria-hidden="true">Sign In</label>
                        <input type="text" name="username" placeholder="User name" required="" value={formValues.username} onChange={handleChange} />
                        <h4 style={{color:"white",marginLeft:"7px"}}>Or</h4>
                        <input type="email" name="email" placeholder="Email" required="" value={formValues.email} onChange={handleChange} />
                        
                        <input type="password" name="password" placeholder="Password" required="" value={formValues.password} onChange={handleChange} />
                        { isSubmit &&  loginValues.status==="Authentication failed" ?(<h3>Invalide credentials</h3>):(<h3></h3>)}
                        <button>Sign In</button>
                </form>
            </div>
            <Link href="/" className='loginlink'>Sign Up</Link> 
        </div>
       
    );
}

export default Login;