import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from './constants/routes';

export const RedirectHandler = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const redirectPath = params.get('redirect');

        if (redirectPath) {
            const routeExists = Object.values(ROUTES).some(route => route.path === redirectPath);

            if (routeExists) {
                navigate(redirectPath, { replace: true });
            } else {
                navigate('/404', { replace: true });
            }
        }
    }, [navigate]);

    return null;
};