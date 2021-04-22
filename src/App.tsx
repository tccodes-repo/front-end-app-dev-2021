import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomeView } from 'views/HomeView';
import { EmailLanding } from 'views/EmailLanding';
import { RecipientsLanding } from 'views/RecipientsLanding';
import { TemplatesLanding } from 'views/TemplatesLanding';
import './App.scss';

const App: React.FC = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<HomeView />
				</Route>
				<Route path='/emails'>
					<EmailLanding />
				</Route>
				<Route path='/recipients'>
					<RecipientsLanding />
				</Route>
				<Route path='/templates'>
					<TemplatesLanding />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
