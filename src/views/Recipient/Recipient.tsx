import React from 'react';
import { AppFrame } from 'components/AppFrame';
import { Container } from 'components/Container';
import { Panel } from 'components/Panel';
import { PageFrame } from 'components/AppFrame/PageFrame';
import { Section } from 'components/Section';
import { Button } from 'components/Button';
import { Input } from 'components/Form/Input';

import { useMutation } from 'react-query';
import { config } from 'config/config';
import { useAuth } from 'providers/AuthProvider';

export const Recipient: React.FC = props => {
	const { getCurrentUserIDToken } = useAuth();
	const mutationAddRecipient = useMutation(newRecipient =>
		fetch(`${config.apiBaseUrl}/emailrecipients`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${getCurrentUserIDToken()}`
			},
			body: JSON.stringify(newRecipient)
		})
	);

	const addNewRecipient = () => {
		mutationAddRecipient.mutate({
			name: 'Laila',
			email: 'laila@example.com',
			customer: '6089e147f4110ec4235cce8b'
		} as any);
	};

	return (
		<AppFrame>
			<PageFrame
				title={'Recipients'}
				ContentRight={() => (
					<Button buttonType={'success'} onClick={addNewRecipient}>
						Save Recipient
					</Button>
				)}
			>
				<Section>
					<Container>
						<Panel>
							<Input type='text' label='First Name' name='name' />
							<Input type='text' label='Email' name='email' />
						</Panel>
					</Container>
				</Section>
			</PageFrame>
		</AppFrame>
	);
};
