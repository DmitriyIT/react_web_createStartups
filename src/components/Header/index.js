import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

var Header = () => {
	return (
		<div className="Header">
			<div className="Container">
				<p className="Header__title"> 
					<Link to="/">
						На Старт 
					</Link>
				</p>
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