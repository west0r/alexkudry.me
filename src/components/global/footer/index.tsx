// molecules/footer/index.tsx
import { FC } from 'react';
import { Text } from '../../../atoms/text';
import { InteractiveText } from '../../../atoms/interactiveText';
import styles from './styles.module.scss';

interface FooterLink {
    label: string;
    title: string;
    href: string;
}

interface FooterProps {
    links: FooterLink[];
}

interface FooterTextGroupProps {
    label: string;
    title: string;
    onClick?: () => void;
}

const FooterTextGroup: FC<FooterTextGroupProps> = ({label, title, onClick}) => (
    <div className={styles.textGroup}>
        <Text
            text={label}
            size="body"
            color="secondary"
        />
        <InteractiveText
            text={title}
            onClick={onClick}
        />
    </div>
);

export const Footer: FC<FooterProps> = ({ links }) => (
    <footer className={styles.footer}>
        <div className={styles.container}>
            {links.map((link, index) => (
                <FooterTextGroup
                    key={index}
                    label={link.label}
                    title={link.title}
                    onClick={() => window.open(link.href)}
                />
            ))}
        </div>
    </footer>
);