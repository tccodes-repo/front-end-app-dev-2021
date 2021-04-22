import React from 'react';
import classes from 'classnames';
import css from './AppFrame.module.scss';
import { Footer } from 'components/AppFrame/Footer';
import { MainNavigation } from 'components/AppFrame/MainNavigation';
import { PageFrame } from 'components/AppFrame/PageFrame';

export const AppFrame: React.FC = props => {
	const { children } = props;
	return (
		<>
			<MainNavigation />
			{children}
			<Footer />
		</>
	);
};
