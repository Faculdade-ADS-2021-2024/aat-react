import { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { Menu } from '../../components/Menu/Menu';
import { AuthProvider, AuthContext } from '../../contexts/auth';

import style from './Home.module.css';

import { CategoriaPage } from '../Categoria/CategoriaPage';
import { NovaCategoriaPage } from '../Categoria/NovaCategogiaPage';
import { ProdutoPage } from '../Produto/ProdutoPage';
import { NovoProdutoPage } from '../Produto/NovoProdutoPage';


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
                    <Route exact path="/categoria/:id" element={<Private><NovaCategoriaPage /></Private>} />
                    <Route exact path="/novacategoia" element={<Private><NovaCategoriaPage /></Private>} />

                    <Route exact path="/produto" element={<Private><ProdutoPage /></Private>} />
                    <Route exact path="/produto/:id" element={<Private><NovoProdutoPage /></Private>} />
                    <Route exact path="/novoproduto" element={<Private><NovoProdutoPage /></Private>} />
                </Routes>
            </AuthProvider>
        </div>
    )
}