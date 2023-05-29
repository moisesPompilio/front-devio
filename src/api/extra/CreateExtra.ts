import { extras } from '.';
import { CreateExtra } from '../../model/CreaExtra';
import { Extra } from '../../model/entity/Extra';

export async function CreateExtra(extra: CreateExtra): Promise<Extra> {
  const lastExtra = extras[extras.length - 1];
  const lastExtraId = lastExtra.id;
  const id = (parseInt(lastExtraId, 10) + 1).toString();
  const newExtra: Extra = { ...extra, id };
  extras.push(newExtra);
  return newExtra;
}
