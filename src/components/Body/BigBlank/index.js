import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BigBlank.scss';

import AnimateCreate from '../AnimateCreate.js';

function BigBlank({ err, title, fields_input, button_left, button_left2, button_text, submitForm, textareaChange }) {
	
	var fields = fields_input.map(e => [
		<div className="BigBlank__titleField">{e.text}</div>,
		<textarea className="BigBlank__field" name={e.name} value={e.value} onChange={textareaChange} />
	]);
	return (
		<div className="BigBlank">
			<div className="BigBlank__title">{title}</div>
			{ err ? <div className="BigBlank_err">{err}</div> : ''}
			<AnimateCreate>
			<form onSubmit={submitForm} id="BigBlank">
				{fields}
			</form>
			</AnimateCreate>

			<input type="submit" form="BigBlank" className="BigBlank__button" value={button_text} />
			
			{button_left2 ? (
				<Link to={button_left2.link}>
					<div className="BigBlank__button"> {button_left2.text} </div>
				</Link>
			) : ''}

			{button_left ? (
				<Link to={button_left.link}>
					<div className="BigBlank__button"> {button_left.text} </div>
				</Link>
			) : ''}
		</div>
	)
}

export default BigBlank;