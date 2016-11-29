import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './sidebar.jsx';
import Content from './content.jsx';

class App extends React.Component {
    render(){
        return (
            <div>
                <Sidebar/>
                <Content/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));