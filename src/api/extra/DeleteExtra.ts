import { extras } from '.';

export async function DeleteExtra(id: string): Promise<void> {
  const index = extras.findIndex(extra => extra.id === id);
  if (index !== -1) {
    extras.splice(index, 1);
  }
}
