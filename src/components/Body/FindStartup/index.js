import React, { Fragment } from 'react';
import './FindStartup.css';

import SearchJoinLine from '../SearchJoinLine';
import LineOFConditions from '../LineOFConditions';
import StartupCards from '../StartupCards';

var FindStartup = (props) => {
	return (
		<Fragment>
			<SearchJoinLine />
			<LineOFConditions />
			<StartupCards />
		</Fragment>
	);
};

export default FindStartup;