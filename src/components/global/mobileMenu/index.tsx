import { FC, PropsWithChildren, useEffect } from 'react';
import styles from './styles.module.scss';

interface MobileMenuProps {
    isOpen: boolean;
}

export const MobileMenu: FC<PropsWithChildren & MobileMenuProps> = ({ children, isOpen }) => {
    useEffect(() => {
        const isMobile = window.innerWidth < 768; // Такое же значение как в variables.scss
        document.body.style.overflow = isOpen && isMobile ? 'hidden' : '';

        const handleResize = () => {
            const isMobile = window.innerWidth < 768;
            document.body.style.overflow = isOpen && isMobile ? 'hidden' : '';
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
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