import React from "react"
import './styles/App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Routes from "./Routes";

function App() {
    return (
        <div className='main-container'>
            <header>
                <Navbar/>
            </header>
            <Routes/>
            <Footer/>
        </div>
    );
}

export default App;
