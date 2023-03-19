import { getPokemonByName } from '../requests/pokemons';
import { wait } from '../utils';

export default async (parent, params) => {
  await wait(3000);
  return getPokemonByName(params.name);
};
