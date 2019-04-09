import React, { Component } from 'react';
import './CreateStartup.scss';

import CreateStartup_xml from './CreateStartup_xml.js';

class CreateStartup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			err: '',
			button_text: 'Создать'
		};
		this.fields = [
			{name: 'theme', text: "Тема стартапа"},
			{name: 'description', text: "Описание подробное"},
			{name: 'shortDescr', text: "Описание краткое (отображается при поиске на карточке)"},
			{name: 'peopleNeeded', text: "Нужные люди"},
			{name: 'contacts', text: "Ваши контакты (отображаются при подаче заявки в стартап: желающие смогут с вами связаться)"}
		];
	}

	submitForm = (event) => {
		event.preventDefault();
		var input_obj = {};
		var flag = false;

		this.fields.forEach( ({ name, text }) => {
			if (!event.target[name].value && !flag) {
				flag = text;
			}
			input_obj[name] = event.target[name].value;
		});

		if (flag) {
			var err = 'поле \"' + flag + '\" не заполнено';
			this.setState({err: err});
		} else {
			this.setState({err: '', button_text: 'Создается'});
			this.createStartup(input_obj);
		}
	}

	createStartup = (data) => {
		fetch("/createstartup", {
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
		    method: "POST",
		    body: JSON.stringify(data)
		})
		.then((response) => response.json())
		.then((data) => { // Answer from serv actions
			if (data.code) { // happy path
				this.setState({err: ''});
				window.location.assign('/mystartup');
			} else { // smth broke
				this.setState({err: 'приносим извинения, произошла ошибка на сервере'});
			}
		})
		.catch(function(res){ console.log('catch ' + res) });
	}

	render() {
		return <CreateStartup_xml err={this.state.err} submitForm={this.submitForm} title="Создать стартап" fields_title={this.fields} button_text={this.state.button_text} />
	}
}

export default CreateStartup;