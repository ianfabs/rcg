import special from "./random.ts";

/**
 * Generates a random hsla color (that is, an hsl color with an alpha value).
 * @author Ian Fabs
 * @param asString - if true, this function will return a CSS-spec color string (i.e. "hsl(275, 87%, 31%, 0.47)")
 * @returns {string} A CSS-spec hsla color string
 * @returns {number[]} An array of numbers representing hsla color values
 */
export const hsla = (asString: boolean = false): number[] | string => {
  const hsla: number[] = [
    Number(special(0, 361, 1).toFixed(0)),
    Number(special(0, 100, 1).toFixed(0)),
    Number(special(0, 100, 1).toFixed(0)),
    Number(special(0, 1, 0.0001).toFixed(2))
  ];
  return asString ? `hsla(${hsla[0]}, ${hsla[1]}%, ${hsla[2]}%, ${hsla[3]})`: hsla;
};

export default hsla;
