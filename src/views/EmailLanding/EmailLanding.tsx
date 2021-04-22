import React from 'react';
import { AppFrame } from 'components/AppFrame';
import { Container } from 'components/Container';
import { Panel } from 'components/Panel';
import { Table } from 'components/Table';
import { PageFrame } from 'components/AppFrame/PageFrame/PageFrame';
import { Button } from 'components/Button';

export const EmailLanding: React.FC = props => {
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
			<PageFrame title={'Emails'} ContentRight={() => <Button buttonType='success'>New Email</Button>}>
				<Container>
					<Panel>
						<Table columns={columns} data={data} />
					</Panel>
				</Container>
			</PageFrame>
		</AppFrame>
	);
};
