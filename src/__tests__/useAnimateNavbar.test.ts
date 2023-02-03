import { renderHook } from '@testing-library/react-hooks';
import { useAnimateNavbar } from '../hooks/useAnimateNavbar';
import { HEADER_HEIGHT, IMG_HEADER_HEIGHT } from '../constants';
import { Animated } from 'react-native';
import { useRef } from 'react';

describe('useAnimatedNavbar basic tests', () => {
  it('should return starting points', () => {
    const { result } = renderHook(() => {
      const first = (IMG_HEADER_HEIGHT - HEADER_HEIGHT) * 0.75; // 157,5
      const scroll = useRef(new Animated.Value(first)).current;
      return useAnimateNavbar(scroll, IMG_HEADER_HEIGHT, HEADER_HEIGHT);
    });

    const [headerOpacity, overflowHeaderOpacity] = result.current;

    expect(JSON.stringify(headerOpacity)).toBe('0');
    expect(JSON.stringify(overflowHeaderOpacity)).toBe('1');
  });

  it('should return ending points', () => {
    const { result } = renderHook(() => {
      const first = IMG_HEADER_HEIGHT - HEADER_HEIGHT; // 210
      const scroll = useRef(new Animated.Value(first)).current;
      return useAnimateNavbar(scroll, IMG_HEADER_HEIGHT, HEADER_HEIGHT);
    });

    const [headerOpacity, overflowHeaderOpacity] = result.current;

    expect(JSON.stringify(headerOpacity)).toBe('1');
    expect(JSON.stringify(overflowHeaderOpacity)).toBe('0');
  });

  it('should return 50% of interpolation', () => {
    const { result } = renderHook(() => {
      const start = (IMG_HEADER_HEIGHT - HEADER_HEIGHT) * 0.75; // 157,5
      const end = IMG_HEADER_HEIGHT - HEADER_HEIGHT; // 210
      const diff = (end - start) / 2;

      const scroll = useRef(new Animated.Value(end - diff)).current;
      return useAnimateNavbar(scroll, IMG_HEADER_HEIGHT, HEADER_HEIGHT);
    });

    const [headerOpacity, overflowHeaderOpacity] = result.current;

    expect(JSON.stringify(headerOpacity)).toBe('0.5');
    expect(JSON.stringify(overflowHeaderOpacity)).toBe('0.5');
  });

  it('should return 80% of interpolation', () => {
    const { result } = renderHook(() => {
      const start = (IMG_HEADER_HEIGHT - HEADER_HEIGHT) * 0.75; // 157,5
      const end = IMG_HEADER_HEIGHT - HEADER_HEIGHT; // 210
      const diff = (end - start) * 0.8;

      const scroll = useRef(new Animated.Value(end - diff)).current;
      return useAnimateNavbar(scroll, IMG_HEADER_HEIGHT, HEADER_HEIGHT);
    });

    const [headerOpacity, overflowHeaderOpacity] = result.current;

    expect(JSON.stringify(headerOpacity)).toBe('0.2');
    expect(JSON.stringify(overflowHeaderOpacity)).toBe('0.8');
  });
});
