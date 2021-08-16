import React from 'react';
import { NavLink } from 'react-router-dom';
import s from'./Dialogs.module.css';

const Dialogs = () => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<div className={s.dialog + ' ' + s.active}>
					<NavLink to="/dialogs/1" activeClassName={s.active}>Yura</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to="/dialogs/2" activeClassName={s.active}>Masha</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to="/dialogs/3" activeClassName={s.active}>Vlad</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to="/dialogs/4" activeClassName={s.active}>Rocky</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to="/dialogs/5" activeClassName={s.active}>Sasha</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to="/dialogs/6" activeClassName={s.active}>Pasha</NavLink>
				</div>
			</div>
			
			<div className={s.messages}>
				<div className={s.message}>
					<p>Hi!</p>
				</div>
				<div className={s.message}>
					<p>How are you?</p>
				</div>
				<div className={s.message}>
					<p>What is the capital of GB?</p>
				</div>
			</div>
		</div>
	);
}

export default Dialogs;