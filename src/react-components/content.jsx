import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './welcome.jsx';
import Restaurant from './restaurant.jsx';

class Content extends React.Component {

    renderedRestaurants(){
        return this.props.restaurants.map((restaurant) => <Restaurant key={restaurant} data={restaurant} /> );
    }

    render(){
        return (
            <div id="wrapper">
                <Welcome/>
                {this.renderedRestaurants()}
            </div>
        )
    }
}

export default Content;