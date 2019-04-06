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
		this.setState((state, props) => ({auth_show: !state.auth_show }));
	}

	onChangeEmail = (e) => {
		// console.log(this.refForm.current.email.value);
		var email = e.target.value;
		if (this.state.auth_show == false) {
			this.checkEmail(email);
		} else {
			this.setState({err: ''});
		}
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
			console.log(data.ans)
			if (data.ans) {
				this.setState({err: 'такой email уже используется'});
			} else {
				this.setState({err: ''});
			}
		})
		.catch(function(res){ console.log('catch' + res) });
	}

	refForm = React.createRef();

	submitForm = (e) => {
		e.preventDefault();
		var email = e.target.email.value;
		var password = e.target.password.value;

		if (this.state.auth_show) {
			// this.makeAuth('awdawd');
		} else {
			var password2 = e.target.password2.value;
			if (password === password2) {
				// this.makeReg('awdawd');
				console.log('awd')
				this.setState({err: ''});
				window.location.assign('/');
			} else {
				this.setState({err: 'повторно введенный пароль отличается'});
			}
		}
	}

	render() {
		return <AuthReg submitForm={this.submitForm} switch2={this.goSwitch} onChangeEmail={this.onChangeEmail} isSwitch={this.state.auth_show} err={this.state.err} />
	}
}

export default RegAuth;