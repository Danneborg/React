import React from "react";
import c from "./Posts.module.css";
import SinglePost from "./SinglePost/SinglePost";


const Posts = (props) => {

    console.log(props.postData);

    let postsElements = props.postData.profileData.map( post =><SinglePost message={post.message} likeCount={post.likesCont}/>);

    return (
        <div className={c.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>add post</button>
                </div>
            </div>
            <div className={c.posts}>
                {postsElements}
            </div>
        </div>
    )
}


export default Posts