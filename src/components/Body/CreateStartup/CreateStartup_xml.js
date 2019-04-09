import React, { Component } from 'react';
import './CreateStartup.scss';

function CreateStartup_xml({ err, refForm, submitForm, title, fields_title, button_text }) {
	var fields = fields_title.map(e => [
		<div className="CreateStartup__titleField">{e.text}</div>,
		<textarea className="CreateStartup__field" name={e.name} />
	]);
	return (
		<div className="CreateStartup">
			<div className="CreateStartup__title">{title}</div>
			{ err ? <div className="CreateStartup_err">{err}</div> : ''}
			<form onSubmit={submitForm} id="createStartup">
				{fields}
			</form>
			<input type="submit" form="createStartup" className="CreateStartup__button" value={button_text} />
		</div>
	)
}

export default CreateStartup_xml;