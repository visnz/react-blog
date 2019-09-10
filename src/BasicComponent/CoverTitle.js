import React from 'react';
import { Carousel,Tag,Col,Row,Typography } from 'antd';
import Config from "../config"
import PaddingPlan from "./PaddingPlan"

const height="200px"
const Style={
    Carousel:{
        height:height,
        overflow:"hidden"
    },
    CarouselImage:{
        width:"100%",
        height:height,
        objectFit: "cover",
    }
}
class CoverTitle extends React.Component {
    render=()=>(
        <Row 
            style={{
                maxWidth:"960px",
                padding:PaddingPlan["m"],
            }} 
            justify="space-around"
            type="flex">
            <Col 
                span={16}
                type="flexed"
                >
                <Carousel autoplay  effect="fade" style={Style.Carousel}>
                    {Config.blog.coverTitle.carousel.map((e,i)=>(
                        <div  key={i}>
                            <a href={e.href}>
                                <img src={e.src} alt={e.value} style={Style.CarouselImage} />
                            </a>
                        </div>
                    ))}
                </Carousel>
            </Col>
            <Col lg={0} span={24} ></Col>
            <Col span={8}>
                <Row style={{padding:PaddingPlan["l"]}}>
                    <Row style={{padding:PaddingPlan["s"]}}>
                        <Tag >{Config.blog.coverTitle.tag}</Tag>
                    </Row>
                    <Row style={{padding:PaddingPlan["s"]}}>
                        <Typography.Title level={2}>{Config.blog.coverTitle.title}</Typography.Title>
                    </Row>
                    <Row style={{padding:PaddingPlan["s"]}}>
                        <Typography.Text type="secondary" >{Config.blog.coverTitle.date}</Typography.Text>
                    </Row>
                    <Row style={{padding:PaddingPlan["s"]}}>
                        <Typography.Text  >{Config.blog.coverTitle.secondText}</Typography.Text>
                    </Row>
                </Row>
            </Col>
        </Row>
    )
}
export default CoverTitle;