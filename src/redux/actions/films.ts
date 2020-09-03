import { FILMS_DATA, FILMS_DATA_ERROR } from './types';

export interface SetFilmsAction {
  type: typeof FILMS_DATA | typeof FILMS_DATA_ERROR;
  payload: object;
  error: boolean;
}

export function setFilms(payload: any) {
  return { type: FILMS_DATA, payload };
}

export function setFilmsError(status: any) {
  return { type: FILMS_DATA_ERROR, payload: status };
}
