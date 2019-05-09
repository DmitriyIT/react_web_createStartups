import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './AnimateCreate.scss';

class AnimateCreate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show_anim: false
		};
	}

	componentDidMount(data) {
		this.setState({show_anim: true});
	}
	render() {
		return (
			<CSSTransition
				in={this.state.show_anim}
				timeout={350}
				classNames="AnimateCreate"
			>
				{this.props.children}
			</CSSTransition>
		);
	}
}

export default AnimateCreate;