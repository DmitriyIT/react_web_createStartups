import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './ChangeStartup.scss';

import BigBlank from '../BigBlank';

class ChangeStartup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			err: '',
			button_text: 'Сохранить изменения',
			fields: [
				{name: 'theme', text: "Тема стартапа", value: ''},
				{name: 'description', text: "Описание подробное", value: ''},
				{name: 'shortDescr', text: "Описание краткое (отображается при поиске на карточке)", value: ''},
				{name: 'peopleNeeded', text: "Нужные люди", value: ''},
				{name: 'contacts', text: "Ваши контакты (отображаются при подаче заявки в стартап: желающие смогут с вами связаться)", value: ''}
			],
			redirectToMain: false
		};
	}

	componentDidMount() {
		fetch('/getInfoOfStartup')
			.then(response => response.json())
			.then(data => {
				if (data) {
					var fields_res = this.state.fields;
					data.forEach( (e, index) => {
						fields_res[index].value = e.value;
					})

					this.setState({
						fields: fields_res,
						fields_startState: fields_res
					});
				} else {
					// this.setState({err: ''});
				}
			});
	}

	textareaChange = (event) => {
		var new_fields = this.state.fields.map((elem) => {
			if (elem.name == event.target.name) elem.value = event.target.value;
			return elem;
		});
		this.setState({fields: new_fields});
	}

	submitForm = (event) => {
		event.preventDefault();
		var input_obj     = {},
			flag          = false;

		// Get obj of form values
		this.state.fields.forEach( ({ name, text }) => {
			if (!event.target[name].value && !flag) {
				flag = text;
			}
			input_obj[name] = event.target[name].value;
		});

		// Valid of empty lines
		if (flag) {
			var err = 'поле \"' + flag + '\" не заполнено';
			this.setState({err: err});
		} else {
			// Move changes startup
			console.log('yes')
			this.setState({err: '', button_text: 'Созраняется'});
			this.ChangeStartup(input_obj);
		}
	}

	ChangeStartup = (data) => {
		fetch("/ChangeStartup", {
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
		    method: "POST",
		    body: JSON.stringify(data)
		})
		.then((response) => response.json())
		.then((data) => { 
			// Answer from serv actions
			if (data.ans) { // happy path
				this.setState({
					err: '',
					redirectToMain: true
				});
				// window.location.assign('/mystartup/main');
			} else { // smth broke
				this.setState({err: 'приносим извинения, произошла ошибка на сервере'});
			}
		})
		.catch(res => console.log('catch ' + res));
	}

	render() {
		if (this.state.redirectToMain) return <Redirect to='/mystartup/main' />;

		return (
			<BigBlank 
				err={this.state.err} 
				title="Редактировать стартап" 
				fields_input={this.state.fields} 
				button_left={{
					link: "/mystartup/main",
					text: "отмена"
				}}
				button_left2={{
					link: "/mystartup/exit/admin",
					text: "удалить стартап"
				}}
				button_text={this.state.button_text}
				submitForm={this.submitForm} 
				textareaChange={this.textareaChange} />
		);
	}
}

export default ChangeStartup;