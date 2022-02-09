import React, { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';






function Article(props) {
    const { name } = useParams();

    // Temporary storage of DB data
    
    const [Article, setArticle] = useState([]);

    // Matching name parameter
    // const singleArticle = Article.find(i => i.title === name);
    

    // Backend Connection API Fetch
    useEffect(() => {
        fetchAPI();
        console.log(Article);
       
    }, []);

    async function fetchAPI() {
        const response = await fetch(`http://localhost:5001/api/articlelist`);
        const body = await response.json();
        console.log(body);
        setArticle(body.find(i => i.title === name));
        


    }
    
    
    // async function fetchArticle() {
    //     const response = await fetch(`http://localhost:5001/api/article/${name}`);
    //     const body = await response.json();
    //     console.log(body);
    //     setArticle(body);

    // }


    // Article Not Exist in DB
    // if (!Article) return <Error />

    return (
        <div >

                <nav className="header">
                <h2 className="logo">Metas Blog</h2> {/* JSX*/}
                <div className="articles">
                    <Link className="link" to="/home/first">Home</Link>
                    
                    <Link className="link" to={`/article-admin`}>Articles</Link>
                    
                    <Link className="link" to={`/`}>Logout</Link>
                    
                </div>
            </nav>
            <h1 className='singlearticle'>{Article.title}</h1>
            {/* <UpvoteSection name={name} setarticleData={setarticleData} upvotes={articleData.upvotes} /> */}
            <br></br> <br></br>
            <p className='desc'>{Article.description}</p>
            {/* <Comments comments={articleData.comments} />
            <AddComments name={name} setarticleData={setarticleData} /> */}
        </div>
    );
}

export default Article;