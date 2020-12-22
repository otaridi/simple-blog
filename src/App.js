import React from "react"
import './App.css';
import {Route} from 'react-router-dom';
import ContextProvider from "./context/Context";
import MainPage from "./pages/main/MainPage";
import PostPage from "./pages/post/PostPage";
import UserPage from "./pages/user/UserPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <ContextProvider>
        <div className='main-container'>
            <header>
                <Navbar/>
            </header>
            <Route path='/' exact component={MainPage}/>
            <Route path='/post/:id' exact component={PostPage}/>
            <Route path='/user/:id' exact component={UserPage}/>
            <Footer />
        </div>
        </ContextProvider>
    );
}

export default App;
