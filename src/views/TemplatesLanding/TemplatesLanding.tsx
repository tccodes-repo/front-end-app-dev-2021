import React from 'react';
import { AppFrame } from 'components/AppFrame';
import { Container } from 'components/Container';
import { Panel } from 'components/Panel';
import { Table } from 'components/Table';
import { PageFrame } from 'components/AppFrame/PageFrame/PageFrame';
import { Button } from 'components/Button';

export const TemplatesLanding: React.FC = props => {
	const data = React.useMemo(
		() => [
			{
				name: 'Template 1',
				status: true
			},
			{
				name: 'Template 2',
				status: false,
				remove: () => <a href='#'>Remove</a>
			},
			{
				name: 'Template 3',
				status: false,
				remove: () => <a href='#'>Remove</a>
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
				Header: 'In Use',
				accessor: 'status'
			},
			{
				Header: 'Remove',
				accessor: 'remove'
			}
		],
		[]
	);

	return (
		<AppFrame>
			<PageFrame
				title={'Templates'}
				ContentRight={() => <Button buttonType='success'>New Template</Button>}
			>
				<Container>
					<Panel>
						<Table columns={columns} data={data} />
					</Panel>
				</Container>
			</PageFrame>
		</AppFrame>
	);
};
