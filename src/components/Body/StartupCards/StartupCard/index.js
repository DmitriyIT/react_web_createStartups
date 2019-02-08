import React from 'react';
import './StartupCard.css';

var StartupCard = ({ title, body, id }) => {
	return (
		<div className="StartupCard">
			<div className="StartupCard__topLine"/>
			<div className="StartupCard__title"> {title} </div>
			<div className="StartupCard__body"> {body} </div>
			<div className="StartupCard__bottomLine"/>
			<img className="StartupCard__triangle" src="../../img/triangle.svg" />
			<div className="StartupCard__button">Просмотр</div>
		</div>
	);
};

export default StartupCard;