import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Row, Col } from 'antd';
import { AvatarTitle } from "./AvatarTitle"

const Height = "48px"
const Style = {
    Menu: {
        lineHeight: Height,
    },
    AvatarTitle: {
        lineHeight: Height,
    },
    LayoutHeader: {
        height: Height,
    }
}
class Header extends React.Component {
    render = () => (
        <Layout.Header style={Style.LayoutHeader}>
            <Row
                type="flex"
                justify="space-around"
            >
                <Col style={Style.AvatarTitle}>
                    <AvatarTitle size="xxxs" />
                </Col>
                <Col span={0} sm={1}></Col>
                <Col >
                    <HeaderMenu nav={this.props.config.nav}></HeaderMenu>
                </Col>
            </Row>
        </Layout.Header>
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