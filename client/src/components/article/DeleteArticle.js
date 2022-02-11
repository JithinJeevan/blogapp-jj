import React, {useEffect, useState } from 'react';
import { useParams,Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './DeleteArticle.css';

function DeleteArticle(props) {
    
    const [articleData, setarticleData] = useState([]);
    const [isSubmit, setIsSubmit] = useState(false);
    var {name}= useParams();
    var navigate=useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        setIsSubmit(true);
        fetchAPI();
        
        goto();
    }
    // useEffect(()=>{
        
    // },[handleSubmit]);

    async function fetchAPI() {

        
        axios.delete(`/api/delete/${name}`)
        .then((response)=>{
            setarticleData(response)
            console.log(articleData);
        });
    

    }

    function goto(){

        
            navigate("/article-admin",{replace:true});
        
    }
    
    return (
        <div className="create">
            <nav className="createnavs">
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
                     
                     
                     
                       
                       <h3 className='delete'>Delete article {name} ?</h3>
                     <button onClick={handleSubmit} type="text" class="submit">Delete</button>
                   
                   </div>
            }
        </div>
    );
}

export default DeleteArticle;