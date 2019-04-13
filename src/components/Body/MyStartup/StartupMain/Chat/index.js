import React, { Component } from 'react';
import './Chat.scss';

import Chat_xml from './Chat_xml.js';

class Chat extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text_msg: '',
			messages: []
		};
	}

	getMsg() {
		fetch('/getMsgs')
			.then(response => response.json())
			.then(data => this.setState({messages: data}));
	}
	componentDidMount() {
		this.interval = setInterval(() => this.getMsg(), 2500);
		this.getMsg();
	}
	componentWillUnmount() {
		clearInterval(this.interval);
	}
	

	inputMsgChange = (e) => { this.setState({ text_msg: e.target.value }); }
	
	onSubmit = (e) => {
		e.preventDefault();

		// Create msg_obj
		var new_msg = {
			author_icon_path: '../../img/icon/vasia.jpg',
			author_name: 'Вася Васькин',
			time: Date.now(),
			text: this.state.text_msg
		};
		
		// Send to server
		this.sendMsg(new_msg);

		// Show changes in chat
		this.setState((prevState, props) => {
			prevState.messages.push(new_msg);
			return {
				text_msg: '',
				messages: prevState.messages
			};
		});
	}

	sendMsg(msg_obj) {
		fetch("/sendMsg", {
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
		    method: "POST",
		    body: JSON.stringify(msg_obj)
		})
		.then((response) => response.json())
		.then((data) => {
			console.log(data.ans);
		})
		.catch(function(res){ console.log('catch' + res) });
	}

	render() {
		return <Chat_xml 
			messages={this.state.messages} 
			onSubmit={this.onSubmit} 
			inputMsgChange={this.inputMsgChange} 
			text_msg={this.state.text_msg} />;
	}
}


export default Chat;
