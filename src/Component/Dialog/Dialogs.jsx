import React from "react";
import c from "./Dialog.module.css";
import DialogItem from "./DialogItem/Dialogs";
import Message from "./Message/Dialogs";

const Dialogs = (props) => {



    let dialogsElement = props.dialogsData.dialogData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.dialogsData.messagesData.map(message => <Message message={message.message}/>);

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