import React from 'react';
import { Link } from 'react-router-dom';
import css from './Logo.module.scss';
import AssetLogo from 'assets/logo.png';

export const Logo: React.FC = () => (
	<Link to='/'>
		<img src={AssetLogo} className={css.logo} alt='Emailer Logo' />
	</Link>
);
