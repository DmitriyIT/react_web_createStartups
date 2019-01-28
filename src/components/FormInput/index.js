import React, {Component} from 'react';
import './FormInput.css';

class FormInput extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			inpName: props.name,
			isValidName: this.isValidName(props.name)
		}
	}

	getRef = (node) => { this.elRef = node; }

	isValidName = (str) => { return str.length > 2; }

	change_inpName = (e) => {
		let val = e.target.value;
		this.setState({
			inpName: val,
			isValidName: this.isValidName(val)
		});
		console.log(this.elRef.value);
	}

	submitForm = (e) => {
		e.preventDefault();
		console.log('is submit /n');
	}

	render() {
		var nameValid = this.state.isValidName ? "FormInput__inputName_valid_yes" : "FormInput__inputName_valid_no";
			return (
			<form onSubmit={this.submitForm}>
				<input />
				<input type="text" ref={this.getRef} name="" value={this.state.inpName} onChange={this.change_inpName} className={nameValid} />
				<input type="submit" value='Отправить' />
			</form>
		);
	}
}

export default FormInput;