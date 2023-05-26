export type Product = {
  id?: string;
  name: string;
  description: string;
  price: number;
  category_id: string;
  extra?: string[];
  image: string;
  code: string;
};
