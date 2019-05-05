import React from 'react';
import './MenuIcons.scss';
import { Link, NavLink } from 'react-router-dom';

var MenuIcons = (props) => {
	return (
		<ul className="MenuIcons">
			<NavLink to="/mystartup/main" activeClassName="activeMenuLink">
				<li className="MenuIcons__startup">
					<img src="../../img/icon/startup.svg" />
				</li>
			</NavLink>

			<NavLink to="/profile" activeClassName="activeMenuLink">
				<li className="MenuIcons__people">
					<img src="../../img/icon/people.svg" />
				</li>
			</NavLink>
			
			<NavLink exact to="/" activeClassName="activeMenuLink">
				<li className="MenuIcons__find">
					<img src="../../img/icon/find.svg" />
				</li>
			</NavLink>
			<div className="MenuIcons__div_for_circle"></div>
			<div className="MenuIcons__div_for_shadow"></div>
		</ul>
	);
};

export default MenuIcons;