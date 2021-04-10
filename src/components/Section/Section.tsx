import React from "react";
import css from './Section.module.scss';

export const Section: React.FC = props => <section className={css.section}>{props.children}</section>

