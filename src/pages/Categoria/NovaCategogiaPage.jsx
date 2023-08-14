import { Link, useParams } from 'react-router-dom';
import style from './CategoriaPage.module.css';
import { useEffect, useState } from 'react';
import { categoriaById, postCategoria } from '../../service/categoriaService';

export function NovaCategoriaPage() {

    const id = useParams();

    useEffect(() => {
        if(id != null) {
            findCategoria(id)
        }
    }, [])

    const [categoria, setCategoria] = useState({
        Nome: "",
        Descricao: "",
    });

    function inputChange(e) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        });
    }

    async function findCategoria(id) {
        const response = await categoriaById(id);

        console.log(response);
        
        if (response) {
            setCategoria({
                Id:response.id,
                Nome: response.nome,
                Descricao: response.descricao,
            });
        }
    }

    async function submit(e) {
        e.preventDefault();

        const response = await postCategoria(categoria);
        setCategoria({
            Nome: "",
            Descricao: ""
        });
        return response;
    }

    return (
        <div className={style.novaCategoriaPage}>
            <header className={style.header}>
                <h1 className={style.titulo}>Nova Categoria</h1>
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
                            value={categoria.Nome}
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
                            value={categoria.Descricao}
                            onChange={(e) => inputChange(e)}
                         />
                    </div>
                    <div className={style["control-container"]}>
                        <Link onClick={submit} className={style.save}>Salvar</Link>
                        <Link to="/categoria" className={style.cancel}>Cancelar</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

