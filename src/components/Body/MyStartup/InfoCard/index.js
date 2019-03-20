import React from 'react';
import './InfoCard.scss';

/**
 * fields: arr
 * button: 'name'/false
 */
var InfoCard = ({ color, title, fields, button, funcButton }) => {

	var text_fields = fields.map((text) => {
		return (
			<div className="InfoCard__text" key={text.substring(0,5)}> {text} </div>
		); 
	});
	var button_true = (button) ? <div className="InfoCard__button"> {button} </div> : '';
	var InfoCard_classes = "InfoCard" + " InfoCard_color-" + color;

	return (
		<div className={InfoCard_classes}>
			<div className="InfoCard__title"> {title} </div>
			<div className="InfoCard__body">
				{text_fields}
				{button_true}
			</div>
		</div>
	);
}
export default InfoCard;