import React from "react";
import c from "../Dialog.module.css";


const Message = (props) => {

    return (
        <div className={c.message}>
            {props.message}
        </div>
    )
}


export default Message;