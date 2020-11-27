import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postssData = [
    {id: "1", message: "user1", likesCont: 1},
    {id: "2", message: "user2", likesCont: 2},
    {id: "3", message: "user3", likesCont: 3},
    {id: "4", message: "user4", likesCont: 4}
];
let dialogData = [
    {id: "1", name: "user1"},
    {id: "2", name: "user2"},
    {id: "3", name: "user3"},
    {id: "4", name: "user4"}
];
let messagesData = [
    {id: "1", message: "user1"},
    {id: "2", message: "user2"},
    {id: "3", message: "user3"},
    {id: "4", message: "user4"}
];


ReactDOM.render(
    <React.StrictMode>
        <App postssData={postssData} dialogData={dialogData} messagesData={messagesData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
