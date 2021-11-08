import {rerenderEntireTree} from "../render"


let state = {
	profilePage: {
		posts: [
			{id: 1, message: 'Hi!', likesCount: 12 },
			{id: 2, message: 'How are you?', likesCount: 22},
			{id: 3, message: 'What is the capital of GB?', likesCount: 32}
		],
		newPostText: ''
	},
	dialogsPage: {
		dialogs: [
			{id: 1, name: 'Yura'},
			{id: 2, name: 'Masha'},
			{id: 3, name: 'Vlad'},
			{id: 4, name: 'Rocky'},
			{id: 5, name: 'Sasha'},
			{id: 6, name: 'Pasha'},
		],
		messages: [
			{id: 1, message: 'Hi!'},
			{id: 2, message: 'How are you?'},
			{id: 3, message: 'What is the capital of GB?'},
			{id: 4, message: 'Rocky'},
			{id: 5, message: 'Sasha'},
			{id: 6, message: 'Pasha'},
		]
	},
	sidebar: {
		friends: [
			{id: 1, name: 'Vlad'},
			{id: 2, name: 'Masha'},
			{id: 3, name: 'Rocky'}
		]
	}
};

export let addPost = () => {
	let newPost = {
		id: 5,
		message: state.profilePage.newPostText,
		likesCount: 0
	}
	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText = '';
	rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText;
	rerenderEntireTree(state);
};

export default state;