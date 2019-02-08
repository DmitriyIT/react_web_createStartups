import React, {Component} from 'react';
import './List_startups.css';
import StartupCard from '../StartupCard';


function List_startups(props) {
	return props.arr.map(function({ titel, text, id }) {
		return <StartupCard titel={titel} text={text} key={id} />;
	});
}

export default List_startups;