import styles from './styles.module.scss';
import ArrowIcon from '../../../assets/icons/arrow.svg';

export interface ArrowButtonProps {
    text: string;
    onClick?: () => void;
}

const ArrowButton = ({ text, onClick }: ArrowButtonProps) => (
    <button className={styles.button} onClick={onClick}>
        <span className={styles.text}>{text}</span>
        <img src={ArrowIcon} alt="" className={styles.icon} />
    </button>
);

export default ArrowButton;