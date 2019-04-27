import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ChangeStartup.scss';

function CreateStartup_xml({ err, refForm, submitForm, title, fields_input, button_text, textareaChange }) {
	var fields = fields_input.map(e => [
		<div className="CreateStartup__titleField">{e.text}</div>,
		<textarea className="CreateStartup__field" name={e.name} value={e.value} onChange={textareaChange} />
	]);
	return (
		<div className="CreateStartup">
			<div className="CreateStartup__title">{title}</div>
			{ err ? <div className="CreateStartup_err">{err}</div> : ''}
			<form onSubmit={submitForm} id="createStartup">
				{fields}
			</form>
			<input type="submit" form="createStartup" className="CreateStartup__button" value={button_text} />
			<Link to="/mystartup/main">
				<div className="CreateStartup__button"> Отмена </div>
			</Link>
		</div>
	)
}

export default CreateStartup_xml;