import { useEffect, useState } from 'react';

export const useAuthCheck = () => {
    const [authenticated, setAuthenticated] = useState<boolean>(false);
    const [checkingAuth, setCheckingAuth] = useState<boolean>(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                setAuthenticated(true);
            } catch (e) {
                setAuthenticated(false);
            }
            setCheckingAuth(false);
        };

        checkAuth();
    }, []);

    return {
        authenticated,
        checkingAuth,
    };
};
