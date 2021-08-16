import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div className={s.item}>
			<h3>My posts</h3>
			<div className={s.posts}>
				<Post message='Hello! My name is Yura'/>
				<Post message='How are you?' />
				<Post message='How old are you?'/>
			</div>
		</div>
	)
};

export default MyPosts;