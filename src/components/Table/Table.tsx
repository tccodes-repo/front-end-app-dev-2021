import React from 'react';
import classes from 'classnames';
import css from './Table.module.scss';
import { useTable, Column } from 'react-table';

interface ITableProps {
	columns: Column[];
	data: {}[];
}

export const Table: React.FC<ITableProps> = props => {
	const { columns, data } = props;

	const tableInstance = useTable({ columns, data });
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

	return (
		<table className={css.tableDom} {...getTableProps()}>
			<thead>
				{headerGroups.map(headerGroup => (
					<tr className={css.tr} {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map(column => (
							<th className={css.th} {...column.getHeaderProps()}>
								{column.render('Header')}
							</th>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map(row => {
					prepareRow(row);
					return (
						<tr className={css.tr} {...row.getRowProps()}>
							{row.cells.map(cell => (
								<td className={css.td} {...cell.getCellProps()}>
									{cell.render('Cell')}
								</td>
							))}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};
