import React from 'react';
import { Link } from 'react-router-dom';

function Reg({ switch2, onChangeEmail }) {
	return (
		<div className="AuthReg">
			<div className="AuthReg__title">Регистрация</div>
			<input className="AuthReg__field" placeholder="введите ваш email" onChange={onChangeEmail} />
			<input className="AuthReg__field" placeholder="password" />
			<input className="AuthReg__field" placeholder="password еще раз" />
			<div className="AuthReg__swith" onClick={switch2}>Регистрация</div>	
			<Link to="">
				<div className="AuthReg__button">Зарегистрироваться</div>
			</Link>
		</div>
	);
}

export default Reg;