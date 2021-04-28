import React from 'react';
import { useLocation } from 'react-router-dom';
import { AuthFrame } from 'components/AuthFrame';
import { Panel } from 'components/Panel';
import { Button } from 'components/Button';
import { useAuth } from 'providers/AuthProvider/AuthProvider';

export const Login: React.FC = props => {
	const location: any = useLocation();
	const { setCurrentUser } = useAuth();

	const loginUser = () => {
		console.log();
		setCurrentUser(
			{
				currentUserIdToken: 'test'
			},
			location?.state?.from?.pathname
		);
	};

	return (
		<AuthFrame>
			<Panel title='Login' headingLevel='h1'>
				<p>Use any Google account to login</p>
				<Button buttonType={'success'} onClick={loginUser}>
					Login with Google
				</Button>
			</Panel>
		</AuthFrame>
	);
};
