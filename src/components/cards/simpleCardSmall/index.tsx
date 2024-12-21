import { FC } from 'react';
import { Card } from '../../../atoms/card';
import { Text } from '../../../atoms/text';
import { InteractiveText } from '../../../atoms/interactiveText';
import styles from './styles.module.scss';

interface SimpleCardSmallProps {
    label: string;
    title: string;
    onTitleClick?: () => void;
}

export const SimpleCardSmall: FC<SimpleCardSmallProps> = ({label, title, onTitleClick}) => (
    <Card>
        <div className={styles.container}>
            <Text
                text={label}
                size="body"
                color="primary"
            />
            <InteractiveText
                text={title}
                onClick={onTitleClick}
            />
        </div>
    </Card>
);