import React from "react";
import c from "./ProfileInfo.module.css";


const ProfileInfo = () => {
    return (
        <div>
            <div className={c.test}>
                <div className={c.mainImgContainer}>
                    <img src="https://cs8.pikabu.ru/post_img/big/2017/06/06/2/1496710261194222281.jpg"
                         alt="Content"/>
                </div>
            </div>
            <div className={c.descriptionBlock}>
                ava+descr
            </div>
        </div>
    )

}


export default ProfileInfo