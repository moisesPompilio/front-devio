import { extras } from '.';
import { Extra } from '../../model/entity/Extra';

export async function GetExtra(): Promise<Extra[]> {
  return extras;
}
