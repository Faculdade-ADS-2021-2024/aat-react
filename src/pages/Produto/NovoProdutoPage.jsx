import { useState } from 'react';
import { Link } from 'react-router-dom';

import style from './ProdutoPage.module.css';

export function NovoProdutoPage() {

    const [produtos, setProdutos] = useState({
        Nome: "",
        Descricao: "",
    });

    function inputChange(e) {
        setProdutos({
            ...produtos,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className={style.novoProdutoPage}>
            <header className={style.header}>
                <h1 className={style.titulo}>Novo Produto</h1>
            </header>

            <div className={style.container}>
                <form >
                    <div className={style["input-container"]}>
                        <label htmlFor="nome">Nome</label>
                        <input 
                            type="text"
                            name='Nome'
                            id='nome'
                            placeholder='Nome'
                            value={produtos.Nome}
                            onChange={(e) => inputChange(e)}
                         />
                    </div>
                    <div className={style["input-container"]}>
                    <label htmlFor="descricao">Descrição</label>
                        <input 
                            type="text"
                            name='Descricao'
                            id='descricao'
                            placeholder='Descrição'
                            value={produtos.Descricao}
                            onChange={(e) => inputChange(e)}
                         />
                    </div>
                    <div className={style["control-container"]}>
                        <Link onClick={""} className={style.save}>Salvar</Link>
                        <Link to="/produto" className={style.cancel}>Cancelar</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}