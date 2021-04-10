import React from 'react';
import css from './Footer.module.scss';
import { Navigation } from '../Navigation';
import { Container } from 'components/Container';
import { Logo } from 'components/AppFrame/Logo';

export const Footer: React.FC = props => {
	return (
		<footer className={css.footer}>
			<div className={css.topFooter}>
				<Container>
					<div className={css.topFooterLayout}>
						<a href='#'>
							<Logo />
						</a>
						<Navigation themeColor={'light'} />
					</div>
				</Container>
			</div>
			<div className={css.bottomFooter}>
				<Container>
					<p>
						TCCOdes FrontEnd App Development |{' '}
						<a href='https://github.com/tccodes-repo/front-end-app-dev-2021' target='_blank'>
							Github Repository
						</a>
					</p>
				</Container>
			</div>
		</footer>
	);
};
