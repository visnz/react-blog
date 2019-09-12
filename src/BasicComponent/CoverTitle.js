import React from 'react';
import { Carousel,Tag,Col,Row,Typography,Layout } from 'antd';
import {xyPlan} from "./Block"
import timelineMDData from "../posts/MDdata.timeline"
import Config from "../config"
const height="200px"
const Style={
    Row:{
        maxWidth:"960px",
        overflow: "hidden", 
        margin:"0 auto",
        padding:xyPlan["l"]
    },
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
    render=()=>{
        var picdata=timelineMDData.slice(0,3)
        var aboutdata=((timelineMDData)=>{
            for(var i of timelineMDData){
                if(i.displayName==="about") return i
            }
        })(timelineMDData)        
        return (
        <Layout.Content>
            <Row 
                style={
                   Style.Row
                } 
                justify="center"
                type="flex">
                <Col 
                    xs={22} xl={16} xxl={12}
                    type="flex"
                    >
                    <Carousel autoplay  effect="fade" style={Style.Carousel}>
                        {picdata.map((e,i)=>(
                            <div key={i}>
                                <a href={Config.blog.path+"/posts/"+e.displayName}>
                                    <img src={e.img} alt={e.displayName} style={Style.CarouselImage} />
                                    <h1>helloworld</h1>
                                </a>
                            </div>
                        ))}
                    </Carousel>
                </Col>
                {/* <Col lg={0} span={24} ></Col> */}
                <Col xs={18} xl={8} xxl={6}>
                    <Row style={{padding:xyPlan["m"]}}>
                        <Row style={{padding:xyPlan["s"]}}>
                            <Tag >Pin to Top</Tag>
                        </Row>
                        <Row style={{padding:xyPlan["s"]}}>
                            <a href={Config.blog.path+"/posts/about"}><Typography.Title level={2}>{aboutdata.title}</Typography.Title></a>
                        </Row>
                        <Row style={{padding:xyPlan["s"]}}>
                            <Typography.Text type="secondary" >{aboutdata.date}</Typography.Text>
                        </Row>
                        <Row style={{padding:xyPlan["s"]}}>
                            <Typography.Text  >{aboutdata.desc}</Typography.Text>
                        </Row>
                    </Row>
                </Col>
            </Row>
        </Layout.Content>
    )}
}
export default CoverTitle;