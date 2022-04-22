import style from './Tag.module.css';
import {FC, ReactNode} from 'react';
import {JSX} from '@babel/types';
import cn from 'classnames';


interface TagType {
    href?: string;
    color: 'ghost' | 'green' | 'red' | 'grey';
    children: ReactNode;
}

export const Tag: FC<TagType> = ({href, color, children}): JSX.Element => {
    return (
        <div className={cn(style.tag, {
            [style.ghost]: color === 'ghost',
            [style.green]: color === 'green',
            [style.red]: color === 'red',
            [style.grey]: color === 'grey',
        })}>
            {href ? <a href={href}>{children}</a> : <>{children}</>}
        </div>
    );
};