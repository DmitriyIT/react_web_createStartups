import React, { Component, Fragment } from 'react';
import './Join.css';

import Header from './Header';
import Footer from './Footer';
import Body from './Body';


class Join extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<Body />
				<Footer />
			</Fragment>
		);
	}
}

export default Join;