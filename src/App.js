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
import Page from "./BasicComponent/Page"
import DisplayCard from "./BasicComponent/DisplayCard"
import MDGenerator from "./MDLogic/MDGenerator"
class App extends React.Component {
  render = () => (
    <Layout>
      <Layout.Header style={{ height: "100%", }}>
        <Position />
        <Header ></Header>
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


            {/* <Layout.Content >
              <MDGenerator source={require("./posts/HTML5.md")} />
            </Layout.Content > */}

             <Layout.Content >
              <Row type="flex" justify="center" style={{ margin: PaddingPlan["m"] }}>
                <BlogMenu />
              </Row>
            </Layout.Content >
            <Layout.Content > 
              {this.props.children}
            </Layout.Content >
            <Layout.Content > 


              {/* <Page type="page" /> */}
              {/* <Page type="categories" value="运维" /> */}
              <Page type="tags" value="计算机" />
                
            </Layout.Content >
             {/* <Row type="flex" justify="center" >
                  <Arch data={[
                    { title: "helloworld", date: "June 13 2019", tags: ["Game", "Boy"] },
                    { title: "helloworld", date: "June 13 2019", tags: ["Game", "Boy"] },
                  ]} />
              </Row>
              <Row
                type="flex"
                justify="center"
                style={{
                  padding: PaddingPlan["s"],
                  maxWidth: "960px",
                  margin: "0 auto",
                }}>
                  <DisplayCard data={[
                    { img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png", title: "helloworld", date: "June 13 2019", tags: ["Game", "Boy"], desc: "hello" },
                    { img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png", title: "helloworld", date: "June 13 2019", tags: ["Game", "Boy"], desc: "hello" },
                    { img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png", title: "helloworld", date: "June 13 2019", tags: ["Game", "Boy"], desc: "hello" },
                  ]} />
              </Row>
            </Layout.Content > */}

            <Layout.Content >
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
