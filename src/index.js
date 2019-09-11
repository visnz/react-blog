import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./BasicComponent/Header"
import Footer from "./BasicComponent/Footer"
import Position from "./BasicComponent/Position"
import { Layout, } from 'antd';
import Blog from './Blog';
// import MDdata from './MDLogic/MDdata';
import { BrowserRouter , Route,IndexRoute } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import DisplayCard from "./BasicComponent/DisplayCard.js"
import AllMDData from "./posts/MDdata.timeline"
import Page from './BasicComponent/Page';


ReactDOM.render((
    // <Layout>
    // <Layout.Header style={{ height: "100%", }}>
    //   <Position />
    //   <Header ></Header>
    // </Layout.Header >

    <BrowserRouter>
        <Route path="/" component={Position}/>
        <Route path="/" component={Header}/>
        <Route path="/blog/" component={Blog}>
        {/* <Route path="/CDN" component={Blog}> */}
        {/* <Route path="about" component={About} />
        <Route path="inbox" component={Inbox}>
            <Route path="messages/:id" component={Message} />
        </Route> */}
        </Route>
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
serviceWorker.unregister();
