import React from "react";
import c from "./NavBar.module.css";
import {NavLink} from "react-router-dom";

import TopFriendBlock from "./TopFriendBlock/TopFriendBlock";

const NavBar = (props) => {
    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <NavLink to="/profile" activeClassName={c.active}>Profile</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/dialogs" activeClassName={c.active}>Messages</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/news" activeClassName={c.active}>News</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/music" activeClassName={c.active}>Music</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to="/settings" activeClassName={c.active}>Settings</NavLink>
            </div>

            <div className={c.item}>
                <TopFriendBlock topFriends={props.navData.topFriends}/>
            </div>

        </nav>
    )

}


export default NavBar