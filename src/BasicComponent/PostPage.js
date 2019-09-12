import React from 'react';
import {  Col, Row, Layout } from 'antd';
import timelineMDData from "../posts/MDdata.timeline"
import MDGenerator from "./MDGenerator"
// 
//     <PostPage displayName="moescript" /> 
// 
class PostPage extends React.Component {
    state = {
        displayName: this.props.match.params.displayName || this.props.displayName
    }

    render = () => {
        for (var i of timelineMDData) {
            // console.log(i,this.state.displayName);
            if (i.displayName == this.state.displayName) {
                return (
                    <Layout.Content >
                        <Row type="flex" justify="center" >
                            {/* <Col xs={20} sm={17} md={14} lg={11} xl={8} xxl={6}> */}
                            <Col xs={22} md={18} xl={16} xxl={14}>
                                <MDGenerator data={i} />
                                {/* <p>{this.state.displayName}</p> */}
                            </Col>
                        </Row>
                    </Layout.Content >)
            }
        }
    }
}
export default PostPage