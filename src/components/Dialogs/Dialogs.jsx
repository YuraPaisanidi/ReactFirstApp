import React from 'react';
import { NavLink } from 'react-router-dom';
import s from'./Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialogs = (props) => {

	let newMessageElement = React.createRef();

	let sendNewMessage = () => {
		let text = newMessageElement.current.value;
		alert(text);
	};
	
	let dialogsElements = props.state.dialogs
		.map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
	
	let messagesElements = props.state.messages
		.map(message => <Message message={message.message} /> )

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			
			<div className={s.messages}>
				{messagesElements}
				<div className={s.yourMessage}>
					<textarea ref={newMessageElement} className={s.textarea} placeholder="Your message..."></textarea>
					<button className={s.sendBtn} onClick={sendNewMessage}>Send</button>
				</div>
			</div>
		</div>
	);
}

export default Dialogs;