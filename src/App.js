import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Component/Header";
import NavBar from "./Component/NavBar";
import Profile from "./Component/Profile";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <Profile/>
        </div>
    );
}


export default App;
