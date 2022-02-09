import React from 'react';
import { Link } from 'react-router-dom';
function HomeSecond(props) {
    return (
        <div className='home'>

<nav className="header">
                <h2 className="logo">Metas Blog</h2> {/* JSX*/}
                
                <div className="articles">
                    
                    <Link className="link" to="/home">Home</Link>
                    
                    <Link className="link" to="/article-list">Articles</Link>
                    <Link className="link" to={`/`}>Logout</Link>
                </div>
            </nav>
            <h1 id='head'>Blog Application</h1>
            <p>A blog (a truncation of "weblog") is a discussion or informational website published on the World Wide Web consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order, so that the most recent post appears first, at the top of the web page. Until 2009, blogs were usually the work of a single individual, occasionally of a small group, and often covered a single subject or topic. In the 2010s, "multi-author blogs" (MABs) emerged, featuring the writing of multiple authors and sometimes professionally edited. MABs from newspapers, other media outlets, universities, think tanks, advocacy groups, and similar institutions account for an increasing quantity of blog traffic. The rise of Twitter and other "microblogging" systems helps integrate MABs and single-author blogs into the news media. Blog can also be used as a verb, meaning to maintain or add content to a blog.</p>
        </div>
    );
}

export default HomeSecond;