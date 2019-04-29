import React from 'react';
import './SearchButton.css';

var SearchButton = () => {
	return (
		<input type="submit" className="SearchButton" value="Поиск" form="formForSearch" />
	);
}

export default SearchButton;