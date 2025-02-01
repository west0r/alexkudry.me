import {useLayoutEffect, useState} from "react";

export function reversedRows<T>(array: T[], rowLength: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += rowLength) {
        result.push(array.slice(i, i + rowLength).reverse());
    }
    return result;
}

export function useIsDesktop(mobileBreakpoint: number): boolean {
    const [isDesktop, setIsDesktop] = useState<boolean>(true);

    useLayoutEffect(() => {
        const mediaQuery = window.matchMedia(`(min-width: ${mobileBreakpoint}px)`);
        const updateIsDesktop = (e: MediaQueryListEvent) => setIsDesktop(e.matches);

        // Устанавливаем первоначальное значение
        setIsDesktop(mediaQuery.matches);

        // Подписываемся на изменения медиазапроса
        mediaQuery.addEventListener('change', updateIsDesktop);

        return () => {
            mediaQuery.removeEventListener('change', updateIsDesktop);
        };
    }, [mobileBreakpoint]);

    return isDesktop;
}