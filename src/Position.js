import React from 'react';
import { Progress} from 'antd';


class Position extends React.Component{
    componentDidMount() {
        // 挂载滚动监听
        window.addEventListener('scroll', this.bindScroll.bind(this))
        window.addEventListener('resize', this.bindScroll.bind(this))
    }
    componentWillUnmount() {
        // 移除滚动监听
        window.removeEventListener('scroll', this.bindScroll.bind(this));
        window.removeEventListener('resize', this.bindScroll.bind(this));
    }
    bindScroll(e){
        const scrollTop =   window.pageYOffset
        const clientHeight =  document.body.clientHeight;
        const scrollHeight =  document.body.scrollHeight;
        console.log(this.state.position);
        var po=scrollTop*100/(scrollHeight-clientHeight)
        this.setState({
            position:po,
            display:po>5?"inline-block":"none"
        })
    }
    state={
        position:0,
        display:"inline-block"
      }
    render=()=>{
        return (
        <Progress 
            type="line"
            percent={this.state.position} 
            status="active"
            showInfo={false} 
            style={{
                position:"fixed",
                zIndex:1,
                top:"-13px",
                display:this.state.display,
            }}
            />
    )}
}


export default Position