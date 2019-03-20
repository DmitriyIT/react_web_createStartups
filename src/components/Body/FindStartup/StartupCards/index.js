import React from 'react';
import './StartupCards.css';

import StartupCard from './StartupCard';


var StartupCards = ({ startups }) => {
	var more_info = {
		author_img: 'people.svg', 
		author_name: 'Вася Вася',
		need_people: [
			{
				position: 'программист JS',
				isFound: true
			}
		]
	};
	startups = startups || [{title: 'default value', body: 'smth is wrong', id: 3, more_info: more_info}];
	return startups.map((item) => <StartupCard {...item} key={item.id} />);
};

export default StartupCards;