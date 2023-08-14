import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import * as icon from "@phosphor-icons/react";

import style from './ProdutoPage.module.css';
import { getProduto } from '../../service/produtoService';

export function ProdutoPage() {

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        getProdutos();
    }, [])

    async function getProdutos() {
        const response = await getProduto();
        setProdutos(response.data);
    }

    return(
        <div className={style.produto}>
            <header className={style.header}>
                <h1 className={style.titulo}>Produto</h1>
                <Link to="/novoproduto" className={style.btnNew}>Novo</Link>
            </header>
            <div className={style.container}>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            produtos.map((produto, index) => (
                                <tr key={index}>
                                    <th>{produto.Nome}</th>
                                    <th>{produto.Descricao}</th>
                                    <th>
                                        <button className={style.acoes}><icon.Pencil size={28} /></button>
                                        <button className={style.acoes}><icon.Trash size={28} /></button>
                                    </th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}