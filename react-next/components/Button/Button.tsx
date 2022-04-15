import style from './Button.module.css';
import {FC, ReactNode} from 'react';
import {JSX} from '@babel/types';
import cn from 'classnames';

interface ButtonProps {
    appearance: 'primary' | 'ghost';
    children: ReactNode;
}

export const Button: FC<ButtonProps> = ({children, appearance}): JSX.Element => {
    return (
        <button className={style.button}>
            {children}
        </button>
    );
};