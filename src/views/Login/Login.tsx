import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthFrame } from 'components/AuthFrame';
import { Panel } from 'components/Panel';
import { Button } from 'components/Button';
import { useAuth } from 'providers/AuthProvider/AuthProvider';

export const Login: React.FC = props => {
	const location: any = useLocation();
	const { setCurrentUser } = useAuth();

	useEffect(() => {
		// @ts-expect-error
		const { gapi } = window;

		gapi.load('auth2', () => {
			const auth2 = gapi.auth2.init({
				client_id: '671342783435-1u2km52augr7kglbqc3jbap72tckv0d5.apps.googleusercontent.com',
				cookiepolicy: 'single_host_origin'
			});

			auth2.attachClickHandler(document.getElementById('customBtn'), {}, (googleUser: any) => {
				const profile = googleUser.getBasicProfile();
				const idToken = googleUser.getAuthResponse().id_token;
				setCurrentUser(
					{
						currentUserEmail: profile.getEmail(),
						currentUserName: profile.getName(),
						currentUserIdToken: idToken
					},
					location?.state?.from?.pathname
				);
			});
		});
	}, []);

	return (
		<AuthFrame>
			<Panel title='Login' headingLevel='h1'>
				<p>Use any Google account to login</p>
				<Button buttonType={'success'} id='customBtn'>
					Login with Google
				</Button>
			</Panel>
		</AuthFrame>
	);
};
