import React from "react";
import c from "./Dialog.module.css";
import DialogItem from "./DialogItem/Dialogs";
import Message from "./Message/Dialogs";

const Dialogs = (props) => {

    console.log(props)

    let dialogsElement = props.dialogData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.messagesData.map(message => <Message message={message.message}/>);

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