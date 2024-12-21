import { FC } from 'react';
import { Card } from '../../../atoms/card';
import { Text } from '../../../atoms/text';
import { InteractiveText } from '../../../atoms/interactiveText';
import styles from './styles.module.scss';

interface DatedCardProps {
    date: string;
    title: string;
    subtitle: string;
    onSubtitleClick?: () => void;
}

export const DatedCard: FC<DatedCardProps> = ({date, title, subtitle, onSubtitleClick}) => (
    <Card>
        <div className={styles.container}>
            <div className={styles.topGroup}>
                <Text text={date} size="body" color="secondary" />
                <Text text={title} size="body" color="primary" />
            </div>
            <InteractiveText text={subtitle} onClick={onSubtitleClick} />
        </div>
    </Card>
);