import React from 'react';
import { Timeline,Typography,Tag  } from 'antd';
import PaddingPlan from "./PaddingPlan"

// <Arch data={[
//     {title:"helloworld",date:"June 13 2019",tags:["Game","Boy"],href:"/"},
//     {title:"helloworld",date:"June 13 2019",tags:["Game","Boy"],href:"/"},
// ]}/>
class Arch extends React.Component {
    render = () => (
        <div>
            <Timeline pending="To be done..." reverse="true">
                {this.props.data.map((e,i)=>(
                    <Timeline.Item key={i}>
                        <a href={e.href}>
                            <ArchCard title={e.title} date={e.date} tags={e.tags} />
                        </a>
                    </Timeline.Item>
                ))}
            </Timeline>
        </div>
    )
}
class ArchCard extends React.Component {
    render=()=>(
        <div >
            <div style={{margin:PaddingPlan["xs"]}}>
                <Typography.Text type="secondary" >{this.props.date}</Typography.Text>
                <Typography.Text  > | {this.props.tags.map((e,i)=>(
                    <Tag key={i} >{e}</Tag>
                    ))}</Typography.Text>
            </div>
            <Typography.Title level={3} style={{margin:PaddingPlan["xs"]}}>{this.props.title}</Typography.Title>
        </div>
    )
}
export default Arch