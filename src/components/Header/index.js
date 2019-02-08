import React from 'react';
import './Header.css';

var Header = () => {
	return (
		<div className="Header">
			<div className="Container">
				<p className="Header__title"> На Старт </p>
				<div className="Header__button_exit">
					<img src="../../img/icon/exit.svg" />
				</div>
			</div>
		</div>
	);
}

export default Header;