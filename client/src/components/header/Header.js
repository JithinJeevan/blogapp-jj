import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(props) {
    
    return (
        <div>
            <nav className="header" style={{width:"100%"}}>
                <h2 className="logo">Metas Blog</h2> {/* JSX*/}
                <div className="articles">
                    <Link className="link" to="/home/first">Home</Link>
                   
                    <Link className="link" to={`/article-admin`}>Articles</Link>
                    <Link className="link" to={`/article/add`}>Create Articles</Link>
                    <Link className="link" to={`/`}>Logout</Link>
                </div>
            </nav>
        </div>
    );
}

export default Header;