import { wrapperApi } from "../plugins/api";

const API_URL_ = import.meta.env.VITE_SERVER_URL_;

export const getUsers = async () => {
  try {
    const response = await wrapperApi('get', `${API_URL_}/commits`);

    return response.map(item => ({
      id: item.node_id || 'Нет ID',
      name: item.commit?.author?.name || 'Нет данных',
      email: item.commit?.author?.email || 'Нет данных',
      date: item.commit?.author?.date || 'Нет данных'
    }));

  } catch (error) {
    console.error('Ошибка при получении пользователей:', error);
    return [];
  }
};