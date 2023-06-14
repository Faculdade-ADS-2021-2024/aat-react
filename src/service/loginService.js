import { api } from "./api";

export const createSession = async (login, senha) => {
    return api.post('/api/login', {login, senha});
}