import React from 'react';
import './MenuIcons.css';
import { Link } from 'react-router-dom';

var MenuIcons = (props) => {
	return (
		<ul className="MenuIcons">
			<Link to="/d2">
				<li className="MenuIcons__startup">
					<img src="../../img/icon/startup.svg" />
				</li>
			</Link>

			<Link to="/">
				<li className="MenuIcons__people">
					<img src="../../img/icon/people.svg" />
				</li>
			</Link>
			
			<Link to="/">
				<li className="MenuIcons__find">
					<img src="../../img/icon/find.svg" />
				</li>
			</Link>
			<div className="MenuIcons__div_for_circle"></div>
			<div className="MenuIcons__div_for_shadow"></div>
		</ul>
	);
};

export default MenuIcons;