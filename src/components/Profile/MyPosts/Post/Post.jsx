import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
	return (
			<div className={s.item}>
				{props.message}
				<p>{props.likes} likes</p>
			</div>
	)
};

export default Post;