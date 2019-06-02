import React from 'react';
import { Link } from 'react-router-dom';
import './Message.scss';


var Message = ({ author_icon_path, author_name, time, text }) => {

	return (
		<div className="Message">
			<div className="Messege__icon">
				<img src={author_icon_path} />
			</div>
			<div className="Messege__body">
				<div className="Messege__body__name">{author_name}</div>
				<div className="Messege__body__time">{
					new Date(+time).toLocaleString('ru', {
					  hour: 'numeric',
					  minute: 'numeric',
					  timezone: 'UTC'
					}) + '  ' + new Date(+time).toLocaleString('ru', {
					  // year: '2-digit',
					  month: 'numeric',
					  day: 'numeric',
					  timezone: 'UTC'
					})
				}</div>
				<div className="Messege__body__line" />
				<div className="Messege__body__text">{text}</div>
			</div>
		</div>
	);
}
export default Message;