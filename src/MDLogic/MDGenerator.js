import React from 'react';
import ReactMarkdown from 'react-markdown';
class MDGenerator extends React.Component {
    state={mdtext:""}
    readMD=(path)=>{
        fetch(this.props.source)
            .then(response => {
                return response.text()
            })
            .then(text => {
                this.setState({mdtext:text})
            })
        }
        render=()=>{
            this.readMD(this.props.source)
        return <ReactMarkdown source={this.state.mdtext} escapeHtml={false} />
    }
}
export default MDGenerator