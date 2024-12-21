import { FC, PropsWithChildren } from 'react';
import styles from './styles.module.scss';
import ArrowButton, { ArrowButtonProps } from "../../../atoms/arrowButton";
import { BurgerButton } from "../../../atoms/burgerButton";
import { MobileMenu } from "../mobileMenu";

interface HeaderProps {
    isMenuOpen: boolean;
    onMenuToggle: () => void;
    signUpButtonProps: ArrowButtonProps;
}

export const Header: FC<PropsWithChildren & HeaderProps> = ({
                                                                signUpButtonProps,
                                                                children,
                                                                isMenuOpen,
                                                                onMenuToggle,
                                                            }) => (
    <>
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.burgerButton}>
                    <BurgerButton
                        isSelected={isMenuOpen}
                        onClick={onMenuToggle}
                    />
                </div>

                <nav className={styles.desktopLinks}>
                    {children}
                </nav>
                <ArrowButton {...signUpButtonProps} />
            </div>
        </header>
        <MobileMenu isOpen={isMenuOpen}>
            {children}
        </MobileMenu>
    </>
);