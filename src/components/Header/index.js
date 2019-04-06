import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

var Header = () => {
	return (
		<div className="Header">
			<div className="Container">
				<p className="Header__title"> На Старт </p>
				<div className="Header__button_exit">
					<Link to="/RegAuth">
						<img src="../../img/icon/exit.svg" />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Header;