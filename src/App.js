import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Breadcrumb, BackTop, Row, Col } from 'antd';
import Header from "./BasicComponent/Header"
import Position from "./BasicComponent/Position"
import Config from "./config"
import ImageBoard from "./BasicComponent/ImageBoard"
import CoverTitle from "./BasicComponent/CoverTitle"
import BlogMenu from "./BasicComponent/BlogMenu"
import PaddingPlan from "./BasicComponent/PaddingPlan"
import Footer from "./BasicComponent/Footer"
import Arch from "./BasicComponent/Arch"
import DisplayCard from "./BasicComponent/DisplayCard"
import MDGenerator from "./MDLogic/MDGenerator"
class App extends React.Component {
  render = () => (
    <Layout theme="light">
      <Layout.Header style={{ height: "100%", }}>
        <Position />
        <Header config={Config.blog.header}></Header>
      </Layout.Header >

      <Layout.Content >
        <ImageBoard />
      </Layout.Content >

      <Row type="flex" justify="center" >
        <Col xs={22} md={20} xl={18} xxl={16}>
          <Layout.Content style={{ padding: PaddingPlan["s"], }}>

            <Layout.Content >
              <Row type="flex" justify="center" style={{ overflow: "hidden", margin: PaddingPlan["l"] }} >
                <Col type="flex" >
                  <CoverTitle />
                </Col>
              </Row>
            </Layout.Content >

            <Layout.Content >
              {/* <MDGenerator source={require("./posts/HTML5.md")} /> */}
            </Layout.Content >

            <Layout.Content >
              <Row type="flex" justify="center" style={{ margin: PaddingPlan["m"] }}>
                <BlogMenu />
              </Row>
              <Row type="flex" justify="center" >
                <Col xs={20} sm={17} md={14} lg={11} xl={8} xxl={6}>
                  <Arch data={[
                    { title: "helloworld", date: "June 13 2019", tags: ["Game", "Boy"] },
                    { title: "helloworld", date: "June 13 2019", tags: ["Game", "Boy"] },
                  ]} />
                </Col>
              </Row>
              <Row
                type="flex"
                justify="center"
                style={{
                  padding: PaddingPlan["s"],
                  maxWidth: "960px",
                  margin: "0 auto",
                }}>
                <Col xs={22} sm={18} md={16}>
                  <DisplayCard data={[
                    { img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png", title: "helloworld", date: "June 13 2019", tags: ["Game", "Boy"], desc: "hello" },
                    { img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png", title: "helloworld", date: "June 13 2019", tags: ["Game", "Boy"], desc: "hello" },
                    { img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png", title: "helloworld", date: "June 13 2019", tags: ["Game", "Boy"], desc: "hello" },
                  ]} />
                </Col>
              </Row>
            </Layout.Content >
            <Layout.Content >
              <div >Content</div>
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
              <BackTop />
            </Layout.Content >
          </Layout.Content>
        </Col>
      </Row>

      <Layout.Footer ><Footer /></Layout.Footer>
    </Layout>
  )
}

export default App;
