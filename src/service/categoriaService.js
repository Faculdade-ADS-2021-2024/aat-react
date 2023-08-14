import { api } from "./api";

export const categoriaService = async () => {
    return api.get('/api/categoria');
}

export const categoriaById = async (id) => {
    return api.get(`/api/categoria/${id}`);
}

export const postCategoria = async ({Nome, Descricao}) => {
    return api.post('/api/categoria', {Nome, Descricao});
}

export const putCategoria = async ({Nome, Descricao}) => {
    return api.put('/api/categoria', Nome, Descricao);
}

export const deleteCategoria = async (id) => {
    return api.delete(`/api/categoria/${id}`);
}