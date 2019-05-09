import React from 'react';
import './MenuPagesBottom.scss';

function MenuPagesBottom({ numberOfPage, moveFirstPage, moveNextPage, moveBackPage, isExistNextPage }) {
	return (
		<div className="MenuPagesBottom">
			<div className="MenuPagesBottom__bFirst" onClick={moveFirstPage}>к 1й</div>
			<div className="MenuPagesBottom__bPrev" onClick={moveBackPage} />
			<div className="MenuPagesBottom__showNumPage">{numberOfPage}</div>
			{isExistNextPage && <div className="MenuPagesBottom__bNext" onClick={moveNextPage} />}
		</div>		
	);
}

export default MenuPagesBottom;