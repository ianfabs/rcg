import { random } from "./random.ts";

/**
 * Generates a random rgb color.
 * @author Ian Fabs
 * @param asString - if true, this function will return a CSS-spec color string (i.e. "rgb(103, 46, 19)")
 * @returns {string} A CSS-spec rgb color string
 * @returns {number[]} An array of numbers representing rgb color values
 */
export const rgb = (asString: boolean = false): number[] | string => {
  const rgb: number[] = [...random(3).map(n => n % 256)];
  return asString ? `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})` : rgb;
};

export default rgb;
