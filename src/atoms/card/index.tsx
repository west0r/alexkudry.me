import { FC, PropsWithChildren } from "react";

import styles from './styles.module.scss';

export const Card: FC<PropsWithChildren> = ({ children }) => (
    <div className={styles.card}>
        {children}
    </div>
)