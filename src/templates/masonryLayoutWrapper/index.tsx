import React, {
    FC,
    PropsWithChildren,
    ReactNode,
} from 'react';
import Masonry from 'react-masonry-css';
import styles from './styles.module.scss';
import { reversedRows, useIsDesktop } from '../../utils';

export interface MasonryLayoutWrapperProps {
    desktopColumnsCount: number;
    header?: ReactNode;
    footer?: ReactNode;
}

export const MasonryLayoutWrapper: FC<PropsWithChildren & MasonryLayoutWrapperProps> = ({
    desktopColumnsCount,
    children,
    header,
    footer
}) => {
    const mobileBreakpoint = parseInt(styles.mobileBreakpoint.replace(/[^0-9]/g, ''));
    const mobileColumnsCount = parseInt(styles.mobileColumns);

    const childrenArray = React.Children.toArray(children);

    const isDesktop = useIsDesktop(mobileBreakpoint);
    const displayedChildren = isDesktop
        ? reversedRows(childrenArray, desktopColumnsCount)
        : childrenArray;

    const isLastRowFull = childrenArray.length % desktopColumnsCount === 0
    const shouldRenderFooterInMasonry = isDesktop && !isLastRowFull

    const breakpointColumns = {
        default: desktopColumnsCount,
        [mobileBreakpoint]: mobileColumnsCount
    };

    return (
        <div className={styles.mainContainer}>
            {header && <div>{header}</div>}

            <div className={styles.masonryWrapper}>
                <Masonry
                    breakpointCols={breakpointColumns} // количество колонок
                    className={styles.masonryContainer}
                    columnClassName={styles.masonryColumn}
                >
                    {displayedChildren}

                    {shouldRenderFooterInMasonry && footer && <div className={styles.fixedFooter}>{footer}</div>}
                </Masonry>
            </div>

            {!shouldRenderFooterInMasonry && footer && <div>{footer}</div>}
        </div>
    )
}
