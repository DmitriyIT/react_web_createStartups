import React, {Component} from 'react';

var isEmpty = (prop) => (
	prop === undefined ||
	prop === null ||
	(prop.hasOwnProperty('length') && prop.length === 0) ||
	(prop.constructor === Object && Object.keys(prop).length === 0)
);

var LoadingHOC = (loadingProp) => (WrapedComponent) => {
	return class LoadingHOC extends Component {
		render() {
			return isEmpty(this.props[loadingProp]) ?
				'loading'
				: <WrapedComponent {...this.props} />;
		}
	}
};

export default LoadingHOC;