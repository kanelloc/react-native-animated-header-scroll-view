import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { StyleSheet } from 'react-native';

const ArrowLeft = (props: any) => (
  <Svg
    viewBox="0 0 512 512"
    {...props}
    width={18}
    height={18}
    style={StyleSheet.flatten([{ transform: [{ scaleX: 1 }] }])}
  >
    <Path
      fill="none"
      stroke="#000000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={48}
      d="M328 112 184 256l144 144"
    />
  </Svg>
);

export default ArrowLeft;
