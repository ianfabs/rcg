import special from "./random.ts";

/**
 * Generates a random hex color.
 * @author Ian Fabs
 * @param asString - if true, this function will return a CSS-spec color string (i.e. "#c3c3c3")
 * @returns {string} A random hex color
 */
export const hex = (asString: boolean = false): string => {
  const rn = special();
  const bitShiftedValue = (1 << 23) * rn | 0;
  const hexValue = bitShiftedValue.toString(16);
  return asString ? "#" + hexValue : hexValue;
}

export default hex;
