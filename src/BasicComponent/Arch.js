import React from 'react';
import { Timeline, Typography, Col, Row, Layout } from 'antd';
import { Link } from 'react-router-dom'
import Config from "../config"
import SecondTitle from "./SecondTitle"
import {xyPlan} from "./Block"
import timelineMDData from "../posts/MDdata.timeline"
// 
//     <Arch />
// 
class Arch extends React.Component {
    render = () => (
        <Layout.Content >
            <Row type="flex" justify="center" >
                {/* <Col xs={20} sm={17} md={14} lg={11} xl={8} xxl={6}> */}
                <Col xs={20} sm={18} md={16} lg={14} xl={12} xxl={10}>
                    <Timeline>
                        {timelineMDData.map((e, i) => (
                            <Timeline.Item key={i}>
                                {/* <a href={e.href}> */}
                                    <ArchCard
                                        data={e}
                                    />
                                {/* </a> */}
                            </Timeline.Item>
                        ))}
                    </Timeline>
                </Col>
            </Row>
        </Layout.Content >
    )
}
class ArchCard extends React.Component {
    render = () => (
        <div >
            <div style={{ margin: xyPlan["xs"] }}>
                <SecondTitle data={this.props.data} />
            </div>
            <Link to={Config.blog.path+"/posts/"+this.props.data.displayName}>
                <Typography.Title 
                level={4} 
                style={{ margin: xyPlan["xs"] }}>{this.props.data.title}
                </Typography.Title>
            </Link>
        </div>
    )
}
export default Arch