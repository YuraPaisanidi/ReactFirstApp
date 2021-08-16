import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from'./Profile.module.css';

const Profile = () => {
	return (
		<div className={s.content}>
			<div>
				<img src="https://img.freepik.com/free-vector/blue-copy-space-digital-background_23-2148821698.jpg?size=626&ext=jpg&ga=GA1.2.1420717220.1625875200" alt="" />
			</div>
			<div>
				ava + description
			</div>
			<MyPosts />
		</div>
	);
}

export default Profile;
