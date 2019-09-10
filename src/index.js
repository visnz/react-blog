import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import MDdata from './MDLogic/MDdata';
import { BrowserRouter , Route,IndexRoute } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import DisplayCard from "./BasicComponent/DisplayCard.js"
import AllMDData from "./posts/MDdata.timeline"
// ReactDOM.render((
//     <BrowserRouter>
//         <Route path="/" component={App}>
//         <IndexRoute component={} />
//         {/* <Route path="about" component={About} />
//         <Route path="inbox" component={Inbox}>
//             <Route path="messages/:id" component={Message} />
//         </Route> */}
//         </Route>
//     </BrowserRouter>
//   ), document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
