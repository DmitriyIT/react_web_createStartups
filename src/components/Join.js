import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './Join.css';

import Header from './Header';
import Footer from './Footer';
import Body from './Body';


class Join extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userData: {
				name:"",
				surName:"No Auth",
				photo:"../../img/icon/noname_user.png",
				description:""
			}
		}
	}
	logout = () => {
		fetch('/logout')
			.then((res) => {
				this.setState({
					userData: {
						name:"",
						surName:"No Auth",
						photo:"../../img/icon/noname_user.png",
						description:""
					}
				})
			});
	}
	login = (userData) => {
		this.setState({userData: userData});
	}
	updateUserInfo = (userData) => {
		this.setState({userData: userData})
	}

	render() {
		return (
			<BrowserRouter>
				<Fragment>
					<Header logout={this.logout} {...this.state.userData} />
					<Body login={this.login} {...this.state.userData} updateUserInfo={this.updateUserInfo} />
					<Footer />
				</Fragment>
			</BrowserRouter>
		);
	}
}

export default Join;