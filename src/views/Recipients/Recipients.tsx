import React from 'react';
import { useHistory } from 'react-router-dom';
import { AppFrame } from 'components/AppFrame';
import { Container } from 'components/Container';
import { Panel } from 'components/Panel';
import { Table } from 'components/Table';
import { PageFrame } from 'components/AppFrame/PageFrame/PageFrame';
import { Section } from 'components/Section';
import { Button } from 'components/Button';

import { useQuery } from 'react-query';
import { config } from 'config/config';
import { useAuth } from 'providers/AuthProvider/AuthProvider';

export const Recipients: React.FC = props => {
	const { currentUserIdToken } = useAuth();
	const history = useHistory();
	const { data } = useQuery('recipients', () =>
		fetch(`${config.apiBaseUrl}/emailrecipients`, {
			method: 'get',
			headers: {
				Authorization: `Bearer ${currentUserIdToken}`
			}
		}).then(res => res.json())
	);

	const columns = React.useMemo(
		() => [
			{
				Header: 'Name',
				accessor: 'name' // accessor is the "key" in the data
			},
			{
				Header: 'Email',
				accessor: 'email'
			}
		],
		[]
	);

	return (
		<AppFrame>
			<PageFrame
				title={'Recipients'}
				ContentRight={() => (
					<Button buttonType={'success'} onClick={() => history.push('/recipients/recipient')}>
						New Recipient
					</Button>
				)}
			>
				<Section>
					<Container>
						<Panel>
							<Table columns={columns} data={data} />
						</Panel>
					</Container>
				</Section>
			</PageFrame>
		</AppFrame>
	);
};
