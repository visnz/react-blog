import React from 'react';
import 'antd/dist/antd.css';
import { Layout,  Row, Col } from 'antd';
import Config from "./config"
import CoverTitle from "./BasicComponent/CoverTitle"
import BlogMenu from "./BasicComponent/BlogMenu"
import Arch from "./BasicComponent/Arch"
import Page from "./BasicComponent/Page"
import PostPage from "./BasicComponent/PostPage"
import {xyPlan, } from "./BasicComponent/Block"
import { Switch, Route } from 'react-router-dom'
class Blog extends React.Component {
  render = () => (
    <Layout.Content>
      <Row type="flex" justify="center" >
        <Col xs={22} md={20} xl={18} xxl={16}>
          <Layout.Content style={{ padding: xyPlan["xs"], }}>

            <CoverTitle />
            <Switch>
              <Route exact path={Config.blog.path+'/'} component={BlogMenu} />
              <Route path={Config.blog.path+'/archive'} component={BlogMenu} />
              <Route path={Config.blog.path+'/posts/*'} component={BlogMenu} />
              <Route path={Config.blog.path+'/tags/*'} component={BlogMenu} />
              <Route path={Config.blog.path+'/categories/*'} component={BlogMenu} />
            </Switch>
            <Switch>
              <Route exact path={Config.blog.path+'/'} render={(props) => (
                <Page {...props} type="page" />
              )} />
              <Route path={Config.blog.path+'/archive'} component={Arch} />
              <Route path={Config.blog.path+'/posts/:displayName'} component={PostPage} />
              <Route path={Config.blog.path+'/tags/:value'} render={(props) => (
                <Page {...props} type="tags" />
              )} />
              <Route path={Config.blog.path+'/categories/:value'} render={(props) => (
                <Page {...props} type="categories" />
              )} />
            </Switch>

          </Layout.Content>
        </Col>
      </Row>
      </Layout.Content>
  )
}

export default Blog;
