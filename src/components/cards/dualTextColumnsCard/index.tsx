import { FC } from 'react';
import { Card } from '../../../atoms/card';
import { Text } from '../../../atoms/text';
import styles from './styles.module.scss';

interface TextGroup {
    label: string;
    title: string;
}

interface DualTextColumnsCardProps {
    leftGroup: TextGroup;
    rightGroup: TextGroup;
}

export const DualTextColumnsCard: FC<DualTextColumnsCardProps> = ({leftGroup, rightGroup}) => (
    <Card>
        <div className={styles.container}>
            <div className={styles.group}>
                <Text text={leftGroup.label} size="body" color="secondary" />
                <Text text={leftGroup.title} size="body" color="primary" />
            </div>
            <div className={styles.group}>
                <Text text={rightGroup.label} size="body" color="secondary" />
                <Text text={rightGroup.title} size="body" color="accent" />
            </div>
        </div>
    </Card>
);