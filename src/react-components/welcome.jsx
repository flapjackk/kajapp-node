import React from 'react';
import ReactDOM from 'react-dom';

class Welcome extends React.Component {
    render(){
        return (
            <section id="intro" className="wrapper style1 fullscreen fade-up">
                <div className="inner">
                    <h1>Kajapp</h1>
                    <p id="welcome_message">Welcome react</p>
                    <ul className="actions">
                        <li><a href="#club" className="button scrolly">Browse</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Welcome;