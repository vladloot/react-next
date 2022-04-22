import style from './Button.module.css';
import {FC, ReactNode} from 'react';
import {JSX} from '@babel/types';
import cn from 'classnames';

interface ButtonProps {
    appearance: 'primary' | 'ghost';
    children: ReactNode;
    arrow?: 'right' | 'down' | 'none';
}

export const Button: FC<ButtonProps> = ({children, arrow = 'none', appearance}): JSX.Element => {
    return (
        <button className={cn(style.button, {
            [style.primary]: appearance === 'primary',
            [style.ghost]: appearance === 'ghost',
        })}>
            {children}
            {arrow !== 'none' && <span className={cn(style.arrow, {
                [style.down]: arrow === 'down'
            })}>
                <img src={appearance === 'primary' ? './whiteArrow.svg' : './blackArrow.svg'} />
            </span>}
        </button>
    );
};