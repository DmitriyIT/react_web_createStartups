import React from 'react';
import { Link } from 'react-router-dom';
import './StartupMain.scss';


var StartupMain_xml = ({ title, description }) => {

	return (
		<div className="MyStartupTop">
			<div className="MyStartupTop__title">{title}</div>
			<div className="MyStartupTop__description">{description}</div>

			<Link to='/mystartup/main'>
				<div className="MyStartupTop__switchButton">Чат</div>
			</Link>
			
			<Link to='/mystartup/main/members'>
				<div className="MyStartupTop__switchButton">Участники</div>
			</Link>
			
			<Link to='/mystartup/main/invites'>
				<div className="MyStartupTop__switchButton">Заявки</div>
			</Link>

			<div className="MyStartupTop__rightButton">Редактировать</div>
		</div>
	);
}
export default StartupMain_xml;