import React from 'react';
import './Auth.scss';

function Auth() {
	return (
		<div className="AuthReg">
			<div className="AuthReg__title">email</div>
			<div className="AuthReg__field">pass</div>
			<div className="AuthReg__swith">Регистрация</div>
			<div className="AuthReg__button">Войти</div>
		</div>
	);
}

export default Auth;