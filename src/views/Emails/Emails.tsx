import React from 'react';
import { useHistory } from 'react-router-dom';
import { AppFrame } from 'components/AppFrame';
import { Container } from 'components/Container';
import { Panel } from 'components/Panel';
import { Table } from 'components/Table';
import { PageFrame } from 'components/AppFrame/PageFrame/PageFrame';
import { Section } from 'components/Section';
import { Button } from 'components/Button';

export const Emails: React.FC = props => {
	const history = useHistory();
	const data = React.useMemo(
		() => [
			{
				name: 'Introduction Email',
				dateSent: '2020/04/21',
				status: 'Sent'
			},
			{
				name: 'April News Letter',
				dateSent: '2020/04/01',
				status: 'Sent'
			},
			{
				name: 'March News Letter',
				dateSent: '2020/03/01',
				status: 'Sent'
			}
		],
		[]
	);

	const columns = React.useMemo(
		() => [
			{
				Header: 'Name',
				accessor: 'name' // accessor is the "key" in the data
			},
			{
				Header: 'Date Sent',
				accessor: 'dateSent'
			},
			{
				Header: 'Status',
				accessor: 'status'
			}
		],
		[]
	);

	return (
		<AppFrame>
			<PageFrame
				title={'Emails'}
				ContentRight={() => (
					<Button buttonType={'success'} onClick={() => history.push('/emails/email')}>
						New Email
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
