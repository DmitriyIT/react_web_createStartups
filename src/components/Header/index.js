import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function ShowUser({ photo, surName, name }) {
	var classForUser = name ? '' : 'Header__User_isReg-no';
	return (
		<div class={"Header__User " + classForUser}>
			<div class="Header__User__Img">
				<img src={photo} />
			</div>
			<div class="Header__User__rightBlock">
				<div class="Header__User__fName">{surName}</div>
				<div class="Header__User__lName">{name}</div>
			</div>
		</div>		
	);
}

var Header = ({ logout, name, surName, photo, description }) => {
	var buttonExit = (
		<div className="Header__button_exit">
			<Link to="/RegAuth" onClick={logout}>
				<img src="../../img/icon/exit.svg" />
			</Link>
		</div>
	);
	return (
		<div className="Header">
			<div className="Container">
				<p className="Header__title"> 
					<Link to="/">
						На Старт 
					</Link>
				</p>
				{name && buttonExit}

				{ 
					name ? 
					<ShowUser photo={photo} surName={surName} name={name} />
					: (
						<Link to="/RegAuth" className="Header__User_href" onClick={logout}> 
							<ShowUser photo={photo} surName={surName} name={name} /> 
						</Link>
					)
				}
			</div>
		</div>
	);
}

export default Header;