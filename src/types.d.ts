import type { ScrollViewProps } from 'react-native';
import { Animated, ImageSourcePropType } from 'react-native';

export interface AnimatedScrollViewProps extends ScrollViewProps {
  /**
   * A header component to show a navbar when scrolling to the top
   */
  HeaderComponent: JSX.Element;

  /**
   * An overflow header component to show a navbar when scrolling to the bottom
   */
  OverflowHeaderComponent?: JSX.Element;

  /**
   * Height of the scrollable image. Default value is 300
   */
  headerImgHeight?: number;

  /**
   * Height of the navbar header. Default value is 90
   */
  headerHeight?: number;

  /**
   * @see https://reactnative.dev/docs/image#source
   */
  headerImage?: ImageSourcePropType;
}

export interface AnimatedHeaderProps {
  scroll: Animated.Value;
  OverflowHeaderComponent?: JSX.Element;
  HeaderComponent?: JSX.Element;
  imageHeight: number;
  headerHeight: number;
}
