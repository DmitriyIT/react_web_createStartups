import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Profile_edit.scss';

import AnimateCreate from '../AnimateCreate.js';

function Profile_xml({ img_src, email, fname, sname, aboute, err, submitForm, textareaChange, refInputFile, buttonInputFileClick, inputFileHandler, goBack}) {
	var arrFields = [ 
		{text: 'e-mail', name: 'email',  value : email},
		{text: 'Имя', name: 'fname',  value : fname},
		{text: 'Фамилия', name: 'sname',  value : sname},
		{text: 'О себе', name: 'aboute',  value : aboute}
	];
	var fields = arrFields.map(e => [
		<div className="Profile__titleField">{e.text}</div>,
		<textarea className="Profile__field" name={e.name} value={e.value} onChange={textareaChange} />
	]);
	return (
		<div className="Profile_edit">
			<div className="Profile__title">Редактирование профиля</div>
			{ err ? <div className="Profile_err">{err}</div> : ''}
			
			<div className="Profile__img">
				<img src={img_src} />
			</div>
			<input type="file" onChange={inputFileHandler} ref={refInputFile} style={{display: 'none'}} />
			<div className="Profile__download">
				Изображение
				<div className="Profile__download__button" onClick={buttonInputFileClick}>
					Загрузить изображение
				</div>
			</div>

		<AnimateCreate>
			<form onSubmit={submitForm} id="Profile">				
				{fields}
			</form>
		</AnimateCreate>

			<input type="submit" form="Profile" className="Profile__button" value='Сохранить' />
			<Link to='/profile'>
				<div className="Profile__button" onClick={goBack}>Отмена</div>
			</Link>
			
		</div>
	)
}

export default Profile_xml;