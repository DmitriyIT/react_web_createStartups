import React from 'react';
import './StartupCard.scss';
import Startup__popup from './Startup__popup';

var StartupCard = ({ title, body, id, more_info }) => {
	return (
		<div className="StartupCard">
			<div className="StartupCard__title"> {title} </div>
			<div className="StartupCard__body"> {body} </div>
			<div className="StartupCard__bottomLine"/>

			<img className="StartupCard__triangle" src="../../img/triangle.svg" />
			<div className="StartupCard__button">Просмотр</div>
			<Startup__popup {...more_info} />
		</div>
	);
};

export default StartupCard;