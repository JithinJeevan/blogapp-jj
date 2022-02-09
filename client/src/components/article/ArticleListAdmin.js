import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Article.css';


function ArticleListAdmin(props) {

    

    // Temporary storage of DB data
    const [articleData, setarticleData] = useState([]);

    

    // Backend Connection API Fetch
    useEffect(() => {
        fetchAPI();
        console.log(articleData);
    },[])

    function remove() {
       axios.get("")
       .then((response)=>{
        setarticleData(response);
        
       });
        
    }

    async function fetchAPI() {
        const response = await fetch(`http://localhost:5001/api/articlelist`);
        const body = await response.json();
        console.log(body);
        setarticleData(body);

    }
    return (
        <div>
            <nav className="header">
                <h2 className="logo">Metas Blog</h2> {/* JSX*/}
                <div className="articles">
                    <Link className="link" to="/home/first">Home</Link>
                    
                    <Link className="link" to={`/article-admin`}>Articles</Link>
                    <Link className="link" to={`/article/add`}>Create Articles</Link>
                    <Link className="link" to={`/`}>Logout</Link>
                </div>
            </nav>
            <h1 id='articles'>Articles</h1>
            
            {articleData.map((i, key) => (
                <div>
                <Link className='article' key={key} to={`/article/${i.title}`}>
                    <h3 className='article_head'>{i.title}</h3>
                </Link>
                <a href={`/article/edit/${i.title}`} style={{color:"white",position:"relative",left:"20em"}}>Edit</a>
                <a href={`/article/delete/${i.title}`} style={{color:"white",position:"relative",left:"22em"}}>Delete</a>
                </div>
                
                
                ))}


        </div>
    );
}

export default ArticleListAdmin;