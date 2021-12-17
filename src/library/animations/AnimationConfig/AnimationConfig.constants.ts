import {Easing} from 'react-native-reanimated';

export type DurationType = 'quick' | 'regular' | 'slow';

export const Duration: Record<DurationType, number> = {
  quick: 100,
  regular: 350,
  slow: 600,
};

export const spring = {
  stiffness: 250,
  damping: 25,
  mass: 1,
  velocity: 30,
  overshootClamping: false,
  restDisplacementThreshold: 0.001,
  restSpeedThreshold: 0.001,
};

export const scale = {
  duration: Duration.quick - 15,
  easing: Easing.inOut(Easing.ease),
};

export const translate = {
  duration: Duration.quick,
  easing: Easing.inOut(Easing.ease),
};

export const opacity = {
  duration: Duration.regular,
  easing: Easing.inOut(Easing.ease),
};
