import React, { useState } from 'react';
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
import { IRecipient } from 'common/interfaces/IRecipient';
import { useHistory } from 'react-router-dom';

export const Recipient: React.FC = () => {
	const history = useHistory();
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const { currentUserIdToken } = useAuth();

	const mutationCreateRecipient = useMutation(
		(newRecipient: IRecipient) =>
			fetch(`${config.apiBaseUrl}/emailrecipients`, {
				method: 'post',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${currentUserIdToken}}`
				},
				body: JSON.stringify(newRecipient)
			}),
		{
			onSuccess: async () => {
				setName('');
				setEmail('');
				history.push('/recipients');
			}
		}
	);

	const addNewRecipient = () => {
		if (name !== '' && email !== '') {
			mutationCreateRecipient.mutate({
				name,
				email,
				customer: config.customer
			});
		}
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
							<Input
								type='text'
								label='Name'
								name='name'
								value={name}
								onChange={event => setName(event.target.value)}
							/>
							<Input
								type='text'
								label='Email'
								name='email'
								value={email}
								onChange={event => setEmail(event.target.value)}
							/>
						</Panel>
					</Container>
				</Section>
			</PageFrame>
		</AppFrame>
	);
};
