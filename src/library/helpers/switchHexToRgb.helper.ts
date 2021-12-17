export const switchHexToRgb = (hex: string) => {
  var isValid = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const result = isValid
    ? {
        r: parseInt(isValid[1], 16),
        g: parseInt(isValid[2], 16),
        b: parseInt(isValid[3], 16),
      }
    : null;

  if (result) {
    return `rgb(${result.r},${result.g},${result.b})`;
  } else {
    return hex;
  }
};
