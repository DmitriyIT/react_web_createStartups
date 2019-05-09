import React from 'react';
import { Link } from 'react-router-dom';
import './Chat.scss';

var Chat = ({ onSubmit, inputMsgChange, text_msg, children, handleScroll, refScrollEl }) => {
	return (
		<div className="Chat">
			<div className="Chat__board_g">
				<div className="Chat__board_w" onScroll={handleScroll} ref={refScrollEl}>
					{children}
				</div>
			</div>
			
			<form onSubmit={onSubmit} >
				<div className="Chat__messageField">
					<input 
						name="msg" 
						placeholder="Напишите сообщение..." 
						autocomplete="off"
						value={text_msg}  
						onChange={inputMsgChange} />
				</div>

				<div className="Chat__buttonSend">
					<input type="submit" />
				</div>
			</form>
		</div>
	);
}
export default Chat;