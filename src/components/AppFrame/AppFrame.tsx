import React from 'react';
import classes from 'classnames';
import css from './AppFrame.module.scss';
import { Footer } from 'components/AppFrame/Footer';
import { MainNavigation } from 'components/AppFrame/MainNavigation';
import { PageFrame } from 'components/AppFrame/PageFrame';

interface IAppFrame {
	title: string;
}

export const AppFrame: React.FC<IAppFrame> = props => {
	const { title, children } = props;
	return (
		<>
			<MainNavigation />
			<PageFrame title={title}>{children}</PageFrame>
			<Footer />
		</>
	);
};
