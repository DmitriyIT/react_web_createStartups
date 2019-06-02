import React from 'react';
import './Invite.scss';

var Invite = ({ name, jobList, possitionWanted, aboute, img_src, id, onSelectChange, selectValue, showButton, click_apply, click_deny }) => {
	return (
		<div className="Invite">
			<div className="Invite__img">
				<img src={img_src} />
			</div>
			<div className="Invite__line"></div>
			<div className="Invite__info">
				<div className="Invite__info__name">{name}</div>
				<div className="Invite__info__job">
					<select onChange={onSelectChange} value={selectValue} id={id} disabled={!showButton}>
						{jobList.map(e => (<option value={e}> {e} </option>))}
					</select>
				</div>
			</div>
			{showButton && (
				<div className="Invite__buttons">
					<div className="Invite__buttons__buttonApply" id={id} onClick={click_apply}> Принять</div>
					<div className="Invite__buttons__buttonDeny" id={id} onClick={click_deny}> Отклонить </div>
				</div>
			)}
			<div className="Invite__aboute">
				<div className="Invite__aboute__position">
					Желаемая позиция: {possitionWanted}
				</div>	
				<div className="Invite__aboute__discribePeople">
					О себе: <br/>
					{aboute}
				</div>
			</div>
		</div>
	);
}
export default Invite;