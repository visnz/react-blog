import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./BasicComponent/Header"
import Footer from "./BasicComponent/Footer"
import Position from "./BasicComponent/Position"
import Blog from './Blog';
// import MDdata from './MDLogic/MDdata';
import { BrowserRouter , Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import ImageBoard from "./BasicComponent/ImageBoard"
import Config from "./config"

import { BackTop } from 'antd';

ReactDOM.render((
    // <Layout>
    // <Layout.Header style={{ height: "100%", }}>
    //   <Position />
    //   <Header ></Header>
    // </Layout.Header >

    <BrowserRouter>
        <Route path="/" component={Position}/>
        <Route path="/" component={Header}/>
        <Route exact path='/' component={ImageBoard} />
        <Route path={Config.blog.path+'/'} component={Blog}>
        </Route>
        <Route path="/" component={BackTop}/>
        <Route path="/" component={Footer}/>
    </BrowserRouter>
    
    // <Layout.Footer >
    //     <Footer />
    //   </Layout.Footer>
    // </Layout> 
  ), document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
