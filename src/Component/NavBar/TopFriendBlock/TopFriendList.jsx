import React from "react";
import c from "./TopFriend.module.css"

const TopFriendList = (props) => {
    let friendsList = props.topFriends
        .map(friend => <li>{friend.name}</li>);

    return (
        <ul>
            {friendsList}
        </ul>
    )

}

export default TopFriendList;