import Home from './components/home/Home';

import ArticleList from './components/article/ArticleList';
import Article from './components/article/Article';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Signup from "./components/signup/Signup";
import Login from './components/signup/Login';
import ArticleListAdmin from './components/article/ArticleListAdmin';
import CreateArticle from './components/article/CreateArticle';
import Header from './components/header/Header';
import '../src/components/header/Header.css'
import UpdateArticle from './components/article/UpdateArticle';
import DeleteArticle from './components/article/DeleteArticle';
import HomeSecond from './components/home/HomeSecond';
import HeaderSecond from './components/header/HeaderSecond';
import ArticleNormal from './components/article/ArticleNormal';

function App() {
  return (
    <div className="App">
      <Router>
          
          
          <Routes>
          <Route path="/header" element={<Header/>} />
          <Route path="/" element={<Signup/>} />
          <Route path="/header/second" element={<HeaderSecond/>} />
          
          <Route path="/login" element={<Login/>} />
          <Route path="/Article/normal/:name" element={<ArticleNormal/>} />
          <Route path="/article-list" element={<ArticleList />} />
          <Route path="/home" element={<HomeSecond />} />
          <Route path="/home/first" element={<Home/>} />
          <Route path="/article-admin" element={<ArticleListAdmin />} />
          <Route path="/article/add" element={<CreateArticle/>} />
          <Route path="/article/:name" element={<Article />} />
          <Route path="/article/edit/:name" element={<UpdateArticle />} />
          <Route path="/article/delete/:name" element={<DeleteArticle />} />
          {/* <Route path="*" element={<Error />} /> */}
                
      </Routes>
      </Router>
    
    </div>
  );
}

export default App;
