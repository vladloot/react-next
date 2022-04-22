import style from './Parahraph.module.css';
import {FC, ReactNode} from 'react';
import {JSX} from '@babel/types';
import cn from 'classnames';

interface ParagraphType {
    textSize?: 'small' | 'large';
    children: ReactNode;
}

export const Paragraph: FC<ParagraphType> = ({textSize, children}): JSX.Element => {
    return (
        <p className={cn(style.paragraph, {
            [style.small]: textSize === 'small',
            [style.large]: textSize === 'large',
        })}>
            {children}
        </p>
    );
};