import { useState } from 'react';
import { Link } from 'react-router-dom';

import { categoriaService, deleteCategoria } from '../../service/categoriaService';
import style from './CategoriaPage.module.css';

import * as icon from "@phosphor-icons/react";

export function CategoriaPage() {

    const [categorias, setCategorias] = useState([]);

    useState(() => {
        getCategoria();
    }, [])

    async function getCategoria() {
        const response = await categoriaService();
        setCategorias(response.data);
        console.log(response.data);
    }

    async function DeleteCategoria(id) {
        await deleteCategoria(id);
        getCategoria();
    } 

    return (
        <div className={style.categoria}>
            <header className={style.header}>
                <h1 className={style.titulo}>Categoria</h1>
                <Link to="/novacategoia" className={style.btnNew}>Novo</Link>
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
                            categorias.map((categoria, index) => (
                                <tr key={index}>
                                    <th>{categoria.Nome}</th>
                                    <th>{categoria.Descricao}</th>
                                    <th>
                                        <Link to={`/categoria/${categoria.Id}`} className={style.acoes}><icon.Pencil size={28} /></Link>
                                        <button className={style.acoes} onClick={() => DeleteCategoria(categoria.Id)}><icon.Trash size={28} /></button>
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