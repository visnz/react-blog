import React from 'react';
import { Card, Col, Tag } from 'antd';
import PaddingPlan from "./PaddingPlan"
const width = 320
const Style = {
    Card: {
        // width: width*2+"px",
        // maxWidth:width+"px",
        margin: PaddingPlan["l"]
    },
    Image: {
        // width: width*2+"px",
        height: width + "px",
        objectFit: "cover",
    }
}
class DisplayCard extends React.Component {
    render = () => (
        <Col xs={22} sm={18} md={16}>
            {this.props.data.map((e, i) => (
                <SingleCard
                    key={i}
                    img={e.img}
                    title={e.title}
                    desc={e.desc}
                    tags={e.tags}
                    date={e.date}
                    href={e.href}
                />
            ))}
        </Col>
    )
}
class SingleCard extends React.Component {
    render = () => (
            <Card
                // href={this.props.href}
                hoverable
                style={Style.Card}
                cover={<img alt="example"
                    src={this.props.img}
                    style={Style.Image}
                />}
            >
                <Card.Meta
                    title={this.props.title}
                    description={
                        <p>
                                {this.props.date}{" |   "}
                                {this.props.tags.map((e, i) => (
                                    <Tag 
                                        // href={"/tags/" + e} 
                                        key={i}>
                                        {e}
                                    </Tag>
                                ))}
                            <br />
                            <br />
                                {this.props.desc}
                        </p>
                    }
                />
            </Card>
    )
}
export default DisplayCard