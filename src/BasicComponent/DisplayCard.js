import React from 'react';
import { Card,Col,Row } from 'antd';
import PaddingPlan from "./PaddingPlan"
const width=320
const Style={
    Card:{
        // width: width*2+"px",
        // maxWidth:width+"px",
        margin:PaddingPlan["m"]
    },
    Image:{
        // width: width*2+"px",
        height:width+"px",
        objectFit: "cover",
    }
}
class DisplayCard extends React.Component {
    render=()=>(
        <div>
            {this.props.data.map((e,i)=>(
                    <SingleCard 
                        key={i}
                        img={e.img} 
                        title={e.title} 
                        desc={e.desc} 
                        tags={e.tags} 
                        date={e.date}
                    />
            ))}
        </div>
    )
}
class SingleCard extends React.Component {
    render=()=>(
        <Card
            hoverable
            style={Style.Card}        
            cover={<img alt="example" 
                src={this.props.img} 
                style={Style.Image}
                />}
        >
        <Card.Meta title={this.props.title}  description={this.props.desc} />
      </Card>
    )
}
export default DisplayCard