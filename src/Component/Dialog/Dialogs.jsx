import React from "react";
import c from "./Dialog.module.css";
import DialogItem from "./DialogItem/Dialogs";
import Message from "./Message/Dialogs";

const Dialogs = () => {

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

    let dialogsElement = dialogData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = messagesData.map(message => <Message message={message.message}/>);

    return (
        <div className={c.dialogs}>
            <div className={c.dialogItems}>
                {dialogsElement}
            </div>
            <div className={c.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;