import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Row, Col,Layout } from 'antd';
import AvatarTitle from "./AvatarTitle"
import { Link } from 'react-router-dom'
import Config from "../config"


const Height = "48px"
const Style = {
    Menu: {
        lineHeight: Height,
    },
    AvatarTitle: {
        lineHeight: Height,
        // margin: "0 auto",

    },
}
class Header extends React.Component {


    render = () => (
        <Layout.Header style={{ height: "100%", }}>
            <Row
                type="flex"
                justify="space-around"
            >
                <Col style={Style.AvatarTitle} >
                    <AvatarTitle size="xxxs" />
                </Col>
                <Col xs={24} sm={0} ></Col>
                <Col >
                    <HeaderMenu nav={Config.blog.header.nav}></HeaderMenu>
                </Col>
            </Row>
        </Layout.Header>
    )
}
class HeaderMenu extends React.Component {
    state = {
        current: '0',
    };
    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
    render = () => (
        <Menu
            theme="dark"
            mode="horizontal"
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            defaultSelectedKeys={['1']}
            style={Style.Menu}
        >
            {this.props.nav.map((e, i) => (
                <Menu.Item key={i}>
                    <Link to={e.href}>{e.value}</Link>
                </Menu.Item>
            ))}
        </Menu>
    )
}
export default Header