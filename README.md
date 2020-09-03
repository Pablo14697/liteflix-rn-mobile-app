# Liteflix Mobile App

Liteflix Mobile App with React Native v0.63.2 - Typescript - Redux.

## Getting started

```
$ yarn install
$ cd ios && pod install
```
## Launch iOS
```
$ npx react-native run-ios
```

## Launch Android
```
$ npx react-native run-android
```

## VSCode extensions

- Prettier
- ESLint
- TSLint

## Create the .env file

Create a .env file in project's root folder and write this inside the file (I left a file called .env.example to ease the copied):

```
COMING_SOON_API_URL=https://api.themoviedb.org/3/movie/upcoming?api_key={get_a_key_from_themoviedb}
IMAGES_API_URL=https://image.tmdb.org/t/p/w500
NODE_ENV=dev
OUTSTANDING_API_URL=https://api.themoviedb.org/3/movie/now_playing?api_key={get_a_key_from_themoviedb}
POPULAR_API_URL=https://api.themoviedb.org/3/movie/popular?api_key={get_a_key_from_themoviedb}
```
## Libraries used

- React Native v0.63.2
- TypeScript
- Redux
- Formik with Yup
- Styled Components
- React Native Config (.env file)
- React Navigation v5
- AsyncStorage
- Lottie
- Image crop picker 
- Linear Gradient
- React Native SVG

:v: **Enjoy!**