import React from 'react';
import Config from "../config"
import { Link } from 'react-router-dom'
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
            <Link to="/"><Avatar src={Config.blog.avatar} /></Link>
            <span style={Style.Title}>
                {Config.blog.title}
            </span>
        </span>
    )
}
export default AvatarTitle 

