import React, {Component} from 'react';
import './StartupCard.css';

class StartupCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			click: false
		};
	}

	pressButton = (e) => {
		console.log(e);
		this.setState( function(prevState, props) {
			return {click: !prevState.click};
		});
	}

	render() {
		var d = this.state.click ? ' StartupCard_active' : '';
		return (
			<div className={"StartupCard" + d}>
				<img src="" />
				<p className="StartupCard__titel"> {this.props.titel} </p>
				<p className="StartupCard__text"> {this.props.text} </p>
				<button onClick={this.pressButton}> push me )</button>
			</div>
		);
	}
}

StartupCard.defaultProps = {
	arr: [{titel: "sorry", text: 'content is non'}]
};

export default StartupCard;