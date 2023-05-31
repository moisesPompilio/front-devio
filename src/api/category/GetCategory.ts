import { categories } from '.';
import { Category } from '../../model/entity/Category';

export async function GetCategory(): Promise<Category[]> {
  return categories;
}
