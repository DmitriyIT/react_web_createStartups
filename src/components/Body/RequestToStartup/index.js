import React, { Component } from 'react';
import './RequestToStartup.scss';

import RequestToStartup_xml from './RequestToStartup_xml.js';

class RequestToStartup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			err: '',
			happyResult: '',
			button_text: 'Подать заявку',
			fields: [
				{name: 'theme', text: "Тема стартапа", value: ''},
				{name: 'authoe', text: "Контакты автора стартапа", value: ''}
			],
			showAuth: false
		};
	}

	componentDidMount() {
		var id = this.props.match.params.id;
		fetch('/getInfoOfStartup/' + id)
			.then(res => res.json())
			.then(data => {
				var fields_res = this.state.fields;
				fields_res[0].value = data.theme;
				fields_res[1].value = data.contacts;

				this.setState({fields: fields_res});
			})
			.catch(res => console.log('catch: ' + res));
	}

	submitForm = (event) => {
		event.preventDefault();

		fetch("/sendInvite", {
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
		    method: "POST",
		    body: JSON.stringify({idStartup: this.props.match.params.id})
		})
		.then((response) => response.json())
		.then((data) => { 
			console.log(data.ans)
			data.ans ?
				this.setState({happyResult: 'заявка успешно отправлена', err: ''})
				: this.setState({err: 'приносим извинения, ошибка сервера'});
		})
		.catch(res => {
			this.setState({err: 'приносим извинения, ошибка сервера'});
			console.log('catch: ' + res)}
		);
	}


	render() {
		return (
			<RequestToStartup_xml
				err={this.state.err} 
				happyResult={this.state.happyResult}
				submitForm={this.submitForm} 
				title="Подача заявки" 
				fields_input={this.state.fields} 
				button_text={this.state.button_text}
				textareaChange={this.textareaChange} />
		);
	}
}

export default RequestToStartup;