import React from "react";

function Avatar(props) {
    return (<div className="circle-wrap">
        <img className="circle-img" src={props.img} alt="avatar_img"/>
    </div>);
}

export default Avatar;
