import { Extra } from '../model/entity/Extra';

export const getExtraFromArrayId = (
  idExtras: string[],
  extras: Extra[],
): Extra[] => {
  if (idExtras.length === 0) {
    return [];
  }
  return extras.filter(extra => idExtras.includes(extra?.id ?? ' '));
};
