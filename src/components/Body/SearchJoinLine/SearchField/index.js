import React from 'react';
import './SearchField.css';

var SearchField = (props) => {
	return (
		<div className="SearchField">
			<input type="text" name="" placeholder="Поиск..." className="SearchField__input" />
			<div className="SearchField__div_white1"> </div>
			<div className="SearchField__div_white2"> </div>
		</div>
	);
};

export default SearchField;