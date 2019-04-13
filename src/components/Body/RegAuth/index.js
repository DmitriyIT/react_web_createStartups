import React, { Component } from 'react';
import './RegAuth.scss';

import AuthReg from './AuthReg.js';

class RegAuth extends Component {
	constructor(props) {
		super(props);
		this.state = {
			auth_show: true,
			err: ''
		};
	}

	goSwitch = () => {
		this.setState((state, props) => ({
			auth_show: !state.auth_show 
		}));
	}

	onChangeEmail = (e) => {
		var email = e.target.value;
		
		(this.state.auth_show == false) ? 
			this.checkEmail(email)
			: this.setState({err: ''});

		this.setState({email: email});
	}

	checkEmail = (email) => {
		fetch("/checkEmail", {
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
		    method: "POST",
		    body: JSON.stringify({email: email})
		})
		.then((response) => response.json())
		.then((data) => { 

			// Response data
			console.log(data.ans)
			data.ans ?
				this.setState({err: 'такой email уже используется'})
				: this.setState({err: ''});
		})
		.catch(
			// Error
			res => console.log('catch' + res));
	}

	refForm = React.createRef();

	submitForm = (e) => {
		e.preventDefault();

		var email     = e.target.email.value,
			 password  = e.target.password.value;

		if (this.state.auth_show) {
			// Auth
			// this.makeAuth('awdawd');
		} else {

			// Registration
			var password2 = e.target.password2.value;
			if (password === password2) {
				// this.makeReg('awdawd');
				this.setState({err: ''});
				window.location.assign('/');
			} else {
				this.setState({err: 'повторно введенный пароль отличается'});
			}
		}
	}

	render() {
		return (
			<AuthReg 
				submitForm={this.submitForm} 
				switch2={this.goSwitch} 
				onChangeEmail={this.onChangeEmail} 
				isSwitch={this.state.auth_show} 
				err={this.state.err} />
		);
	}
}

export default RegAuth;