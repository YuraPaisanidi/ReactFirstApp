import React from 'react';
import { NavLink } from 'react-router-dom';
import s from'./Dialogs.module.css';

const DialogItem = (props) => {
	let path = '/dialogs/' + props.id;

	return (
		<div className={s.dialog + ' ' + s.active}>
			<NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
		</div>
	)
}

const Message = (props) => {
	return (
		<div className={s.message}>
			<p>{props.message}</p>
		</div>
	)
}

let dialogs = [
	{id: 1, name: 'Yura'},
	{id: 2, name: 'Masha'},
	{id: 3, name: 'Vlad'},
	{id: 4, name: 'Rocky'},
	{id: 5, name: 'Sasha'},
	{id: 6, name: 'Pasha'},
];

let messages = [
	{id: 1, message: 'Hi!'},
	{id: 2, message: 'How are you?'},
	{id: 3, message: 'What is the capital of GB?'},
	{id: 4, message: 'Rocky'},
	{id: 5, message: 'Sasha'},
	{id: 6, message: 'Pasha'},
];

let dialogsElements = dialogs
	.map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );

let messagesElements = messages
	.map(message => <Message message={message.message} /> )

const Dialogs = () => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			
			<div className={s.messages}>
				{messagesElements}
			</div>
		</div>
	);
}

export default Dialogs;