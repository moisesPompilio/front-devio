import { categories } from '.';
import { Category } from '../../model/Category';

export async function GetCategory(): Promise<Category[]> {
  return categories;
}
