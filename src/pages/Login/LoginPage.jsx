import { useState, useContext } from 'react';

import { AuthContext } from '../../contexts/auth';

import style from './Login.module.css';

import bg from '../../assets/bg.jpg';
import Logo from '../../assets/Logo.svg';

export function LoginPage() {

    const { logar } = useContext(AuthContext);

    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        logar(login, senha);
    }

    return(
        <div className={style.login}>
            <div className={style.bg}>
                <img src={bg} alt="background"/>
            </div>

            <div className={style.formLogin}>
                <div className={style.logo}>
                    <img src={Logo} alt="Logo aat" />
                </div>

                <form onSubmit={handleSubmit}>

                    <div className={style["input-container"]}>
                        <label htmlFor="login">Login</label>
                        <input 
                            type="text"
                            id='login'
                            name='login'
                            placeholder='Digite seu Usuário'
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                         />
                    </div>

                    <div className={style["input-container"]}>
                        <label htmlFor="senha">Senha</label>
                        <input 
                            type="password"
                            id='senha'
                            name='senha'
                            placeholder='Digite seu Senha'
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                         />
                    </div>

                    <div className={style["control-container"]}>
                        <button type='submit'> entrar </button>
                    </div>
                </form>
            </div>
        </div>
    )
}