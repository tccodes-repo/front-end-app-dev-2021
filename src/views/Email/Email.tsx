import React from 'react';
import { AppFrame } from 'components/AppFrame';
import { Container } from 'components/Container';
import { Panel } from 'components/Panel';
import { PageFrame } from 'components/AppFrame/PageFrame/PageFrame';
import { Section } from 'components/Section';
import { Button } from 'components/Button';
import { Input } from 'components/Form/Input';

export const Email: React.FC = props => {
	return (
		<AppFrame>
			<PageFrame
				title={'New Email'}
				ContentRight={() => <Button buttonType='success'>Send Email</Button>}
			>
				<Section>
					<Container>
						<Panel>
							<Input label={'Name'} name='name' />
							<Input label={'Template'} name='template' />
						</Panel>
					</Container>
				</Section>
			</PageFrame>
		</AppFrame>
	);
};
