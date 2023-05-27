import { extras } from '.';
import { Extra } from '../../model/Extra';

export async function GetExtra(): Promise<Extra[]> {
  return extras;
}
