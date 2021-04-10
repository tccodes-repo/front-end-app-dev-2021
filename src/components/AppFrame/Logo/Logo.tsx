import React from 'react';
import css from './Logo.module.scss';
import AssetLogo from 'assets/logo.png';

export const Logo: React.FC = () => <img src={AssetLogo} className={css.logo} />;
