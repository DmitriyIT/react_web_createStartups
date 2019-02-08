import React, { Component } from 'react';
import './ContextComp.css';


var TitelContext = React.createContext();

var FirstComp = () => <SecComp />;
var SecComp = () => <ThirdComp />;
var ThirdComp = () => (
	<TitelContext.Consumer>
		{( {title, dd} ) => <div> some + {title} + {dd}</div>}
	</TitelContext.Consumer>
);


class ContextComp extends Component {

	render() {
		return (
			<TitelContext.Provider value={{title: "dwadTitle ;) it's work!!! ", dd: 32}}>
				<FirstComp />
			</TitelContext.Provider>
		);
	}
}

export default ContextComp;