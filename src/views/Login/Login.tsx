import React from 'react';
import { AuthFrame } from 'components/AuthFrame';
import { Panel } from 'components/Panel';
import { Button } from 'components/Button';

export const Login: React.FC = props => {
	return (
		<AuthFrame>
			<Panel title='Login' headingLevel='h1'>
				<p>Use any Google account to login</p>
				<Button buttonType='success'>Login with Google</Button>
			</Panel>
		</AuthFrame>
	);
};
