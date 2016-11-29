import React from 'react';
import ReactDOM from 'react-dom';
import Name from './name.jsx';

class Hello extends React.Component {

    constructor(){
        super();
        this.names = ['a','b','c'].map((name) => {
            return <Name key={name} name={name} />;
        });
    }
    
    render(){
        return (
            <div>
                <h1>Hello</h1>
                {this.names}
            </div>
        );
    }
}

ReactDOM.render(<Hello/>, document.getElementById('hello'));