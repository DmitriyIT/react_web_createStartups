import React, { Component } from 'react';
import './ShowStartup.scss';

import ShowStartup_xml from './ShowStartup_xml.js';
import BigBlank from '../BigBlank';

class ShowStartup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			err: '',
			button_text: 'Подать заявку',
			fields: [
				{name: 'theme', text: "Тема стартапа", value: ''},
				{name: 'description', text: "Описание подробное", value: ''},
				{name: 'shortDescr', text: "Описание краткое (отображается при поиске на карточке)", value: ''},
				{name: 'peopleNeeded', text: "Нужные люди", value: ''}
			],
			showAuth: false
		};
	}

	componentDidMount() {
		console.log(this.props.match.params.id);
		fetch('/getInfoOfStartup1')
			.then(res => res.json())
			.then(data => {
				var fields_res = this.state.fields;
				for (var i = 0; i < fields_res.length; i++) {
					fields_res[i].value = data[fields_res[i].name];
				}

				this.setState({fields_res});
			})
			.catch(res => console.log('catch: ' + res));
	}

	submitForm = (event) => {
		event.preventDefault();
		var email;
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
			<BigBlank 
				err={this.state.err} 
				title="Просмотр стартапа" 
				fields_input={this.state.fields} 
				button_left={{
					link: "/",
					text: "отмена"
				}}
				button_text={this.state.button_text}
				submitForm={this.submitForm} 
				textareaChange={this.textareaChange} />
		);
		// return (
		// 	<ShowStartup_xml
		// 		err={this.state.err} 
		// 		submitForm={this.submitForm} 
		// 		title="Просмотр стартапа" 
		// 		fields_input={this.state.fields} 
		// 		button_text={this.state.button_text}
		// 		textareaChange={this.textareaChange} />
		// );
	}
}

export default ShowStartup;