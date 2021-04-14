import React from 'react';
import css from './HomeView.module.scss';
import { AppFrame } from 'components/AppFrame';
import { Section } from 'components/Section';
import { Container } from 'components/Container';
import { Panel } from 'components/Panel';
import { Table } from 'components/Table';

export const HomeView: React.FC = props => {
	const data = React.useMemo(
		() => [
			{
				col1: 'Hello',
				col2: 'World'
			},
			{
				col1: 'react-table',
				col2: 'rocks'
			},
			{
				col1: 'whatever',
				col2: 'you want'
			}
		],
		[]
	);

	const columns = React.useMemo(
		() => [
			{
				Header: 'Column 1',
				accessor: 'col1' // accessor is the "key" in the data
			},
			{
				Header: 'Column 2',
				accessor: 'col2'
			}
		],
		[]
	);

	return (
		<AppFrame title='Overview'>
			<Section>
				<Container className={css.overviewPanels}>
					<Panel title='Total email sent' className={css.overviewPanel}>
						<span className='h3'>20</span>
					</Panel>
					<Panel title='Total recipients' className={css.overviewPanel}>
						<span className='h3'>200</span>
					</Panel>
					<Panel title='Total active templates' className={css.overviewPanel}>
						<span className='h3'>4</span>
					</Panel>
				</Container>
			</Section>
			<Section title='Recently sent emails'>
				<Container>
					<Panel>
						<Table columns={columns} data={data} />
					</Panel>
				</Container>
			</Section>
		</AppFrame>
	);
};
