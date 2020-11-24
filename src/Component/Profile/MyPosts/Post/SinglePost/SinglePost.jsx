import React from "react";
import c from "./SinglePost.module.css";


const SinglePost = (props) => {
    return (
        <div className={c.item}>
            <img src="https://i.mycdn.me/image?id=838968512981&ts=00000000190000012c&plc=WEB&tkn=*HgeUJJ9phxm9HWqJX7D7VF1zf5Y&fn=sqr_288"/>
            {props.message}
            <div><span>like {props.likeCount}</span></div>
        </div>
    )

}


export default SinglePost