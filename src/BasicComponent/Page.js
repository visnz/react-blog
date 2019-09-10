import React from 'react';
import { Pagination, Col, Row } from 'antd';
import DisplayCard from "./DisplayCard.js"
import timelineMDData from "../posts/MDdata.timeline"
import categoriesMDData from "../posts/MDdata.categories"
import tagsMDData from "../posts/MDdata.tagTable"
class Page extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 1,
        };
    }
    onChange(page) {
        this.setState({
            current: page,
        });
    }
    // type=  page/categories/tags
    // value=  
    render = () => {
        var data={
            "page":timelineMDData,
            "categories":categoriesMDData[this.props.value],
            "tags":tagsMDData[this.props.value]
        }[this.props.type]

        return (
            <Row type="flex" justify="center">
                <DisplayCard data={data.slice(
                    (this.state.current - 1) * 10,
                    (this.state.current) * 10 - 1
                )} />
                <Col span={24} />
                <Col >
                    <Pagination
                        defaultCurrent={this.state.current}
                        total={data.length}
                        onChange={this.onChange.bind(this)}
                    />
                </Col>
            </Row>
            )

    }
}
export default Page