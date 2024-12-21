import { FC, PropsWithChildren, useEffect } from 'react';
import styles from './styles.module.scss';

interface MobileMenuProps {
    isOpen: boolean;
}

export const MobileMenu: FC<PropsWithChildren & MobileMenuProps> = ({ children, isOpen }) => {
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }, [isOpen]);

    return (
        <div className={styles.overlay} data-open={isOpen}>
            <nav className={styles.menu}>
                <div className={styles.menuItems}>
                    {children}
                </div>
            </nav>
        </div>
    );
};