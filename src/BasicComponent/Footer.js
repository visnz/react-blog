import React from 'react';

class Footer extends React.Component {
    render = () => (

        <div style={{textAlign:"center"}}>
            <small>© 2017–2019 Visnz </small><br/>
            <small>Design by Visnz  |  Power by React</small><br/>
            <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                <img alt="創用 CC 授權條款" src={require("../assets/img/others/cc.png")} />
            </a>
        </div>
    )
}
export default Footer