import React from 'react';
import s from'./Sidebar.module.css';
import Navigation from './Navigation/Navigation';
import MyFriends from './MyFriends/MyFriends';


const Sidebar = (props) => {
	return (
		<div>
			<Navigation />
			<MyFriends friends={props.state.friends} />
		</div>
	);
}

export default Sidebar;