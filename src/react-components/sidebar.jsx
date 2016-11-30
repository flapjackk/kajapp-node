import React from 'react';
import ReactDOM from 'react-dom';

class Sidebar extends React.Component {
    
	renderedSidebarItems(){
		return this.props.items.map((item) => 
			<SidebarItem key={item} name={item} />
		);
	}
	
	render(){
        return (
            <section id="sidebar">
			    <div className="inner">
					<nav>
						<ul>
							<li><a href="#intro">Welcome</a></li>
							{this.renderedSidebarItems()}
						</ul>
					</nav>
				</div>
			</section>
        )
    }
}

class SidebarItem extends React.Component {
	render(){
		return <li><a href={'#' + this.props.name}>{this.props.name}</a></li>
	}
}

export default Sidebar;