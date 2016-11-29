import React from 'react';
import ReactDOM from 'react-dom';

class Sidebar extends React.Component {
    render(){
        return (
            <section id="sidebar">
			    <div className="inner">
					<nav>
						<ul>
							<li><a href="#intro">Welcome</a></li>
							<li><a href="#club">Club</a></li>
						</ul>
					</nav>
				</div>
			</section>
        )
    }
}

export default Sidebar;