import React, { Component } from 'react';
import './Chat.scss';

import Chat_xml from './Chat_xml.js';
import Message from './Message';


class Chat extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userData: props.userData,
			text_msg: '',
			messages: [],
			idFMsg: 0,
			idLMsg: 0,
			moreHistoryExists: true,
			flagOfEndDownloadHistory: true,
			positionBottom: true
		};
	}

	addNewMsgs() {
		fetch('/getNewMsgs', {
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
		    method: "POST",
		    body: JSON.stringify({
		    	idLMsg: this.state.idLMsg
		    })
		})
		.then(response => response.json())
		.then(data => {
			this.setState((prevState, props) => {
				var newMsgs =  prevState.messages.concat(data.msgs);
				return {
					messages: newMsgs,
					idLMsg: data.idLMsg
				}	
			}, () => {if (this.state.positionBottom) this.scrollBottom()})
		});		
	}

	addHistoryMsgs() {
		var scrollTop_before = this._refScrollEl.scrollTop;
		var scrollHeight_before = this._refScrollEl.scrollHeight;

		fetch('/getHistoryMsgs', {
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
		    method: "POST",
		    body: JSON.stringify({
		    	idFMsg: this.state.idFMsg
		    })
		})
		.then(response => response.json())
		.then(data => {
			this.setState((prevState, props) => {
				var newMsgs = data.msgs.concat(prevState.messages);
				return {
					messages: newMsgs,
					idFMsg: data.idFMsg,
					moreHistoryExists: data.moreHistoryExists,
					flagOfEndDownloadHistory: true
				}	
			}, () => {
				// Change ScrollTop
				var scrollHeight_new = this._refScrollEl.scrollHeight;
				var difference = scrollHeight_new - scrollHeight_before;
				var scrollTop_new = scrollTop_before + difference;
				this._refScrollEl.scrollTop = scrollTop_new;
			});
		});
	}

	componentDidMount() {
		this.interval = setInterval(() => this.addNewMsgs(), 10500);
		fetch('/getMsgs')
			.then(response => response.json())
			.then(data => this.setState({
				messages: data.msgs,
				idFMsg: data.idFMsg,
				idLMsg: data.idLMsg,
				moreHistoryExists: data.moreHistoryExists
			}, () => {
				this.scrollBottom();
			}));
	}
	componentWillUnmount() {
		clearInterval(this.interval);
	}
	componentWillUpdate() {
		// console.log(' will update ');
	}
	

	inputMsgChange = (e) => { this.setState({ text_msg: e.target.value }); }
	
	onSubmit = (e) => {
		e.preventDefault();

		// Create msg_obj
		var new_msg = {
			author_icon_path: this.state.userData.photo,
			author_name: this.state.userData.name + ' ' + this.state.userData.surName,
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
			var callMsg = ' in callback ';
		}, () => { this.scrollBottom()});
	}

	sendMsg(msg_obj) {
		fetch("/sendMsg", {
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
		    method: "POST",
		    body: JSON.stringify({
		    	time: msg_obj.time,
		    	text: msg_obj.text
		    })
		})
		.then((response) => response.json())
		.then((data) => {
			this.setState({idLMsg: data.idLMsg})
		})
		.catch(function(res){ console.log('catch' + res) });
	}

	handleScroll = (e) => {
		if (e.target.scrollTop < 70) {
			if (this.state.flagOfEndDownloadHistory) {
				console.log('run add history');
				// run + flag of wait
				if (this.state.moreHistoryExists) {
					this.setState({
						flagOfEndDownloadHistory: false
					}, () => this.addHistoryMsgs());
				}
			}
		}
		var toBottomDistance = e.target.scrollHeight - (e.target.scrollTop + e.target.offsetHeight);
		if (toBottomDistance < 50) {
			this.setState({positionBottom: true});
			// run scrollBottom when added msgs
			console.log('bottom position ' + toBottomDistance);
		} else {
			this.setState({positionBottom: false});
		}
	}

	refScrollEl = (e) => {this._refScrollEl = e;}
	scrollBottom = () => {
		this._refScrollEl.scrollTop = (this._refScrollEl.scrollHeight + 150);
	}

	render() {
		var msgs = this.state.messages.map(e => (<Message {...e} key={e.time} />));
		return (
			<Chat_xml 
				onSubmit={this.onSubmit} 
				inputMsgChange={this.inputMsgChange} 
				text_msg={this.state.text_msg}
				handleScroll={this.handleScroll}
				refScrollEl={this.refScrollEl}
			>
				{msgs}
			</Chat_xml>
		);
	}
}


export default Chat;
