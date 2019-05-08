import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import StartupCard from './index.js';


it("make snapshot ", ()=> {
	var more_info = {
		author_img: 'people.svg', 
		author_name: 'Вася Вася',
		need_people: [
			{
				position: 'программист JS',
				isFound: true
			},
			{
				position: 'маркетолог',
				isFound: false
			}
		]
	};
	var props = {
		title: 'title smth', 
		body: 'body text', 
		id: 21, 
		more_info: more_info
	};

	var elem = renderer.create(
		<BrowserRouter>
			<StartupCard {...props} />
		</BrowserRouter>
	);
	var tree = elem.toJSON();
	expect(tree).toMatchSnapshot();
});
