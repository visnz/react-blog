import React from 'react';
import { Icon, Tabs, Layout, Row, Badge,Menu  } from 'antd';
import {xyPlan, Block} from "./Block"
// import Config from "../config"
import { Link  } from 'react-router-dom'
import timelineMDData from "../posts/MDdata.timeline"
import categoriesMDData from "../posts/MDdata.categories"
import Config from "../config"
import tagsMDData from "../posts/MDdata.tagTable"
var menu=[
    {value:"Home",icon:"home",href:Config.blog.path+"/",count:"0"},
    {value:"Archive",icon:"inbox",href:Config.blog.path+"/archive",count:timelineMDData.length},
    // {value:"Tags",icon:"tags",href:"/",count:Object.getOwnPropertyNames(tagsMDData).length},
    // {value:"categories",icon:"appstore",href:"/",count:Object.getOwnPropertyNames(categoriesMDData).length},
    {value:"About",icon:"user",href:Config.blog.path+"/posts/about",count:""},
]
class BlogMenu extends React.Component {
    state = {
        current: "0",
      };
    
      handleClick = e => {
        this.setState({
          current: e.key,
        });
      };
    render = () => (
        <Layout.Content >
            <Row type="flex" justify="center" style={{ margin: xyPlan["m"] }}>
                <Menu 
                onClick={this.handleClick} 
                selectedKeys={[this.state.current]} 
                mode="horizontal"
                style={{backgroundColor:"rgba(0,0,0,0)"}}
                >
                    {menu.map((e, i) => (
                        <Menu.Item  key={i}>
                            <Link to={e.href}>
                                <Icon type={e.icon} />{e.value}<Badge count={e.count} />
                            </Link>
                        </Menu.Item>
                    ))}
                </Menu >
            </Row>
            <Row style={{ margin: xyPlan["l"] }} />
        </Layout.Content >
    )
}
export default BlogMenu