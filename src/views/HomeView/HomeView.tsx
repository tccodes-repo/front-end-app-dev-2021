import React from 'react';
import css from './HomeView.module.scss';
import { AppFrame } from 'components/AppFrame';
import { Section } from 'components/Section';
import { Container } from 'components/Container';
import { Panel } from 'components/Panel';
import { Table } from 'components/Table';
import { PageFrame } from 'components/AppFrame/PageFrame/PageFrame';

export const HomeView: React.FC = props => {
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
			<PageFrame title={'Overview'}>
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
			</PageFrame>
		</AppFrame>
	);
};
