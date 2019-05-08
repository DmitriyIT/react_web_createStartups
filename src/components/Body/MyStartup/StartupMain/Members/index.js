import React, { Component } from 'react';
import './Members.scss';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Bg_grey from '../Bg_grey.js';
import Member from './Member';

class Members extends Component {
	constructor(props) {
		super(props);
		this.state = {
			members: [],
			show_button: false
		}
	}

	componentDidMount() {
		fetch('/getMembers')
			.then(response => response.json())
			.then(data => this.setState({
				members: data.members,
				show_button: data.isAdmin
			}));
	}

	click_showPopup = (elem) => {
		var id = elem.target.getAttribute('id');
		var newStateMembers = this.state.members.map((member) => {
			if (member.id == id) {
				member.show_popup = !member.show_popup;
			} else {
				member.show_popup = false;
			}
			return member
		});

		this.setState({members: newStateMembers});
	}

	click_remove = (elem) => {
		var id = elem.target.getAttribute('id');

		fetch("/delMember", {
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
		    method: "POST",
		    body: JSON.stringify({id: id})
		})
		.then((response) => response.json())
		.then((data) => {
			if (data.ans) {
				var newMembersState = this.state.members.filter(e => e.id != id);
				this.setState({members: newMembersState});
			} else {
				// err of server
			}
		})
		.catch(res => console.log('catch' + res));
	}

	render() {
		var mbrs = this.state.members.map(e => (
			<CSSTransition 
				classNames="Member_item"
				timeout={200}
				key={e.id}
			>
				<Member 
					name={e.name} 
					job={e.job} 
					img_src={e.img_src} 
					id={e.id} 
					key={e.id} 
					show_button={this.state.show_button} 
					click_showPopup={this.click_showPopup} 
					show_popup={e.show_popup}
					click_remove={this.click_remove} />
			</CSSTransition>
		));
		return (
			<Bg_grey>
				<TransitionGroup component={null}>
				{mbrs}
				</TransitionGroup>
			</Bg_grey>
		);
	}
}

export default Members;
