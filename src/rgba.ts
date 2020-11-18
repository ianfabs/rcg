import { random, special } from "../lib/random.ts";

/**
 * Generates a random rgba color (that is, an rgb color with an alpha value).
 * @author Ian Fabs
 * @param asString - if true, this function will return a CSS-spec color string (i.e. "rgba(103, 46, 19, 0.39)")
 * @returns {string} A CSS-spec rgba color string
 * @returns {number[]} An array of numbers representing rgba color values
 */
export const rgba = (asString: boolean = false): number[] | string => {
  const rgba: number[] = [
    ...random(3).map(n => n % 256),
    Number(special(0, 1, 0.0001).toFixed(2))
  ];
  return asString ? `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]})`: rgba;
};


export default rgba;
