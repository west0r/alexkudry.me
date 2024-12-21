import { FC } from 'react';
import { Card } from '../../../atoms/card';
import { Text } from '../../../atoms/text';
import styles from './styles.module.scss';

interface SimpleCardBigProps {
    label: string;
    title: string;
}

export const SimpleCardBig: FC<SimpleCardBigProps> = ({label, title}) => (
    <Card>
        <div className={styles.container}>
            <Text text={label} size="h2" color="secondary" />
            <Text text={title} size="h2" color="primary" />
        </div>
    </Card>
);