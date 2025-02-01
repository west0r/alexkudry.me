// components/anyPageWrapper/index.tsx
import { FC, PropsWithChildren, useState } from 'react';
import styles from './styles.module.scss';
import {Header} from "../../components/global/header";
import {InteractiveText} from "../../atoms/interactiveText";
import {strings} from "../../i18n/i18n.ts";
import {Footer} from "../../components/global/footer";
import {useNavigate} from "react-router-dom";
import { LINKS } from '../../constants/strings.ts'
import { ROUTES } from '../../constants/routes.ts';

export const AnyPageWrapper: FC<PropsWithChildren> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div className={styles.wrapper}>
            <Header
                isMenuOpen={isMenuOpen}
                onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
                signUpButtonProps={{
                    text: strings.header.signUp,
                    onClick: () => window.open(LINKS.CALENDLY)
                }}
            >
                {Object.values(ROUTES).map(({ path, title }) => (
                    <InteractiveText
                        key={path}
                        text={title}
                        onClick={() => navigate(path)}
                    />
                ))}
            </Header>

            <div className={styles.minMarginContainer}>
                <main className={styles.content}>{children}</main>
            </div>

            <Footer links={[
                {
                    label: strings.footer.contact.label,
                    title: strings.footer.contact.name,
                    href: LINKS.TELEGRAM_CONTACT,
                },
                {
                    label: strings.footer.channel.label,
                    title: strings.footer.channel.name,
                    href: LINKS.TELEGRAM_CHANNEL,
                },
            ]} />
        </div>
    );
};
