import { api } from "./api";

export const getProduto = () => {
    return api.get('/api/produto');
}

export const getProdutoId = (id) => {
    return api.get(`/api/produto/${id}`);
}

export const postProduto = ({Nome, Descricao}) => {
    return api.post(`/api/produto`, {Nome, Descricao});
}

export const putProduto = ({Id, Nome, Descricao}) => {
    return api.get(`/api/produto`, {Id, Nome, Descricao});
}

export const deleteProduto = (id) => {
    return api.get(`/api/produto/${id}`);
}