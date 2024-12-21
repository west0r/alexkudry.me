import { FC } from "react";
import styles from './styles.module.scss';

type TextSize = 'body' | 'h1' | 'h2';
type TextColor = 'primary' | 'secondary' | 'accent';

interface TextProps {
    text: string;
    size: TextSize;
    color: TextColor;
}

export const Text: FC<TextProps> = ({text, size = 'body', color = 'primary'}) => (
    <div className={`${styles.text} ${styles[size]} ${styles[color]}`}>
        {text}
    </div>
);