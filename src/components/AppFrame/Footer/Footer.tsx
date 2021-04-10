import React from "react";
import css from './Footer.module.scss';
import { Navigation } from "../Navigation";
import { Section } from 'components/Section';



export const Footer: React.FC = props => {
  return (
    <footer className={css.footer}>
      <div className={css.topFooter}>
        <Section>
          <div className={css.topFooterLayout}>
            <a href="#">Logo</a>
            <Navigation />
          </div>
        </Section>
      </div>
      <div className={css.bottomFooter}>
        <Section>
          <p>TCCOdes FrontEnd App Development | <a href="https://github.com/tccodes-repo/front-end-app-dev-2021" target="_blank">Github Repository</a></p>
        </Section>
      </div>
    </footer>
  );
}


