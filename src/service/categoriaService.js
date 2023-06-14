import { api } from "./api";

export const categoriaService = async () => {
    return api.get('/api/categoria');
}