import React from 'react';
import Sidebar from './sidebar.jsx';
import Content from './content.jsx';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {restaurants : []};
    }

    loadRestaurants(){
        this.setState({restaurants: ['maki', 'fagyi', 'mari']});
    }

    componentDidMount(){
        setTimeout(() => this.loadRestaurants(), 10000);
    }

    render(){
        return (
            <div>
                <Sidebar/>
                <Content restaurants={this.state.restaurants} />
            </div>
        );
    }
}

export default App;