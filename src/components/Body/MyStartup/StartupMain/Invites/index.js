import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Invites.scss';

import Bg_grey from '../Bg_grey.js';
import Invite from './Invite';

class Invites extends Component {
	constructor(props) {
		super(props);
		this.state = {
			invites: [],
			selectChoose: {},
			comment: ''
		}
	}

	componentDidMount() {
		fetch('/getInvites')
			.then(res => res.json())
			.then(data => {
				if (data) {
					var newSelectChoose = {};
					data.invites.forEach(e => {
						newSelectChoose[e.id] = e.jobList[0];
					});

					this.setState({
						invites: data.invites,
						selectChoose: newSelectChoose
					});
				}
			});
	}

	onSelectChange = (e) => {
		var newSC = this.state.selectChoose;
		newSC[e.target.id] = e.target.value;
		this.setState({
			selectChoose: newSC
		});
	}

	click_apply = (e) => {
		var id = e.target.id;
		this.sendAnswer(id, true);	
	}

	click_deny = (e) => {
		var id = e.target.id;
		this.sendAnswer(id, false);
	}

	sendAnswer(id, answer) {
		var job = this.state.selectChoose[id];
		fetch("/ansOfInvite", {
		    headers: {
		      'Accept': 'application/json',
		      'Content-Type': 'application/json'
		    },
		    method: "POST",
		    body: JSON.stringify({
		    	id: id, 
		    	answer: answer,
		    	job: job
		    })
		})
		.then((response) => response.json())
		.then((data) => {
			var newInv = this.state.invites.filter(e => e.id != id);
			if (answer) {
				// delete this job from joblist
				newInv = newInv.map(e => {
					e.jobList = e.jobList.filter(elem => elem != job);
					return e;
				});
			}
			var newSC = this.state.selectChoose;
			delete(newSC[id]);

			var comment = "возможно произошла ошибка сервера";
			console.log(data.name);
			if (data.name) {
				var res = (answer) ? ' принят как ' + data.job : ' отклонен';
				comment = 'пользователь ' + data.name + res;
			}
			this.setState({
				invites: newInv,
				selectChoose: newSC,
				comment: comment
			});
		});
	}

	render() {
		var invites = 'заявок нет';

		if (this.state.invites.length > 0) {
			invites = this.state.invites.map(e => {
				return (
					<CSSTransition 
						classNames="invite_item"
						timeout={200}
						key={e.id}
					>
						<Invite
							name={e.name}
							jobList={e.jobList}
							img_src={e.img_src}
							id={e.id}
							onSelectChange={this.onSelectChange}
							selectValue={this.state.selectChoose[e.id]}
							click_apply={this.click_apply}
							click_deny={this.click_deny} />
					</CSSTransition>
				);
			});
			invites.push(this.state.comment);
		}
		return (
			<Bg_grey id="awdddagrsg">
				<TransitionGroup component={null}>
					{invites}
				</TransitionGroup>
			</Bg_grey>
		);
	}
}


export default Invites;
