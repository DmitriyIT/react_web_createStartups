import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './ChangeStartup.scss';

import BigBlank from '../BigBlank';

class ChangeStartup extends Component {
	constructor(props) {
		super(props);
		var isAdmin = this.props.match.params.admin === 'admin' ;

		var textField = isAdmin ? 'Вы действиетльно хотите удалить стартап? Все участники будут исключены.'
			: 'Вы действиетльно хотите выйти из стартапа?';
		var buttonText = isAdmin ? 'Удалить стартап' : 'Выйти из стартапа';

		this.state = {
			err: '',
			button_text: buttonText,
			fields: [
				{name: 'theme', text: "", value: textField}
			],
			redirectToMain: false
		};
	}

	componentDidMount() {
	}

	submitForm = (event) => {
		event.preventDefault();
		fetch('/exitFromStartup')
			.then(() => {this.setState({redirectToMain: true})});
	}


	render() {
		if (this.state.redirectToMain) return <Redirect to='/mystartup/main' />;

		var isAdmin = this.props.match.params.admin === 'admin';
		return (
			<BigBlank
				err={this.state.err}
				title={isAdmin ? "Удаление стратапа" : "Покинуть стартап"}
				fields_input={this.state.fields}
				button_left={{
					link: "/mystartup/main",
					text: "отмена"
				}}
				button_text={this.state.button_text}
				submitForm={this.submitForm}
				textareaChange={this.textareaChange} />
		);
	}
}

export default ChangeStartup;
