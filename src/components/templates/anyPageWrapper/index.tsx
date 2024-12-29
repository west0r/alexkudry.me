// components/anyPageWrapper/index.tsx
import { FC, PropsWithChildren, useState } from 'react';
import styles from './styles.module.scss';
import {Header} from "../../global/header";
import {InteractiveText} from "../../../atoms/interactiveText";
import {strings} from "../../../i18n/i18n.ts";
import {Footer} from "../../global/footer";

export const AnyPageWrapper: FC<PropsWithChildren> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className={styles.wrapper}>
            <Header
                isMenuOpen={isMenuOpen}
                onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
                signUpButtonProps={{
                    text: strings.header.signUp,
                    onClick: () => {}
                }}
            >
                <InteractiveText text={strings.header.menu.about} onClick={() => {}} />
                <InteractiveText text={strings.header.menu.skills} onClick={() => {}} />
                <InteractiveText text={strings.header.menu.pricing} onClick={() => {}} />
                <InteractiveText text={strings.header.menu.articles} onClick={() => {}} />
            </Header>

            <main className={styles.content}>
                {children}
            </main>

            <Footer links={[
                {
                    label: strings.footer.contact.label,
                    title: strings.footer.contact.name,
                    href: strings.footer.contact.link,
                },
                {
                    label: strings.footer.channel.label,
                    title: strings.footer.channel.name,
                    href: strings.footer.channel.link,
                },
            ]} />
        </div>
    );
};
