import React from 'react';
import { Card, Col, Layout,Row } from 'antd';
import SecondTitle from "./SecondTitle"
import Config from "../config"
import {xyPlan,yPlan} from "./Block"
import { Link } from 'react-router-dom'
const width = 320
const Style = {
    Card: {
        margin: xyPlan["s"]
    },
    Image: {
        height: width + "px",
        objectFit: "cover",
    }
}
class DisplayCard extends React.Component {
    render = () => (
        <Col xs={24} sm={20} md={16}>
            {this.props.data.map((e, i) => (
                <Layout.Content key={i}>
                    <SingleCard data={e}/>
                    <Row style={yPlan["s"]} />
                </Layout.Content>
            ))}
        </Col>
    )
}
class SingleCard extends React.Component {
    render = () => (
        <Link to={Config.blog.path+"/posts/" + this.props.data.displayName}>
            <Card
                hoverable
                style={Style.Card}
                cover={<img alt="example"
                    src={this.props.data.img}
                    style={Style.Image}
                />}
            >
                <Card.Meta
                    title={this.props.data.title}
                    description={
                        <p>
                            <SecondTitle data={this.props.data} />
                            <br />
                            {this.props.data.desc}
                        </p>
                    }
                />
            </Card>
        </Link>
    )
}
export default DisplayCard