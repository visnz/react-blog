import React from 'react';
import map from "../posts/MDdata.mapRorReact"
import SecondTitle from "./SecondTitle"
import ReactMarkdown from 'react-markdown';
import { Timeline, Typography, Tag, Col, Row, Layout } from 'antd';
class MDGenerator extends React.Component {
    preduceMDData(data) {
        var tmp = data.split('---')
        tmp = tmp.slice(2, tmp.length).join("\n---\n")
        return tmp
    }
    state = { mdtext: "" }
    readMD = () => {
        fetch(map[this.props.data.displayName])
            .then(response => {
                return response.text()
            })
            .then(text => {
                this.setState({ mdtext: text })
            })
    }
    render = () => {
        this.readMD()


        return (
            <div>
                {/* <h1>{this.props.data.title}</h1> */}
                <Typography.Title level={1} >{this.props.data.title}</Typography.Title>
                <SecondTitle data={this.props.data} />
                <br />
                <br />
                <img
                    src={this.props.data.img}
                    alt={this.props.data.desc}
                    style={{ width: "100%" }}
                />
                <br />
                <br />
                <ReactMarkdown source={this.preduceMDData(this.state.mdtext)} escapeHtml={false} />
            </div>
        )
    }
}
export default MDGenerator