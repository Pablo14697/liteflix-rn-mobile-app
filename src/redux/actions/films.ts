import { COMING_SOON_DATA, OUTSTANDING_DATA, POPULAR_DATA } from './types';

export interface SetFilmsAction {
  type: typeof COMING_SOON_DATA | typeof OUTSTANDING_DATA | typeof POPULAR_DATA;
  payload: object;
  error: boolean;
}

export function setComingSoonFilms(payload: any) {
  return { type: COMING_SOON_DATA, payload };
}

export function setOutstandingFilms(payload: any) {
  return { type: OUTSTANDING_DATA, payload };
}

export function setPopularFilms(payload: any) {
  return { type: POPULAR_DATA, payload };
}
