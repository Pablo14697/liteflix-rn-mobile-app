import envVariables from 'react-native-config';

const { API_URL, IMAGES_API_URL, MOVIE_DB_API_KEY, NODE_ENV } = envVariables;

export const isProduction = NODE_ENV === 'prod';

interface Config {
  API_URL: string;
  IMAGES_API_URL: string;
  MOVIE_DB_API_KEY: string;
  NODE_ENV: string;
}

const Config: Config = {
  API_URL,
  IMAGES_API_URL,
  MOVIE_DB_API_KEY,
  NODE_ENV,
};

export default Config;
