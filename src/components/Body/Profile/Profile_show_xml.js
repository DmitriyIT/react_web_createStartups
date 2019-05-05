import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Profile_show.scss';


function Profile_show({ img_src, email, fname, sname, aboute, err, submitForm, textareaChange, refInputFile, buttonInputFileClick, inputFileHandler, clickEdit, notifications}) {

	return (
		<div className="Profile">
			<div className="Profile__top">
				<div className="Profile__title">Профиль</div>				
				<div className="Profile__img">
					<img src={img_src} />
				</div>

				<div className="Profile__rightBlock">
					<div className="Profile__rightBlock__name"> {fname + ' ' + sname} </div>
					<div className="Profile__rightBlock__email"> {email} </div>
					<div className="Profile__rightBlock__email"> {aboute} </div>
					<div className="Profile__rightBlock__button" onClick={clickEdit}> Редактировать </div>
				</div>
			</div>
			

			<div className="Profile__bottom">
				<div className="Profile__bottom__title">Уведомления</div>
				<div className="Profile__bottom_bgGrey">
					{notifications.map(e => (
						<div className="Profile__bottom__notification">
							{e}
						</div>
					))}
					
				</div>
			</div>
		</div>
	)
}

export default Profile_show;