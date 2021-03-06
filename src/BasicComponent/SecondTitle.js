import React from 'react';
import { Link } from 'react-router-dom'
import { Typography, Tag} from 'antd';
import Config from "../config"

class SecondTitle extends React.Component {
    render=()=>(
        <p>
            <Typography.Text type="secondary" >{this.props.data.date}</Typography.Text>
            {" | "}
                <Link to={Config.blog.path+"/categories/"+this.props.data.categories}
                style={{color:" rgba(0, 0, 0, 0.45)"}} >
                    <Typography.Text  >
                    {this.props.data.categories}
                </Typography.Text>
                </Link>
            {" | "}{this.props.data.tags.map((e, i) => (
                <Tag key={i} >
                    <Link to={Config.blog.path+"/tags/"+e} style={{color:" rgba(0, 0, 0, 0.45)"}} >
                    <Typography.Text  >{e}</Typography.Text>
                    </Link>
                </Tag>
            ))}
       </p>
    )
}
export default SecondTitle