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
			console.log(data.ans)
			data.ans ?
				this.setState({err: 'такой email уже используется'})
				: this.setState({err: ''});
		})
		.catch(res => console.log('catch' + res));
	}

	refForm = React.createRef();

	submitForm = (e) => {
		e.preventDefault();

		var email     = e.target.email.value,
			 password  = e.target.password.value;

		if (this.state.auth_show) {
			// Auth
			this.makeAuth(email, password);

		} else {
			// Registration
			var password2 = e.target.password2.value;
			if (password === password2) {
				this.makeReg(email, password);
				// this.setState({err: ''});
			} else {
				this.setState({err: 'повторно введенный пароль отличается'});
			}
		}
	}

	makeAuth = (email, password) => {
		fetch("/login", {
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
		    method: "POST",
		    body: JSON.stringify({ email: email, password: password})
		})
		.then((response) => response.json())
		.then((data) => {
			// var response={
			// 	code:int,
			// 	userData:{
			// 		name:"str",
			// 		surName:"str",
			// 		photo:"str",
			// 		description:"",
			// 		notifications:[],
			// 		myStartupId:int
			// 	}
			// }
			
			// console.log(data.code + ' userData.name: ' + data.userData.name);
			if (data) {
				window.location.assign('/');
			} else {
				this.setState({err: 'введен неверный email или пароль'});
			}
		})
		.catch(function(res){ console.log('catch' + res) });
	}

	makeReg = (email, password) => {
		fetch("/reg", {
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
		    method: "POST",
		    body: JSON.stringify({ email: email, password: password})
		})
		.then((response) => response.json())
		.then((data) => {
			// var response={
			// 	code:int,
			// 	userData:{
			// 		name:"str",
			// 		surName:"str",
			// 		photo:"str",
			// 		description:"",
			// 		notifications:[],
			// 		myStartupId:int
			// 	}
			// }
			
			// console.log(data.code + ' userData.name: ' + data.userData.name);
			if (data) {
				window.location.assign('/');
			} else {
				this.setState({err: 'ошибка сервера, приносим извинения'});
			}
		})
		.catch(function(res){ console.log('catch: ' + res) });
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