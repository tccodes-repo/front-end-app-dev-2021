import React from "react";
import css from './Navigation.module.scss';


export const Navigation: React.FC = props => {
  return (
    <ul className={css.mainNavigation}>
      <li><a href="#">Overview</a></li>
      <li><a href="#">Emails</a></li>
      <li><a href="#">Recipients</a></li>
      <li><a href="#">Templates</a></li>
    </ul>
  );
}


