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

function App() {
  return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Sidebar />
				<div className="app-wrapper-content">
					<Route path='/profile' component={Profile}/>
					<Route path='/dialogs' component={Dialogs}/>
					<Route path='/news' component={News}/>
					<Route path='/music' component={Music}/>
					<Route path='/settings' component={Settings}/>
				</div>
			</div>
		</BrowserRouter>

  );
}

export default App;

