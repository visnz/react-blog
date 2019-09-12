import React from 'react';
import { Pagination, Col, Row,Layout } from 'antd';
import DisplayCard from "./DisplayCard.js"
import timelineMDData from "../posts/MDdata.timeline"
import categoriesMDData from "../posts/MDdata.categories"
import {xyPlan, Block} from "./Block"
import tagsMDData from "../posts/MDdata.tagTable"
    // type=  page/categories/tags
    // value=  
    // 
    //     <Page type="page" /> 
    //     <Page type="categories" value="运维" />
    //     <Page type="tags" value="计算机" />
    // 
class Page extends React.Component {
        state = {
            current: 1,
            // value: this.props.match.params.value || this.props.value
        };
    onChange(page) {
        this.setState({
            current: page,
        });
    }

    render = () => {
        console.log(this.props);
        
        // var data={
        //     "page":timelineMDData,
        //     "categories":categoriesMDData[this.state.value],
        //     "tags":tagsMDData[this.state.value]
        // }[this.props.type]
        var data={
            "page":timelineMDData,
            "categories":categoriesMDData[this.props.match.params.value || this.props.value],
            "tags":tagsMDData[this.props.match.params.value || this.props.value]
        }[this.props.type]
        return (
            <Layout.Content > 
            <Row type="flex" justify="center">
                <DisplayCard data={data.slice(
                    (this.state.current - 1) * 10,
                    (this.state.current) * 10 - 1
                )} 
                />
                <Col span={24} style={{padding:xyPlan["m"]}}/>
                {/* <Block size="m" /> */}
                <Col >
                    <Pagination
                        defaultCurrent={this.state.current}
                        total={data.length}
                        onChange={this.onChange.bind(this)}
                    />
                </Col>
            </Row>
            </Layout.Content >
            )

    }
}
export default Page