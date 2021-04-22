import React from 'react';
import css from './AppFrame.module.scss';
import { Footer } from 'components/AppFrame/Footer';
import { MainNavigation } from 'components/AppFrame/MainNavigation';

export const AppFrame: React.FC = props => {
	const { children } = props;
	return (
		<div className={css.appFrame}>
			<MainNavigation />
			<div className={css.main}>{children}</div>
			<Footer />
		</div>
	);
};
