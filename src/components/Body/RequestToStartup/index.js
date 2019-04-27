import React, { Component } from 'react';
import './RequestToStartup.scss';

import RequestToStartup_xml from './RequestToStartup_xml.js';

class RequestToStartup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			err: '',
			button_text: 'Подать заявку',
			fields: [
				{name: 'theme', text: "Тема стартапа", value: ''},
				{name: 'authoe', text: "Автор", value: ''}
			],
			showAuth: false
		};
	}

	componentDidMount() {
		console.log(this.props.match.params.id)
	}

	submitForm = (event) => {
		event.preventDefault();
		var email
		
		fetch('/isAuth')
			.then(res => res.json())
			.then(data => {
				if (data) {
					window.lockation.assign('/RequestToStartup/' + this.props.match.params.id);
				} else {
					this.setState({showAuth: true});
				}
			})
			.catch(res => console.log('catch: ' + res));


		fetch("/", {
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
		.catch(res => console.log('catch: ' + res));
	}


	render() {
		return (
			<RequestToStartup_xml
				err={this.state.err} 
				submitForm={this.submitForm} 
				title="Подача заявки" 
				fields_input={this.state.fields} 
				button_text={this.state.button_text}
				textareaChange={this.textareaChange} />
		);
	}
}

export default RequestToStartup;