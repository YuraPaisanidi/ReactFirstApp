import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


let posts = [
	{id: 1, message: 'Hi!', likesCount: 12 },
	{id: 2, message: 'How are you?', likesCount: 22},
	{id: 3, message: 'What is the capital of GB?', likesCount: 32}
];

let postElements = posts
	.map(post => <Post message={post.message} likes={post.likesCount} /> )

const MyPosts = () => {
	return (
		<div className={s.item}>
			<h3>My posts</h3>
			<div className={s.create}>
				<textarea></textarea>
				<button>Post</button>
			</div>
			<div className={s.posts}>
				{postElements}
			</div>
		</div>
	)
};

export default MyPosts;