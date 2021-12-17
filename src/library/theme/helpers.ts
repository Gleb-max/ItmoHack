export const scaleFont = (size: number): number => size;

type CrossplatformShadow = {
  shadowColor: string;
  shadowOffset: {width: number; height: number};
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
};

export function boxShadow(
  color: string,
  {x, y} = {x: 2, y: 2},
  radius = 8,
  opacity = 0.2,
  elevation = 2,
): CrossplatformShadow {
  return {
    shadowColor: color,
    shadowOffset: {
      width: x,
      height: y,
    },
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: elevation,
  };
}
