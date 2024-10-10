import $axios from '@/http';
import { ProductType } from '../types';

export const getProduct = async () => {
  try {
    const { data } = await $axios.get('/products');

    return data as ProductType[];
  } catch (error: any) {
    console.log('get products', error);
    throw new Error(error);
  }
};
