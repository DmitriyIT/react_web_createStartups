import React from 'react';
import './StartupCards.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import StartupCard from './StartupCard';


var StartupCards = ({ startups }) => {
	var more_info = {
		author_img: 'people.svg', 
		author_name: 'Вася Вася',
		need_people: [
			{
				possition: 'программист JS',
				isFound: true
			}
		]
	};
	startups = startups || [{title: 'default value', body: 'smth is wrong', id: 3, more_info: more_info}];
	var arr_sts = startups.map((item) => (
			<CSSTransition 
				key={item.id}
				timeout={500}
				classNames="Startup_animation"
			>
				<StartupCard {...item} key={item.id} />
			</CSSTransition>
		)
	);

	return (
		<TransitionGroup component={null}>
			{arr_sts}
		</TransitionGroup>
	);
};

export default StartupCards;