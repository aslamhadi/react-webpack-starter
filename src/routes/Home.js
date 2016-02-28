import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {
	render(){
		return (
			<div className="page-title">
				<h3 style={{color: 'orange'}}>Hurray from react!</h3>
				<Link to="about">Go to about page</Link>
			</div>
		)
	}
}

export default Home;
