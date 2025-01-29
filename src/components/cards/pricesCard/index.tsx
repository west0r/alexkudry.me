import {FC, PropsWithChildren} from 'react';
import styles from "./styles.module.scss";
import { Text } from '../../../atoms/text';
import {Card} from "../../../atoms/card";

export interface PriceCardProps {
    prices: PricePartProps[]
}

export interface PricePartProps {
    title: string;
    price: string;
    subtitle?: string;
}

export const PriceCard: FC<PropsWithChildren & PriceCardProps> = ({children, prices}) => {
    return (
        <Card>
            <div className={styles.fullCardContainer}>
                <div className={styles.pricesContainer}>
                    {prices.map((price, index) => (
                        <PricePart key={index} {...price} />
                    ))}
                </div>

                {children && <div className={styles.childrenContainer}>
                    {children}
                </div>}
            </div>
        </Card>
    );
};

export const PricePart: FC<PricePartProps> = ({title, price, subtitle}) => {
    return (
        <div className={styles.pricePartContainer}>
            <Text text={title} size={"body"} color={"primary"}></Text>
            <div className={styles.pricePartSubcontainer}>
            <Text text={price} size={"h2"} color={"primary"}></Text>
                <div className={styles.priceSubtitleContainer}>
                    {subtitle && <Text text={subtitle} size={"body"} color={"secondary"}/>}
                </div>
            </div>
        </div>
    );
};