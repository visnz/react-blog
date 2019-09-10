import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Row, Col } from 'antd';
import AvatarTitle from "./AvatarTitle"
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
    )
}
class HeaderMenu extends React.Component {
    render = () => (
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={Style.Menu}
        >
            {this.props.nav.map((e, i) => (
                <Menu.Item key={i}><a href={e.href}>{e.value}</a></Menu.Item>
            ))}
        </Menu>
    )
}
export default Header