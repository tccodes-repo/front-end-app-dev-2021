import React from "react";
import classes from 'classnames';
import css from './Input.module.scss';
import { TInput } from 'common/types/TInput';

export const Input: React.FC<TInput> = (props) => {
  const { label, className } = props;

  return (
    <>
      {label && (<label className={css.label}>{label}</label>)}
      <input className={classes(css.input, className)} {...props} ></input>
    </>
  )
}

