import React from 'react';
import 'antd/dist/antd.css';
import { Layout, BackTop, Row, Col } from 'antd';

import ImageBoard from "./BasicComponent/ImageBoard"
import CoverTitle from "./BasicComponent/CoverTitle"
import BlogMenu from "./BasicComponent/BlogMenu"
import Arch from "./BasicComponent/Arch"
import Page from "./BasicComponent/Page"
import PostPage from "./BasicComponent/PostPage"
import {xyPlan, } from "./BasicComponent/Block"
import DisplayCard from "./BasicComponent/DisplayCard"
import { Switch, Route, IndexRoute } from 'react-router-dom'
class App extends React.Component {
  render = () => (
    <Layout.Content>
      <Switch>
        <Route exact path='/blog' component={ImageBoard} />
      </Switch>

      <Row type="flex" justify="center" >
        <Col xs={22} md={20} xl={18} xxl={16}>
          <Layout.Content style={{ padding: xyPlan["xs"], }}>

            <CoverTitle />

            <BlogMenu />

            <Switch>
              <Route exact path='/blog' render={(props) => (
                <Page {...props} type="page" />
              )} />
              <Route path='/blog/archive' component={Arch} />
              <Route path='/blog/posts/:displayName' component={PostPage} />
              <Route path='/blog/tags/:value' render={(props) => (
                <Page {...props} type="tags" />
              )} />
              <Route path='/blog/categories/:value' render={(props) => (
                <Page {...props} type="categories" />
              )} />
            </Switch>

              <BackTop />
          </Layout.Content>
        </Col>
      </Row>
      </Layout.Content>
  )
}

export default App;
