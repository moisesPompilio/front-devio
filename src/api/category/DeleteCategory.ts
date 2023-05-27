import { categories } from '.';

export async function DeleteCategory(id: string): Promise<void> {
  const index = categories.findIndex(category => category.id === id);
  if (index !== -1) {
    categories.splice(index, 1);
  }
}
