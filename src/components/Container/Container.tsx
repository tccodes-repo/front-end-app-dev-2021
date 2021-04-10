import React from 'react';
import css from './Container.module.scss';

export const Container: React.FC = props => <div className={css.container}>{props.children}</div>;
