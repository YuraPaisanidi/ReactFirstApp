import React from 'react';
import s from'./Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return(
		<nav className={s.sidebar}>
			<div>
				<NavLink to="/profile" activeClassName={s.active} className={s.item}>Profile</NavLink>
			</div>
			<div>
				<NavLink to="/dialogs" activeClassName={s.active} className={s.item}>Messages</NavLink>
			</div>
			<div>
				<NavLink to="/news" activeClassName={s.active} className={s.item}>News</NavLink>
			</div>
			<div>
				<NavLink to="/music" activeClassName={s.active} className={s.item}>Music</NavLink>
			</div>
			<div>
				<NavLink to="/settings" activeClassName={s.active} className={s.item}>Settings</NavLink>
			</div>
		</nav>
	)
}

export default Navigation;