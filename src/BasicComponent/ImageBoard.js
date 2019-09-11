import React from 'react';
import Config from "../config"
import { Popover, Button, Row, Typography,Icon,Col,Layout } from 'antd';
import { yPlan } from './Block';

const Style = {
    ContactIcon: {
        width: "20px",
        margin: "0 1px",
        color:Config.color.white
    },
    Title: {
        fontWeight: "1",
        color: "#fff",
        fontSize: "36px"
    }
}
class ImageBoard extends React.Component {
    constructor(){
        super()
        this.ref = ref => {this.refDom = ref};
    }
    calWidthToOffset(){
        var width=window.clientWidth;
        // var width=this.refDom.clientWidth;
        var d=width-1600
        var r=0.5
        var offset=120
        this.setState({
            backgroundPositionY:"-"+(offset+(d>0?d*r:0))+"px"
        })
    }
    componentDidMount() {
        // 挂载滚动监听
        window.addEventListener('resize', this.calWidthToOffset.bind(this))
        this.calWidthToOffset()
    }
    componentWillUnmount() {
        // 移除滚动监听
        window.removeEventListener('resize', this.calWidthToOffset.bind(this));
    }
    state={
        backgroundPositionY:"0px"
    }
    render = () => {
        // var style=Style.Background
        // style.backgroundPositionY=this.state.backgroundPositionY
        return (
        <Layout.Content style={{
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundImage: "url(" + Config.blog.background + ")",
            backgroundAttachment: "fixed",
            backgroundPositionY:this.state.backgroundPositionY,
            backgroundPositionX: "center"
        }} ref={this.ref}>
            <Row ></Row>
            <Row style={yPlan["l"]} />

            <Row style={yPlan["xl"]}>
                <Row type="flex" justify="space-around">
                    <Typography.Text type="secondary">_Shut up and take my money_</Typography.Text>
                </Row>
                <Row type="flex" justify="space-around">
                    <Typography.Title style={Style.Title}>The While Parties</Typography.Title>
                </Row>
                <Row type="flex" justify="space-around">
                    <Contact />
                </Row>
            </Row>
            <Row style={yPlan["l"]} />
            <Row style={yPlan["xl"]}>                    
                <Row type="flex" justify="start">
                    <Col span={1}></Col>
                    <Col>
                    <Popover 
                        placement="right" 
                        title="HongKong" 
                        content="Produced by visnz/2018.Dec" 
                        trigger="click">
                        <Button shape="circle" >
                            <Icon type="info-circle" />
                        </Button>
                    </Popover>
                    </Col>
                </Row>
            </Row>
            <Row style={yPlan["s"]}></Row>
        </Layout.Content>
    )}
}

class Contact extends React.Component {
    render = () => {
        switch(Config.blog.contact.type){
            case "icon":
                return (
                <div>
                    {Config.blog.contact.data.map((e,i) => (
                        <a href={e.href} key={i}>
                            <Icon type={e.icon}
                                style={Style.ContactIcon}
                            />
                    </a>))}
                </div>
                )
            case "img":
                return (        
                <div>
                    {Config.blog.contact.data.map((e,i) => (
                        <a href={e.href} key={i}>
                            <img
                                alt={e.value}
                                src={e.src}
                                style={Style.ContactIcon}
                            ></img>
                        </a>))}
                </div>)
            default:
                return null;
        }
    }
}
export default ImageBoard