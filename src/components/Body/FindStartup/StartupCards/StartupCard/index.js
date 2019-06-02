import React from 'react';
import { Link } from 'react-router-dom';
import './StartupCard.scss';
import Startup__popup from './Startup__popup';

import PropTypes from 'prop-types';

var StartupCard = ({ title, body, id, more_info }) => {
	return (
		<div className="StartupCard">
			<div className="StartupCard__title"> {title} </div>
			<div className="StartupCard__body"> {body} </div>
			<div className="StartupCard__bottomLine"/>

			<img className="StartupCard__triangle" src="../../img/triangle.svg" />
			<Link to={"/showStartup/" + id}>
				<div className="StartupCard__button">Просмотр</div>
			</Link>
			<Startup__popup {...more_info} />
		</div>
	);
};

StartupCard.propTypes = {
	title: PropTypes.string.isRequired,
	body: PropTypes.string, 
	id: PropTypes.number,
	more_info: PropTypes.object
};
StartupCard.defaultProps = {
	title: "default title"
};

export default StartupCard;