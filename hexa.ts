import special from "./random.ts";

/**
 * Generates a random hex-alpha color (that is, a hex color with an extra two digits representing an alpha value).
 * @author Ian Fabs
 * @param asString - if true, this function will return a CSS-spec color string (i.e. "#c3c3c3e0")
 * @returns {string} A random hex-alpha color
 */
export const hexa = (asString: boolean = false): number | string => {
  const rn = special() * 100;
  const bitShiftedValue = (1 << 26) * rn | 0;
  const hexValue = bitShiftedValue.toString(16);
  return asString ? "#" + hexValue : hexValue;
}

export default hexa;
