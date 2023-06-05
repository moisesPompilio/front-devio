import { api } from '..';
import { Category } from '../../model/entity/Category';

export async function GetCategory(): Promise<Category[]> {
  const response = await api.get('category');
  const categories: Category[] = response.data;
  return categories;
}
