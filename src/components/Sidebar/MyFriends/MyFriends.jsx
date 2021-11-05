import React from 'react';
import Friend from './Friend/Friend';
import s from'./MyFriends.module.css';

const MyFriends = (props) => {

	let friendsElements = 
		props.friends.map( friend => <Friend name={friend.name} id={friend.id}/>)


	return(
		<div className={s.wrap}>
			<h2 className={s.title}>My friends</h2>
			<div className={s.block}>
				{friendsElements}
			</div>
		</div>
	);
}

export default MyFriends;