import React from 'react';
import ReactDOM from 'react-dom';

class Content extends React.Component {
    render(){
        return (
            <div id="wrapper">

					<section id="intro" className="wrapper style1 fullscreen fade-up">
						<div className="inner">
							<h1>Kajapp</h1>
							<p id="welcome_message">Welcome  react</p>
							<ul className="actions">
								<li><a href="#club" className="button scrolly">Browse</a></li>
							</ul>
						</div>
					</section>

					<section id="club" className="wrapper style2 fade-up">
            <div className="inner">
              <h2>Club</h2>
                <div id="club_holder"></div>
                <div id="hello"></div>
                <ul className="actions">
                  <li><a href="#" className="button">Go!</a></li>
                  <li><a href="#kantin" className="button scrolly">Next</a></li>
                </ul>
            </div>	
					</section>
      </div>
        )
    }
}

export default Content;