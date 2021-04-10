import React from "react";
import classes from 'classnames';
import css from './MainNavigation.module.scss';
import { Navigation } from "../Navigation";


export const MainNavigation: React.FC = props => {
  return (
    <nav className={css.nav}>
      <div className="logo">Logo</div>
      <Navigation />
      <ul className={css.accountMenu}>
        <li><a href="#">Account</a></li>
      </ul>
    </nav>
  );
}


