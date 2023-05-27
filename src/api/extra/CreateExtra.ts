import { extras } from '.';
import { Extra } from '../../model/Extra';

export async function CreateExtra(extra: Extra): Promise<Extra> {
  const newExtra: Extra = { ...extra };
  const lastExtra = extras[extras.length - 1];
  const lastExtraId = lastExtra?.id ?? '0';
  const id = (parseInt(lastExtraId, 10) + 1).toString();
  newExtra.id = id;
  extras.push(newExtra);
  return newExtra;
}
