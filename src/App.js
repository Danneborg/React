import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import s from './App.css';
import Header from "./Component/Header/Header";
import NavBar from "./Component/NavBar/NavBar";
import Profile from "./Component/Profile/Profile";
import Dialogs from "./Component/Dialog/Dialogs";
import Music from "./Component/Music/Music";
import News from "./Component/News/News";
import Settings from "./Component/Settings/Settings";
import state from "./redux/state";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={() => <Profile postssData={props.state.profilePage}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs dialogsData={props.state.dialogsPage}/>}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
