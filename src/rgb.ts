import { toRatio } from "../lib/byte.ts";
import mkcb, { ColorBytes } from "../lib/random.ts";
import { ColorGenerator } from "../lib/types.ts";

export type RGB = ColorBytes;
/**
 * Generate a random rgb color.
 * @author Ian Fabs
 * @param alpha - if true, an additional alpha-value will be included
 * @returns An array of rgb color values
 */
export const rgb: ColorGenerator<RGB> = (alpha = false) => {
  const bytes = mkcb(alpha);
  bytes[3] &&= toRatio(bytes[3]);
  return bytes as RGB;
};
export default rgb;
