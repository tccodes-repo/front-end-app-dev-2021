import React from 'react';
import { useHistory } from 'react-router-dom';
import { AppFrame } from 'components/AppFrame';
import { Container } from 'components/Container';
import { Panel } from 'components/Panel';
import { Table } from 'components/Table';
import { PageFrame } from 'components/AppFrame/PageFrame/PageFrame';
import { Section } from 'components/Section';
import { Button } from 'components/Button';
import { CellValue } from 'react-table';

export const Templates: React.FC = props => {
	const history = useHistory();
	const data = React.useMemo(
		() => [
			{
				name: 'Template 1',
				status: true
			},
			{
				name: 'Template 2',
				status: false,
				removeLabel: 'remove'
			},
			{
				name: 'Template 3',
				status: false,
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
				Header: 'In Use',
				accessor: 'status'
			},
			{
				Header: 'Remove',
				accessor: 'removeLabel',
				Cell: (row: CellValue) => <a href='https://google.com'>{row.value}</a>
			}
		],
		[]
	);

	return (
		<AppFrame>
			<PageFrame
				title={'Templates'}
				ContentRight={() => (
					<Button buttonType={'success'} onClick={() => history.push('/templates/template')}>
						New Template
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
