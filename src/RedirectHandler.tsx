import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from './constants/routes';

export const RedirectHandler: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const redirectPath = params.get('redirect');

        if (redirectPath) {
            const decodedPath = decodeURIComponent(redirectPath);
            const routeExists = Object.values(ROUTES).some(route => route.path === decodedPath);

            if (routeExists) {
                navigate(decodedPath, { replace: true });
            } else {
                navigate('/', { replace: true });
            }
        }
    }, [navigate]);

    return null;
};