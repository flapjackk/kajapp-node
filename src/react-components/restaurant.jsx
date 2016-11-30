import React from 'react';
import ReactDOM from 'react-dom';

class Restaurant extends React.Component {
    render(){
        return (
            <section id="club" className="wrapper style2 fade-up">
                <div className="inner">
                <h2>{this.props.data}</h2>
                    <div id="club_holder"></div>
                    <div id="hello"></div>
                    <ul className="actions">
                    <li><a href="#" className="button">Go!</a></li>
                    <li><a href="#kantin" className="button scrolly">Next</a></li>
                    </ul>
                </div>	
            </section>
        )
    }
}

export default Restaurant;