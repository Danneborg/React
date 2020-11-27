import React from "react";
import c from "./TopFriend.module.css"
import TopFriendList from "./TopFriendList";
const TopFriendBlock = (props) => {

    return (
        <div className={c.friendsBlock}>
            <div>
                <TopFriendList topFriends={props.topFriends}/>
            </div>
        </div>
    )

}

export default TopFriendBlock;