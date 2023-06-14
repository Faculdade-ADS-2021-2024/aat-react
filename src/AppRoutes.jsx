import { useContext } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';


import { Menu } from './components/Menu/Menu';
import { LoginPage } from './pages/Login/LoginPage';
import { Home } from './pages/Home/Home';
import { CategoriaPage } from './pages/Categoria/CategoriaPage';

import { AuthProvider, AuthContext } from './contexts/auth';


export function AppRoutes() {

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
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path='/login' element={<LoginPage />} />
                    <Route exect path='/*' element={<Private><Home /></Private>} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}