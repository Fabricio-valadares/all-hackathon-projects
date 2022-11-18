import { api } from './api'

export const registerPerson = async (data: any) => {
	 return await api.post("/create-user", data);
};

export const loginPerson = async (data: any) => {
	const res = await api.post("/login", data);

	return res;
};