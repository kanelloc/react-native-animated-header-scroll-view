import { Platform } from 'react-native';

export const isIOS = Platform.OS === 'ios';

export const data = Array.from(Array(20).keys());
