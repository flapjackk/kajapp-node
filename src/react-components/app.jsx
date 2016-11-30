import React from 'react';
import Sidebar from './sidebar.jsx';
import Content from './content.jsx';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {restaurants : []};
    }

    loadRestaurants(){
        this.setState({restaurants: ['Club', 'Veranda', 'Kantin','Intenzo']});
        setTimeout(() => {
            document.body.classList.remove('is-loading');
        },100);
        
    }

    componentDidMount(){
        setTimeout(() => {
            this.loadRestaurants()
        },500);
    }

    render(){
        return (
            <div>
                <Sidebar items={this.state.restaurants} />
                <Content restaurants={this.state.restaurants} />
            </div>
        );
    }
}

export default App;