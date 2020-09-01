import { COMING_SOON_DATA } from './types';

export interface SetComingSoonFilmsAction {
  type: typeof COMING_SOON_DATA;
  payload: object;
  error: boolean;
}

export function setComingSoonFilms(payload: any) {
  return { type: COMING_SOON_DATA, payload };
}
