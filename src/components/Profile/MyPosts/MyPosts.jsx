import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


let postData = [
	{id: 1, message: 'Hi!', likesCount: 12 },
	{id: 2, message: 'How are you?', likesCount: 22},
	{id: 3, message: 'What is the capital of GB?', likesCount: 32}
];

const MyPosts = () => {
	return (
		<div className={s.item}>
			<h3>My posts</h3>
			<div className={s.create}>
				<textarea></textarea>
				<button>Post</button>
			</div>
			<div className={s.posts}>
				<Post message={postData[0].message} likes={postData[0].likesCount} />
				<Post message={postData[1].message} likes={postData[1].likesCount} />
				<Post message={postData[2].message} likes={postData[2].likesCount} />
			</div>
		</div>
	)
};

export default MyPosts;