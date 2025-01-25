import { FC } from 'react';
import { Text } from '../../../atoms/text';
import styles from './styles.module.scss';

export interface AboutCardProps {
    title: string;
    imageUrl: string;
    description: string;
    facts: Fact[];
}

export interface Fact {
    title: string;
    description: string;
}

export const AboutCard: FC<AboutCardProps> = ({title, imageUrl, description, facts}) => (
    <div className={styles.container}>
        <Text text={title} size={"h1"} color={"primary"}></Text>

        <div className={styles.content}>
            <img className={styles.avatar} src={imageUrl}/>

            <div className={styles.texts}>
                <Text text={description} size={"body"} color={"primary"}></Text>

                <div className={styles.facts}>
                    {Object.values(facts).map(({ title, description }) => (
                    <div className={styles.fact}>
                        <Text text={title} size={"h2"} color={"primary"}></Text>
                        <Text text={description} size={"body"} color={"secondary"}></Text>
                    </div>
                    ))}
                </div>

            </div>
        </div>
    </div>
);