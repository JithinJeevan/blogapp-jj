import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Article.css';


function ArticleList(props) {

    

    // Temporary storage of DB data
    const [articleData, setarticleData] = useState([]);

    

    // Backend Connection API Fetch
    useEffect(() => {
        fetchAPI();
    }, [])

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
                    <Link className="link" to="/home">Home</Link>
                    <Link className="link" to={`/article-list`}>Articles</Link>
                
                    <Link className="link" to={`/`}>Logout</Link>
                </div>
                </nav>
            <h1 id='articles'>Articles</h1>
            {articleData.map((i, key) => (
                <Link className='article' key={key} to={`/article/normal/${i.title}`}>
                    <h3 className='article_head'>{i.title}</h3>
                </Link>
            ))}
        </div>
    );
}

export default ArticleList;