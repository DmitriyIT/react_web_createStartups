import React, {Component} from 'react';
import S_ph from './Say_phrase.js';

function clickCons() {
	console.log('click! year! ;))');
}

class MakeHi extends Component {
	render() {
		return (
			<div>
				<S_ph str="HEllow" />
				<button onClick={clickCons} />
			</div>
		);
	};
}

export default MakeHi;