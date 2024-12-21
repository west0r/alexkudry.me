// atoms/interactive-text/index.tsx
import { FC } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

interface InteractiveTextProps {
    text: string;
    onClick?: () => void;
}

export const InteractiveText: FC<InteractiveTextProps> = ({text, onClick}) => (
    <button
        className={classNames(styles.text)}
        onClick={onClick}
    >
        {text}
    </button>
);