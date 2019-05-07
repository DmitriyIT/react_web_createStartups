import React from 'react';
import './SearchField.scss';

var SearchField = ({ onSubmit, onChangeSearchStr, search_str }) => {
	return (
		<div className="SearchField">
			<form id="formForSearch" class="SearchField__form" onSubmit={onSubmit}>
				<input type="text" name="searchStr" placeholder="Поиск..."
					value={search_str} 
					onChange={onChangeSearchStr} />
			</form>
		</div>
	);
};

export default SearchField;