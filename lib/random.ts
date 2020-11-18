/**
 * A tuple containing at least 3, and at most 4, numbers representing
 * color values.
 */
export type ColorBytes = [number, number, number] | [
  number,
  number,
  number,
  number,
];

/**
 * **M**a**k**e **C**olor **B**ytes
 * 
 * Create a random array of bytes for use with colors.
 * 
 * @param alpha If true, a random alpha-value is also generated (defaults to false).
 * @returns An array of random numbers
 * @author Ian Fabs <ian@fabs.dev>
 */
export const mkcb = (alpha: boolean): ColorBytes =>
  [...crypto.getRandomValues(new Uint8Array(alpha && 4 || 3))] as ColorBytes;
export default mkcb;
