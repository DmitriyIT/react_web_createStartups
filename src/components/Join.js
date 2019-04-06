import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './Join.css';

import Header from './Header';
import Footer from './Footer';
import Body from './Body';


class Join extends Component {
	render() {
		return (
			<BrowserRouter>
				<Fragment>
					<Header />
					<Body />
					<Footer />
				</Fragment>
			</BrowserRouter>
		);
	}
}

export default Join;