import React, { Component } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import BigBlank from './index.js';

var props = {
	err: 'awd',
	title: 'заголовок',
	fields_input: [
		{name: 'theme', text: "Тема стартапа", value: ''}, 
		{name: 'description', text: "Описание подробное", value: ''}
	],
	button_left: {
		link: "/mystartup/main",
		text: "отмена"
	},
	button_text: 'создать',
	submitForm: () => {},
	textareaChange: () => {}
}

it('base path, all include', () => {
	var component = renderer.create(
		<BrowserRouter>
			<BigBlank {...props} />
		</BrowserRouter>
	);
	expect(component.toJSON()).toMatchSnapshot();
})

it('without buttonLeft', () => {
	delete(props.button_left);
	var component = renderer.create(
		<BrowserRouter>
			<BigBlank {...props} />
		</BrowserRouter>
	);
	expect(component.toJSON()).toMatchSnapshot();
})

it('without buttonLeft && error', () => {
	delete(props.err);
	var component = renderer.create(
		<BrowserRouter>
			<BigBlank {...props} />
		</BrowserRouter>
	);
	expect(component.toJSON()).toMatchSnapshot();
})