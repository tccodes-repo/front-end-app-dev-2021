import React from 'react';
import css from './MainNavigation.module.scss';
import { Navigation } from '../Navigation';
import IconAccount from 'assets/icon-account.png';
import { Logo } from '../Logo/Logo';

export const MainNavigation: React.FC = () => {
	return (
		<nav className={css.nav}>
			<Logo />
			<Navigation />
			<ul className={css.accountMenu}>
				<li>
					<a href='https://google.com'>
						<img src={IconAccount} title='My Account' alt='My Account' />
					</a>
				</li>
			</ul>
		</nav>
	);
};
