import React from 'react';
import './Startup__popup.css';

var Startup__popup = ({ author_img, author_name, need_people }) => {
	return (
		<div className="Startup__popup">
			<div className="popup__main-div">
				<div className="popup__author">
					<p>Автор: </p>
					<img src={'../../img/icon/' + author_img} />
					<p className="popup__author-name"> {author_name} </p>
				</div>
				<div className="popup__need">
					<p>Нужны:</p>
					<ul>
						{need_people.map(item => (<li> {item.position} {item.isFound ? '(найден)' : ''} </li>))}
					</ul>
				</div>
			</div>
			<div className="popup__back-div" />
		</div>
	);
};

export default Startup__popup;