import React from 'react';
import { Icon,Tabs,Col,Row,Badge} from 'antd';
import Config from "../config"
class BlogMenu extends React.Component {
    render=()=>(
        <Tabs defaultActiveKey="1">
                {Config.blog.menu.map((e,i)=>(
                        <Tabs.TabPane tab={
                            <a href={e.href}>
                                
                                <Icon type={e.icon} />
                                {e.value}
                                <Badge count={e.count} />
                            </a>}key={i}>
                        </Tabs.TabPane>
                ))}
            </Tabs>
    )
}
export default BlogMenu