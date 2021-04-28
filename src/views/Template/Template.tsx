import React from 'react';
import { AppFrame } from 'components/AppFrame';
import { Container } from 'components/Container';
import { Panel } from 'components/Panel';
import { PageFrame } from 'components/AppFrame/PageFrame/PageFrame';
import { Section } from 'components/Section';
import { Button } from 'components/Button';
import { Input } from 'components/Form/Input';

export const Template: React.FC = props => {
	return (
		<AppFrame>
			<PageFrame
				title={'Templates'}
				ContentRight={() => <Button buttonType={'success'}>Save Template</Button>}
			>
				<Section>
					<Container>
						<Panel>
							<Input type='text' label='Name' name='name' />
							<Input type='text' label='Subject' name='subject' />
							<Input type='text' label='Body' name='body' />
						</Panel>
					</Container>
				</Section>
			</PageFrame>
		</AppFrame>
	);
};
