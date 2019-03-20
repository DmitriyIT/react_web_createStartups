import React, { Fragment } from 'react';
import './LineOFConditions.css';


var LineOFConditions = (props) => {
	var LineOFConditions_show = props.show ? 'LineOFConditions_show_yes' : '';
	return (
		<div className={"LineOFConditions " + LineOFConditions_show}></div>
	);
};

export default LineOFConditions;