import React, { Fragment } from 'react';
import './CompForRoad.css';
import { Link } from 'react-router-dom';


var CompForRoad = (props) => (
	<Fragment>
		<div> n1 = {props.match.params.number1} ; n2 = {props.match.params.number2} </div>
		<Link to="/"> Home </Link>
		<Link to="/dd/ff-21"> 2page </Link>
	</Fragment>
);

export default CompForRoad;