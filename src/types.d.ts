import type { ScrollViewProps } from 'react-native';
import { Animated, ImageSourcePropType } from 'react-native';

export interface AnimatedScrollViewProps extends ScrollViewProps {
  /**
   * A header component to show a navbar when scrolling to the top
   */
  HeaderComponent: JSX.Element;

  /**
   * A Component to show on top of the image.
   */
  ForegroundComponent?: JSX.Element;

  /**
   * An overflow header component to show a navbar when scrolling to the bottom
   */
  OverflowHeaderComponent?: JSX.Element;

  /**
   * Height of the scrollable image. Default value is 300
   */
  headerMaxHeight?: number;

  /**
   * Height of the navbar header. Default value is 90
   */
  headerMinHeight?: number;

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
