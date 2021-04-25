import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomeView } from 'views/HomeView';
import { Emails } from 'views/Emails';
import { Email } from 'views/Email';
import { Recipients } from 'views/Recipients';
import { Recipient } from 'views/Recipient';
import { Templates } from 'views/Templates';
import { Template } from 'views/Template';
import { Login } from 'views/Login';
import './App.scss';

const App: React.FC = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/login'>
					<Login />
				</Route>
				<Route exact path='/'>
					<HomeView />
				</Route>
				<Route exact path='/emails'>
					<Emails />
				</Route>
				<Route exact path='/emails/email'>
					<Email />
				</Route>
				<Route exact path='/emails/email/:id'>
					<Email />
				</Route>
				<Route exact path='/recipients'>
					<Recipients />
				</Route>
				<Route exact path='/recipients/recipient'>
					<Recipient />
				</Route>
				<Route exact path='/recipients/recipient/:id'>
					<Recipient />
				</Route>
				<Route exact path='/templates'>
					<Templates />
				</Route>
				<Route exact path='/templates/template'>
					<Template />
				</Route>
				<Route exact path='/templates/template/:id'>
					<Template />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
