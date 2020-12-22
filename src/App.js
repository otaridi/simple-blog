import React from "react"
import './App.css';
import {Route} from 'react-router-dom';
import MainPage from "./pages/main/MainPage";
import PostPage from "./pages/post/PostPage";
import UserPage from "./pages/user/UserPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
        <Route path='/' exact component={MainPage} />
        <Route path='/post/:id' exact component={PostPage} />
        <Route path='/user/:id' exact component={UserPage} />
    </div>
  );
}

export default App;
