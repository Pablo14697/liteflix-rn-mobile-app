import { FILMS_DATA, FILMS_DATA_ERROR, UPDATE_FLAG } from './types';

export interface SetFilmsAction {
  type: typeof FILMS_DATA | typeof UPDATE_FLAG | typeof FILMS_DATA_ERROR;
  payload: object;
  error: boolean;
}

export function setFilms(payload: any) {
  return { type: FILMS_DATA, payload };
}

export function setFilmsError(status: any) {
  return { type: FILMS_DATA_ERROR, payload: status };
}

export function setUpdateFlag(status: boolean) {
  return { type: UPDATE_FLAG, error: status };
}
