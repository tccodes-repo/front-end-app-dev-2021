import React from 'react';
import { AppFrame } from 'components/AppFrame';
import { Container } from 'components/Container';
import { Panel } from 'components/Panel';
import { PageFrame } from 'components/AppFrame/PageFrame';
import { Section } from 'components/Section';
import { Button } from 'components/Button';
import { Input } from 'components/Form/Input';

export const Recipient: React.FC = props => {
	return (
		<AppFrame>
			<PageFrame
				title={'Recipients'}
				ContentRight={() => <Button buttonType='success'>Save Recipient</Button>}
			>
				<Section>
					<Container>
						<Panel>
							<Input type='text' label='First Name' name='firstName' />
							<Input type='text' label='Last Name' name='lastName' />
							<Input type='text' label='Email' name='email' />
						</Panel>
					</Container>
				</Section>
			</PageFrame>
		</AppFrame>
	);
};
