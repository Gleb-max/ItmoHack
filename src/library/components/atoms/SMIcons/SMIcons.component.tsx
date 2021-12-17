import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {TextStyle} from 'react-native';

//other deps
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Svg, {Path, PathProps} from 'react-native-svg';

//constants
import {icons} from './SMIcons.constants';

//types
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {SMIconsProps} from './SMIcons.interface';

//helpers
import {flattenStyle} from 'library/helpers';

export const SMIcons: React.FC<SMIconsProps> = React.memo(
  ({name, color, size, style, width = 24, height = 24}) => {
    const _style = flattenStyle(style) as TextStyle;

    const iconSize = (_style?.fontSize || size) as number;
    const iconColor = (_style?.color || color) as string;

    //renders
    const _renderPaths = () => {
      let iconName = name;

      if (!(iconName in icons)) {
        iconName = 'ic_wrong_icon';
      }

      return icons[iconName].map((path) => {
        const evenOdd: PathProps = path.evenOdd
          ? {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
            }
          : {};

        return <Path {...evenOdd} key={path.d} d={path.d} />;
      });
    };

    return (
      <Svg
        width={iconSize}
        height={iconSize}
        viewBox={`0 0 ${width} ${height}`}
        fill={iconColor}
        style={_style}>
        {_renderPaths()}
      </Svg>
    );
  },
);
