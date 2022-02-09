import React, {useEffect, useState } from 'react';
import { useParams,Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateArticle(props) {

    const {name} = useParams();
    var navigate = useNavigate();

    const [articleData, setarticleData] = useState([]);
    const [Data, setData] = useState({   description: "" });
    const [isSubmit, setIsSubmit] = useState(false); 

    const handleChange = (event) => {
        // console.log(event.target);
        const { name, value } = event.target; //destructuring
        setData({ ...Data, [name]: value });
        // console.log(formValues);
    }

    // Manage Form Refresh
    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmit(true);
        if(articleData.statusText==="OK"){
            setData({ description: "" });
            setIsSubmit(false);
        }
        
        
    }

    useEffect(()=>{
        fetchAPI();
    },[isSubmit]);

    async function fetchAPI() {

        if(isSubmit===true){
        axios.post(`http://localhost:5001/api/edit/${name}`,Data)
        .then((response)=>{
            setarticleData(response)
            console.log(articleData);
        });
    }

    }

    function goto(){

        
            navigate("/article-admin",{replace:true});
        
    }
    
    
    return (
        <div>
            <nav className="header">
                <h2 className="logo">Metas Blog</h2> {/* JSX*/}
                <div className="articles">
                    <Link className="link" to="/home/first">Home</Link>
                    
                    <Link className="link" to={`/article-admin`}>Articles</Link>
                    <Link className="link" to={`/`}>Logout</Link>
                    
                </div>
            </nav>

            {/* {articleData>0 && user===articleData.username && isSubmit ?(<ArticleListAdmin/>):<pre className='pretext'>Invalid Login Credentials</pre>} */}

            {
                     <div className="form">
                     <div className="title">Welcome</div>
                     <div className="subtitle">Update your Blog!</div>
                     
                     <div className="input-container ic2">
                     <label  className="placeholder">{name}</label>
                       
                       <div className="cut"></div>
                       
                     </div>
                     <div className="input-container ic2">
                     <label  className="placeholder">Content</label>
                       <input name='description' id="email" class="input" type="text" placeholder=" " required="" onChange={handleChange}value={Data.description}/>
                       <div className="cut cut-short"></div>
                       {articleData.statusText==="OK" && articleData.data!="Tiltle already exists"?(<h3>Data added succesfully</h3>):(<h3></h3>)}
                       
                       
                     </div>
                     <button onClick={handleSubmit} type="text" class="submit">submit</button>
                   </div>
            }
        </div>
    );
}
export default UpdateArticle;