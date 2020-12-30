import React from "react"
import './styles/App.css';
import {Route} from 'react-router-dom';
import MainPage from "./pages/main/MainPage";
import PostPage from "./pages/posts/PostPage";
import UserPage from "./pages/user/UserPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <div className='main-container'>
            <header>
                <Navbar/>
            </header>
            <Route path='/' exact component={MainPage}/>
            <Route path='/post/:id' exact component={PostPage}/>
            <Route path='/user/:id' exact component={UserPage}/>
            <Footer />
        </div>
    );
}

export default App;
