import React from 'react';
import css from './AuthFrame.module.scss';

export const AuthFrame: React.FC = props => {
	const { children } = props;
	return (
		<div className={css.appFrame}>
			<div
				className={css.loginBackground}
				style={{ backgroundImage: `url(/images/login-background.png)` }}
			></div>
			<div className={css.main}>{children}</div>
		</div>
	);
};
