import { createRef } from 'react';
import { NavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createRef<NavigationContainerRef>();

export function goToPage(name: string, params: object = {}) {
  navigationRef.current?.navigate(name, params);
}

export function goBack() {
  navigationRef.current?.goBack();
}

export function resetStack(name: string) {
  navigationRef.current?.reset({
    index: 0,
    routes: [{ name }],
  });
}
