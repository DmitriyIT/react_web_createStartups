import React, { Component } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import RegAuth from './index.js';

var props = {
	linkHappyPath: '/profile',
	comment: 'чтобы войти в профиль нужно зарегистрироваться'
}

it('base path, all include', () => {
	var component = renderer.create(
		<BrowserRouter>
			<RegAuth {...props} />
		</BrowserRouter>
	);
	expect(component.toJSON()).toMatchSnapshot();
})

it('without comment', () => {
	delete(props.comment);
	var component = renderer.create(
		<BrowserRouter>
			<RegAuth {...props} />
		</BrowserRouter>
	);
	expect(component.toJSON()).toMatchSnapshot();
})
