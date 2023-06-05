import { api } from '..';
import { Extra } from '../../model/entity/Extra';

export async function GetExtra(): Promise<Extra[]> {
  const response = await api.get('extra');
  const extras: Extra[] = response.data;
  return extras;
}
