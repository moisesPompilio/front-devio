import { categories } from '.';
import { CreateCategory } from '../../model/CreateCategory';
import { Category } from '../../model/entity/Category';

export async function CreateCategory(
  category: CreateCategory,
): Promise<Category> {
  const lastCategory = categories[categories.length - 1];
  const lastCategoryId = lastCategory.id;
  const id = (parseInt(lastCategoryId, 10) + 1).toString();
  const newCategory: Category = { ...category, id };
  categories.push(newCategory);
  return newCategory;
}
