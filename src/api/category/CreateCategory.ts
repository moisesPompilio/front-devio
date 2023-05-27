import { categories } from '.';
import { Category } from '../../model/Category';

export async function CreateCategory(category: Category): Promise<Category> {
  const newCategory: Category = { ...category };
  const lastCategory = categories[categories.length - 1];
  const lastCategoryId = lastCategory?.id ?? '0';
  const id = (parseInt(lastCategoryId, 10) + 1).toString();
  newCategory.id = id;
  categories.push(newCategory);
  return newCategory;
}
