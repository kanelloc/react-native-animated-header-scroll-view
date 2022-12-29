import type { ScrollViewProps } from 'react-native';
import { Animated, ImageSourcePropType } from 'react-native';

export interface AnimatedScrollViewProps extends ScrollViewProps {
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
}

export interface AnimatedHeaderProps {
  scroll: Animated.Value;
  OverflowHeaderComponent?: JSX.Element;
  HeaderComponent?: JSX.Element;
  imageHeight: number;
  headerHeight: number;
}
