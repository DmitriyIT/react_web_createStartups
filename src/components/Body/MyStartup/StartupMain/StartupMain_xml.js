import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './StartupMain.scss';


var StartupMain_xml = ({ title, description }) => {

	return (
		<div className="MyStartupTop">
			<div className="MyStartupTop__title">{title}</div>
			<div className="MyStartupTop__description">{description}</div>

			<NavLink exact to='/mystartup/main' activeClassName="MyStartupTop__link_active">
				<div className="MyStartupTop__switchButton">Чат</div>
			</NavLink>
			
			<NavLink to='/mystartup/main/members' activeClassName="MyStartupTop__link_active">
				<div className="MyStartupTop__switchButton">Участники</div>
			</NavLink>
			
			<NavLink to='/mystartup/main/invites' activeClassName="MyStartupTop__link_active">
				<div className="MyStartupTop__switchButton">Заявки</div>
			</NavLink>

			<Link to='/mystartup/change'>
				<div className="MyStartupTop__rightButton">Редактировать</div>
			</Link>
		</div>
	);
}
export default StartupMain_xml;