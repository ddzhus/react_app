import axios from 'axios';
import { API_URL } from '../constants';
import { IUser } from '../types';

type QueryParams = {
  results: number,
  page: number,
  inc: string,
  seed: string,
};

export const getUsers = async (params: QueryParams): Promise<IUser> => {
  try {
    const { data } = await axios.get<{ results: IUser }>(API_URL, {
      params,
    });
    return data.results;
  } catch (err) {
    throw new Error('Что-то пошло не так 😟');
  }
};
