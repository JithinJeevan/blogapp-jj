import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams,Link, useNavigate } from 'react-router-dom';


import './CreateArticle.css';

function CreateArticle(props) {

    var navigate = useNavigate();

    const [articleData, setarticleData] = useState([]);
    const [Data, setData] = useState({  title: "", description: "" });
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
            setData({  title: "", description: "" });
            setIsSubmit(false);
            navigate("/article-admin",{replace:true})
        }
        
        
    }

    

    // Backend Connection API Fetch
    useEffect(()=>{
        fetchAPI();
    },[isSubmit]);

    async function fetchAPI() {

        if(isSubmit===true){
        axios.post(`/api/article/add`,Data)
        .then((response)=>{
            setarticleData(response)
            console.log(articleData);
        });
    }

    }
    return (
        <div className="create">
            <nav className="createnav">
                <h2 className="logo">Metas Blog</h2> {/* JSX*/}
                <div className="articles">
                    <Link className="link" to="/home/first">Home</Link>
                    
                    <Link className="link" to={`/article-admin/`}>Articles</Link>
                    <Link className="link" to={`/article/add`}>Create Articles</Link>
                    <Link className="link" to={`/`}>Logout</Link>
                </div>
            </nav>

            {/* {articleData>0 && user===articleData.username && isSubmit ?(<ArticleListAdmin/>):<pre className='pretext'>Invalid Login Credentials</pre>} */}

            {
                     <div className="form">
                     <div className="title">Welcome</div>
                     <div className="subtitle">Let's create your Blog!</div>
                     
                     <div className="input-container ic2">
                     <label for="lastname" class="placeholder">Title</label>
                     <input  name='title' style={{height:'2em'}} id="email" className="input" type="text" placeholder=" " required="" onChange={handleChange}value={Data.title}/> 
                       <div className="cut"></div>
                       
                     </div>
                     <div className="input-container ic2">
                     <label for="email" class="placeholder">Content</label>
                       <input name='description' id="email" className="input" type="text" placeholder=" " required="" onChange={handleChange}value={Data.description}/>
                       <div className="cut cut-short"></div>
                       {articleData.statusText==="OK" && articleData.data!="Tiltle already exists"?(<h3>Data added succesfully</h3>):(<h3></h3>)}
                       {articleData.statusText==="OK" && articleData.data==="Tiltle already exists"?(<h3>Tiltle already exists</h3>):(<h3></h3>)}
                       
                     </div>
                     <button onClick={handleSubmit} type="text" className="submit">submit</button>
                   </div>
            }
        </div>
    );
}

export default CreateArticle;