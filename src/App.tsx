import React from 'react';
import { BrowserRouter as Router, Switch, Route, RouteProps, Redirect } from 'react-router-dom';
import { HomeView } from 'views/HomeView';
import { Emails } from 'views/Emails';
import { Email } from 'views/Email';
import { Recipients } from 'views/Recipients';
import { Recipient } from 'views/Recipient';
import { Templates } from 'views/Templates';
import { Template } from 'views/Template';
import { AuthProvider, useAuth } from 'providers/AuthProvider';
import { Login } from 'views/Login';
import './App.scss';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const PrivateRoute: React.FC<RouteProps> = props => {
	const { getIsAuthenticated } = useAuth();

	const { children, ...remainingProps } = props;
	return (
		<Route
			{...remainingProps}
			render={({ location }) =>
				getIsAuthenticated() === true ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location }
						}}
					/>
				)
			}
		/>
	);
};

const App: React.FC = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<AuthProvider>
					<Switch>
						<Route exact path='/login'>
							<Login />
						</Route>
						<PrivateRoute path='/'>
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
						</PrivateRoute>
					</Switch>
				</AuthProvider>
			</Router>
		</QueryClientProvider>
	);
};

export default App;
