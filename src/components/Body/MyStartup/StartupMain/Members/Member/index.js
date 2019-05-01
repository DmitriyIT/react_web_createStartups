import React from 'react';
import './Member.scss';

var Member = ({ name, job, img_src, id, show_button, show_popup, click_showPopup, click_remove }) => {
	var popupClassShow = show_popup ? 'PopupRemove_show-animate' : 'PopupRemove_show-no';
	var button = show_button ? (
		<div className="Member__buttonRemove">
			<p onClick={click_showPopup} id={id}> Исключить </p>
			<div className={"PopupRemove " + popupClassShow}>
				<div className="PopupRemove__text">Вы уверены что хотите исключить участника  ?</div>
				<div className="PopupRemove__buttonNo" 
					onClick={click_showPopup} 
					id={id}> Отмена </div>
				<div className="PopupRemove__buttonRemove" 
					onClick={click_remove} 
					id={id}> Исключить </div>
			</div>
		</div>
	) : '';

	return (
		<div className="Member">
			<div className="Member__img">
				<img src={img_src} />
			</div>
			<div className="Member__line"></div>
			<div className="Member__info">
				<div className="Member__info__name">{name}</div>
				<div className="Member__info__job">{job}</div>
			</div>
			{button}
		</div>
	);
}
export default Member;