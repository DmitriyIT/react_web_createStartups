import React from 'react';
import './StartupCards.css';

import StartupCard from './StartupCard';


var StartupCards = ({ startups }) => {
	startups = startups || [{title: 'default value', body: 'smth is wrong', id: 3}];
	return startups.map((item) => <StartupCard {...item} key={item.id} />);
};

export default StartupCards;