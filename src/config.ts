import envVariables from 'react-native-config';

const {
  COMING_SOON_API_URL,
  IMAGES_API_URL,
  OUTSTANDING_API_URL,
  NODE_ENV,
  POPULAR_API_URL,
} = envVariables;

export const isProduction = NODE_ENV === 'prod';

interface Config {
  COMING_SOON_API_URL: string;
  IMAGES_API_URL: string;
  OUTSTANDING_API_URL: string;
  POPULAR_API_URL: string;
}

const Config = {
  COMING_SOON_API_URL,
  IMAGES_API_URL,
  OUTSTANDING_API_URL,
  POPULAR_API_URL,
};

export default Config;
