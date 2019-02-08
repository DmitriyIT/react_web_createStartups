import React from 'react';
import './SearchLine.css';

function SearchLine(props) {
	function onChangeInput(e) {
		props.funcFilter(e.target.value.trim());
	}

	return (
		<input type="text" name="" placeholder="введите текст для поиска" onChange={onChangeInput} />
	);
}

export default SearchLine;