import { useState } from 'react';
import { categoriaService } from '../../service/categoriaService';
import style from './CategoriaPage.module.css';


export function CategoriaPage() {

    const [categoria, setCategoria] = useState();

    useState(() => {
        getCategoria();
    }, [])

    async function getCategoria() {
        const response = await categoriaService();
        setCategoria(response.data);
        console.log(response.data);
    }

    return (
        <div className={style.categoria}>
            <header className={style.header}>
                <h1 className={style.titulo}>Categoria</h1>
                <button className={style.btnNew}>Novo</button>
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
                        {/* { 
                            categoria.map((cat, index) => {
                                <th>{cat.nome}</th>
                            })
                        } */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}