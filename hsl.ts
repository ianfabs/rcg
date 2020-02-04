import special from "./random.ts";

/**
 * Generates a random hsl color.
 * @author Ian Fabs
 * @param asString - if true, this function will return a CSS-spec color string (i.e. "hsl(275, 87%, 31%)")
 * @returns {string} A CSS-spec hsl color string
 * @returns {number[]} An array of numbers representing hsl color values
 */
export const hsl = (asString: boolean = false): number[] | string => {
  const hsl: number[] = [
    // Hue
    Number(special(0, 361, 1).toFixed(0)),
    // Saturation
    Number(special(0, 100, 1).toFixed(0)),
    // Lightness
    Number(special(0, 100, 1).toFixed(0))
  ];
  return asString ? `hsl(${hsl[0]}, ${hsl[1]}, ${hsl[2]})` : hsl;
};

export default hsl;
