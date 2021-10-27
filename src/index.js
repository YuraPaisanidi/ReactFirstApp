import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
	{id: 1, message: 'Hi!', likesCount: 12 },
	{id: 2, message: 'How are you?', likesCount: 22},
	{id: 3, message: 'What is the capital of GB?', likesCount: 32}
];

let dialogs = [
	{id: 1, name: 'Yura'},
	{id: 2, name: 'Masha'},
	{id: 3, name: 'Vlad'},
	{id: 4, name: 'Rocky'},
	{id: 5, name: 'Sasha'},
	{id: 6, name: 'Pasha'},
];

let messages = [
	{id: 1, message: 'Hi!'},
	{id: 2, message: 'How are you?'},
	{id: 3, message: 'What is the capital of GB?'},
	{id: 4, message: 'Rocky'},
	{id: 5, message: 'Sasha'},
	{id: 6, message: 'Pasha'},
];

ReactDOM.render(
  <React.StrictMode>
		<App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
