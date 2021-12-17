import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {ViewStyle, StyleProp, TextStyle} from 'react-native';

//other deps
import Slider from 'react-native-slider';
import styles from './StandardSlider.styles';

//images
// import thumbImage from 'assets/images/slider/thumb.png';

//types
type StandardSliderProps = {
  value: number;
  minValue?: number;
  maxValue?: number;
  step?: number;
  onChange: (newValue: number) => void;
};

export const StandardSlider: React.FC<StandardSliderProps> = ({
  value,
  minValue = 0,
  maxValue = 1,
  step = 1,
  onChange,
}) => {
  return (
    <Slider
      value={value}
      minimumValue={minValue}
      maximumValue={maxValue}
      step={step}
      trackStyle={styles.track}
      thumbTintColor={'#5C3661'}
      // thumbImage={thumbImage}
      minimumTrackTintColor={'#FDB78F'}
      onValueChange={(newVal: number) => onChange(newVal)}
    />
  );
};
