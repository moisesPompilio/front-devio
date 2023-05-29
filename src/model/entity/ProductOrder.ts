import { Extra } from './Extra';

export type ProductOrder = {
  id: string;
  name: string;
  description: string;
  price: number;
  extra?: Extra[];
  image: string;
  observation?: string;
  quantity: number;
};
