import React from 'react';
import s from'./../MyFriends.module.css';

const Friend = (props) => {
	return(
		<a href="#" className={s.item}>
			<div className={s.avatar}>
				<img src="img/user1.png" alt="" />
			</div>
			<p className={s.name}>{props.name}</p>
		</a>
	);
}

export default Friend;