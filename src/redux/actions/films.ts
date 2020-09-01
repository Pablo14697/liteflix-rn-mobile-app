import { COMING_SOON_DATA } from './types';

export function setComingSoonFilms(payload: any) {
  return { type: COMING_SOON_DATA, payload };
}
