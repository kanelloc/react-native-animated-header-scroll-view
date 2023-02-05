import type {
  FlatListProps,
  ImageStyle,
  ScrollViewProps,
  StyleProp,
} from 'react-native';
import { Animated, ImageSourcePropType } from 'react-native';

type AnimatedViewProps = {
  /**
   * Rendered on top of the screen as a navbar when scrolling to the top
   */
  TopNavBarComponent: JSX.Element;

  /**
   * A component to use on top of header image. It can also be used
   * without header image to render a custom component as header.
   */
  HeaderComponent?: JSX.Element;

  /**
   * Rendered on top of the header. Transitions to TopNavbarComponent as you scroll
   */
  HeaderNavbarComponent?: JSX.Element;

  /**
   * Height of the header (headerImage or HeaderComponent). Default value is 300
   */
  headerMaxHeight?: number;

  /**
   * Height of the top navbar. Default value is 90
   */
  topBarHeight?: number;

  /**
   * @see https://reactnative.dev/docs/image#source
   */
  headerImage?: ImageSourcePropType;

  /**
   * Disables header scaling when scrolling
   */
  disableScale?: boolean;

  /**
   * Image styles
   */
  imageStyle?: StyleProp<ImageStyle>;
};

export type AnimatedScrollViewProps = AnimatedViewProps & ScrollViewProps;

export type AnimatedFlatListViewProps = AnimatedViewProps & FlatListProps<any>;

export type AnimatedNavbarProps = {
  scroll: Animated.Value;
  OverflowHeaderComponent?: JSX.Element;
  TopNavbarComponent?: JSX.Element;
  imageHeight: number;
  headerHeight: number;
};

export type AnimatedHeaderProps = {
  imageHeight: number;
  translateYUp: Animated.AnimatedInterpolation<string | number> | 0;
  translateYDown: Animated.AnimatedInterpolation<string | number> | 0;
  scale: Animated.AnimatedInterpolation<string | number> | 1;
  imageStyle?: StyleProp<ImageStyle>;
  HeaderComponent?: JSX.Element;
  headerImage?: ImageSourcePropType;
};
