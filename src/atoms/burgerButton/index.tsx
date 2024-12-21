import { FC } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

interface BurgerButtonProps {
    isSelected?: boolean;
    onClick?: () => void;
    disabled?: boolean;
}

export const BurgerButton: FC<BurgerButtonProps> = ({isSelected = false, onClick, disabled = false,}) => (
    <button
        className={classNames(styles.button, {
            [styles.selected]: isSelected,
            [styles.disabled]: disabled,
        })}
        onClick={onClick}
        disabled={disabled}
    >
        <div className={styles.iconWrapper}>
            <div className={styles.burgerIcon} />
            <div className={styles.crossIcon} />
        </div>
    </button>
);