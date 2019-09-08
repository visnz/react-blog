import React from 'react';
import Config from "./config"
import {Avatar} from "antd"

const Style = {
    Title:{
        color: "#d9d9d9",
        paddingLeft: "10px",
    }
}
class AvatarTitle extends React.Component {
    render = () => (
        <span>
            <a href="/"><Avatar src={Config.blog.avatar} /></a>
            <span style={Style.Title}>
                {Config.blog.title}
            </span>
        </span>
    )
}
export { 
    AvatarTitle 
}

