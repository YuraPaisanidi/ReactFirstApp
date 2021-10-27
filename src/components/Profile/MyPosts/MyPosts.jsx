import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {

let postElements =
	props.posts.map(post => <Post message={post.message} likes={post.likesCount} /> )

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