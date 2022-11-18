import { api } from "./api";

export const getLaunch = async (id: string) => {
	const result = await api.get(`/list-all-launch/${id}`);

	return result.data;
};

export const deleteLaunch = async (id: string) => {
	return await api.delete(`/delete-one-launch/${id}`);
};

export const createOnboarding = async (data: any) => {
	return await api.post("/onboarding-send", data);
};