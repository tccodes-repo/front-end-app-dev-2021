import React from 'react';
import { AppFrame } from 'components/AppFrame';
import { Container } from 'components/Container';
import { Panel } from 'components/Panel';
import { Table } from 'components/Table';
import { PageFrame } from 'components/AppFrame/PageFrame/PageFrame';
import { Section } from 'components/Section';
import { Button } from 'components/Button';
import { CellValue } from 'react-table';

export const RecipientsLanding: React.FC = props => {
	const data = React.useMemo(
		() => [
			{
				name: 'Example Person 1',
				email: 'example1@example.com',
				removeLabel: 'remove'
			},
			{
				name: 'Example Person 2',
				email: 'example2@example.com',
				removeLabel: 'remove'
			},
			{
				name: 'Example Person 3',
				email: 'example3@example.com',
				removeLabel: 'remove'
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
				Header: 'Email',
				accessor: 'email'
			},
			{
				Header: 'Remove',
				accessor: 'removeLabel',
				Cell: (row: CellValue) => <a href='#'>{row.value}</a>
			}
		],
		[]
	);

	return (
		<AppFrame>
			<PageFrame
				title={'Recipients'}
				ContentRight={() => <Button buttonType='success'>New Recipient</Button>}
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
