import React, { Component } from 'react';
import './ShowStartup.scss';

// import ShowStartup_xml from './ShowStartup_xml.js';
import RegAuth from '../RegAuth/';
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
		var id = this.props.match.params.id;
		fetch('/getInfoOfStartup/' + id)
			.then(res => res.json())
			.then(data => {
				var fields_res = this.state.fields;
				for (var i = 0; i < fields_res.length; i++) {
					fields_res[i].value = data[fields_res[i].name];
				}

				this.setState({fields: fields_res});
			})
			.catch(res => console.log('catch: ' + res));
	}

	submitForm = (event) => {
		event.preventDefault();
		var id = this.props.match.params.id;
		var email;
		fetch('/isAuth/' + id)
			.then(res => res.json())
			.then(data => {
				if (data.isAuth) {
					if (data.admin) {
						this.setState({err: 'вы являетесь атором этого стартапа, вы уже в нем'});
					} else {
						window.lockation.assign('/RequestToStartup/' + this.props.match.params.id);
					}
				} else {
					this.setState({showAuth: true});
				}
			})
			.catch(res => console.log('catch: ' + res));
	}


	render() {
		return this.state.showAuth ? 
			<RegAuth 
				linkHappyPath={'/RequestToStartup/' + this.props.match.params.id}
				comment='для подачи заявки нужно авторизоваться/зарегистрироваться' />
			: <BigBlank
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
	}
}

export default ShowStartup;