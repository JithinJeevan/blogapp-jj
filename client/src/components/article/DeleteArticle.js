import React, {useEffect, useState } from 'react';
import { useParams,Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function DeleteArticle(props) {
    
    const [articleData, setarticleData] = useState([]);
    var {name}= useParams();
    var navigate=useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        
        
        goto();
    }
    useEffect(()=>{
        fetchAPI();
    },[]);

    async function fetchAPI() {

        
        axios.delete(`http://localhost:5001/api/delete/${name}`)
        .then((response)=>{
            setarticleData(response)
            console.log(articleData);
        });
    

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
                     
                     
                     <div className="input-container ic2">
                     <label  className="placeholder">Delete article {name} ?</label>
                       
                       </div>
                       
                     
                     <button onClick={handleSubmit} type="text" class="submit">Delete</button>
                   
                   </div>
            }
        </div>
    );
}

export default DeleteArticle;