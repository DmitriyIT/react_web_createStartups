import React from 'react';
import { Link } from 'react-router-dom';

function AuthReg({ submitForm, switch2, onChangeEmail, isSwitch, err, comment }) {
	var title = isSwitch ? 'Авторизация' : 'Регистрация';
	var button = isSwitch ? 'Войти' : 'Зарегистрироваться';
	var switchA = isSwitch ? 'Регистрация' : 'Авторизация';

	return (
		<div className="AuthReg">
			<div className="AuthReg__title">{title}</div>
			{ comment ? <div className="AuthReg__comment">{comment}</div> : ''}
			{ err ? <div className="AuthReg__err">{err}</div> : ''}
			<form onSubmit={submitForm}>
				<input name="email" className="AuthReg__field" placeholder="email" onChange={onChangeEmail}></input>
				<input name="password" className="AuthReg__field" placeholder="пароль"></input>
				
				{!isSwitch ? <input name="password2" className="AuthReg__field" placeholder="пароль еще раз"></input> : ''}
				<div className="AuthReg__swith" onClick={switch2}> {switchA}</div>	
				<input type="submit" className="AuthReg__button" value={button} />
			</form>
		</div>
	);
}

export default AuthReg;