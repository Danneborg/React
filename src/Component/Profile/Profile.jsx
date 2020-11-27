import React from "react";
import c from "./Profile.module.css";
import Posts from "./MyPosts/Post/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <Posts postData={props.postssData}/>
        </div>
    )

}


export default Profile