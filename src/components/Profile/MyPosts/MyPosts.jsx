import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {

	let postElements =
	props.posts.map(post => <Post message={post.message} likes={post.likesCount} /> )
	
	let newPostElement = React.createRef();
	
	let addPost = () => {
		let text = newPostElement.current.value;
		props.addPost(text);
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	}

	return (
		<div className={s.item}>
			<h3>My posts</h3>
			<div className={s.create}>
				<textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
				<button onClick={addPost}>Post</button>
			</div>
			<div className={s.posts}>
				{postElements}
			</div>
		</div>
	)
};

export default MyPosts;