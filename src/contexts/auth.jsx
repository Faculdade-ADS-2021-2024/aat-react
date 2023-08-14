import { useState, useEffect, createContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { createSession } from '../service/loginService';
import { api } from '../service/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = sessionStorage.getItem('token');

        if(recoveredUser) {
            api.defaults.headers.Authorization = `Bearer ${recoveredUser}`;
            setUser(recoveredUser);
        }

        setLoading(false);

    }, []);

    async function logar(login, senha) {

        const response = await createSession(login, senha);

        const loggedUser = response.data;

        sessionStorage.setItem("token", loggedUser);

        api.defaults.headers.Authorization = `Bearer ${loggedUser}`;

        setUser(loggedUser);
        navigate("/");
    }

    function logout() {
        sessionStorage.removeItem('token');
        api.defaults.headers.Authorization = null;
        setUser(null);
        navigate("/login");
    }

    return (
        <AuthContext.Provider value={{authenticated: !!user, user, loading, logar, logout}}>
            {children}
        </AuthContext.Provider>
    )
}