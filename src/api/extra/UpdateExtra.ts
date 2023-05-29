import { extras } from '.';
import { Extra } from '../../model/entity/Extra';

export async function UpdateExtra(
  id: string,
  extraUpdate: Extra,
): Promise<void> {
  const index = extras.findIndex(extra => extra.id === id);
  extras[index] = extraUpdate;
}
