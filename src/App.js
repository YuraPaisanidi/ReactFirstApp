import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';

function App(props) {
	console.log(props);

  return (
			<div className="app-wrapper">
				<Header />
				<Sidebar state={props.state.sidebar} />
				<div className="app-wrapper-content">
					<Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />}/>
					<Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
					<Route path='/news' render={() => <News/>}/>
					<Route path='/music' render={() => <Music/>}/>
					<Route path='/settings' render={() => <Settings/>}/>
				</div>
			</div>

  );
}

export default App;

