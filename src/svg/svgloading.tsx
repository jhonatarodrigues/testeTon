import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: animateTransform */

const SvgComponent = (props) => (
  <Svg
    width={200}
    height={200}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <Circle
      cx={50}
      cy={50}
      fill="none"
      stroke="#0a0a0a"
      strokeWidth={10}
      r={35}
      strokeDasharray="164.93361431346415 56.97787143782138"
    ></Circle>
  </Svg>
);

export default SvgComponent;
