import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Breadcrumb, BackTop} from 'antd';
import Header from "./Header"
import Position from "./Position"
import Config from "./config"

class App extends React.Component {
  componentDidMount() {
    // 挂载滚动监听
    window.addEventListener('scroll', this.bindScroll)
  }
  componentWillUnmount() {
      // 移除滚动监听
      window.removeEventListener('scroll', this.bindScroll);
  }
  
  render=()=>(
    <Layout theme="light">
        <Position />
        <Header config={Config.blog.header}></Header>

      <Layout.Content >
        <Breadcrumb>
          <Breadcrumb.Item><a href="/">Application Center</a></Breadcrumb.Item>
          <Breadcrumb.Item><a href="/">Application Center</a></Breadcrumb.Item>
          <Breadcrumb.Item><a href="/">Application Center</a></Breadcrumb.Item>
        </Breadcrumb>
        <div >Content</div>
      </Layout.Content>
      <BackTop />
      <p>ssssssssssssssssssssss</p><p>ssssssssssssssssssssss</p>
      <p>ssssssssssssssssssssss</p><p>ssssssssssssssssssssss</p>
      <p>ssssssssssssssssssssss</p><p>ssssssssssssssssssssss</p>
      <p>ssssssssssssssssssssss</p><p>ssssssssssssssssssssss</p>
      <p>ssssssssssssssssssssss</p><p>ssssssssssssssssssssss</p>
      <p>ssssssssssssssssssssss</p><p>ssssssssssssssssssssss</p>
      <p>ssssssssssssssssssssss</p><p>ssssssssssssssssssssss</p>
      <p>ssssssssssssssssssssss</p><p>ssssssssssssssssssssss</p>
      <p>ssssssssssssssssssssss</p><p>ssssssssssssssssssssss</p>
      <p>ssssssssssssssssssssss</p><p>ssssssssssssssssssssss</p>
      <p>ssssssssssssssssssssss</p><p>ssssssssssssssssssssss</p>
      <p>ssssssssssssssssssssss</p><p>ssssssssssssssssssssss</p>
      <p>ssssssssssssssssssssss</p><p>ssssssssssssssssssssss</p>
      <p>ssssssssssssssssssssss</p><p>ssssssssssssssssssssss</p>
      <p>ssssssssssssssssssssss</p><p>ssssssssssssssssssssss</p>
      <p>ssssssssssssssssssssss</p><p>ssssssssssssssssssssss</p>
      <p>ssssssssssssssssssssss</p><p>ssssssssssssssssssssss</p>
      <p>ssssssssssssssssssssss</p><p>ssssssssssssssssssssss</p>
      <p>ssssssssssssssssssssss</p><p>ssssssssssssssssssssss</p>
      <p>ssssssssssssssssssssss</p><p>ssssssssssssssssssssss</p>
      <p>ssssssssssssssssssssss</p><p>ssssssssssssssssssssss</p>
      <p>ssssssssssssssssssssss</p><p>ssssssssssssssssssssss</p>
      <p>ssssssssssssssssssssss</p><p>ssssssssssssssssssssss</p>
      <p>ssssssssssssssssssssss</p><p>ssssssssssssssssssssss</p>
      <p>ssssssssssssssssssssss</p><p>ssssssssssssssssssssss</p>
      <p>ssssssssssssssssssssss</p><p>ssssssssssssssssssssss</p>
      <p>ssssssssssssssssssssss</p><p>ssssssssssssssssssssss</p>
      <p>ssssssssssssssssssssss</p><p>ssssssssssssssssssssss</p>
      <Layout.Footer >Ant design 2019</Layout.Footer>
    </Layout>
    )
}

export default App;
