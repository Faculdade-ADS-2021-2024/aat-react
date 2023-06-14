import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Menu } from '../../components/Menu/Menu';
import { AuthProvider, AuthContext } from '../../contexts/auth';

import style from './Home.module.css';

import { CategoriaPage } from '../Categoria/CategoriaPage';


export function Home() {

    function Private({ children }) {
        const { authenticated, loading } = useContext(AuthContext);

        if(loading) {
            return <div className="loading">Carregando...</div>
        }

        if(!authenticated) {
            return <Navigate to="/login" />
        }

        return children;
    }

    return (
        <div className={style.home}>
            <AuthProvider>
                <Menu />
                <Routes>
                    <Route exact path="/categoria" element={<Private><CategoriaPage /></Private>} />
                </Routes>
            </AuthProvider>
        </div>
    )
}