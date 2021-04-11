import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';

import { Table } from './Table';

export default {
	title: 'Example/Table',
	component: Table
	// argTypes: {
	//   buttonType: { control: { type: 'radio', options: ['default', 'success', 'danger'] } },
	// },
} as Meta;

export const DefaultTable = () => {
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

	return <Table columns={columns} data={data} />;
};
