import React from 'react';
import { Link } from 'react-router-dom';
import './Chat.scss';

import Message from './Message';
var Chat = ({ messages, onSubmit, inputMsgChange, text_msg }) => {
	var msgs = messages.map(e => (<Message {...e} key={e.time} />));

	return (
		<div className="Chat">
			<div className="Chat__board_g">
				<div className="Chat__board_w">
					{msgs}
				</div>
			</div>
			<form onSubmit={onSubmit} >
				<div className="Chat__messageField">
					<input name="msg" placeholder="Напишите сообщение..." value={text_msg}  onChange={inputMsgChange} />
				</div>
				<div className="Chat__buttonSend">
					<input type="submit" />
				</div>
			</form>
		</div>
	);
}
export default Chat;