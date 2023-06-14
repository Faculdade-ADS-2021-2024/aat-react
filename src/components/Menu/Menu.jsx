import { Link, useNavigate } from 'react-router-dom';

import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

import style from './Menu.module.css';
import Logo from '../../assets/Logo.svg';

import * as icon from "@phosphor-icons/react";

export function Menu() {

    const { authenticated, logout } = useContext(AuthContext);

    function handleLogout() {
        logout();
    }

    return (
        <div className={style.menu}>
            <div className={style.logo}>
                <img src={Logo} alt="Logo aat" />
            </div>
            <div className={style.options}>
                <div className={style.item}>
                    <Link to='/produtor' className={style["item-option"]}>
                        <icon.Person size={32} />
                        <span>Produtores</span>
                    </Link>
                    <Link to='/produto' className={style["item-option"]}>
                        <icon.Plant size={32} />
                        <span>Produtos</span>
                    </Link>
                    <Link to="/categoria" className={style["item-option"]}>
                        <icon.ReadCvLogo size={32} />
                        <span>Categoria</span>
                    </Link>
                    <Link to='/usuario' className={style["item-option"]}>
                        <icon.User size={32} />
                        <span>Usuários</span>
                    </Link>
                </div>
                <div className={style.logout}>
                    <button title="Sair" onClick={handleLogout}><icon.ArrowFatLineLeft size={32} /> Sair</button>
                </div>
            </div>
        </div>
    )
}